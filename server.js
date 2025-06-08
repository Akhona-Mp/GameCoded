// const admin = require('firebase-admin');
// const serviceAccount = require('./firebase-key.json');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
import admin from 'firebase-admin';
import serviceAccount from './firebase-key.json' assert { type: 'json' };
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import _ from 'lodash';
//axio to make HTTP requests to Azure's Direct Line API
// const axios = require('axios');
// require('dotenv').config();
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


//Azure direct line config
const DIRECT_LINE_SECRET = process.env.DIRECT_LINE_SECRET;
const DIRECT_LINE_URL = process.env.DIRECT_LINE_URL;


// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample routef
app.get('/', (req, res) => {
    res.send('Game-Coded backend is running');
});

// Save progress route
app.post('/save-progress', async (req, res) => {
    try {
        const { userId, progress } = req.body;

        await admin.firestore().collection('progress').doc(userId).set({
            progress,
            updatedAt: new Date()
        });

        res.status(200).send({ message: 'Progress saved!' });
    } catch (error) {
        console.error('Progress saving error:', error);
        res.status(500).send({ error: 'Something went wrong.' });
    }
});

// Signup route with Firestore 
app.post('/signup', async (req, res) => {
    const { email, password, name, surname } = req.body;

    try {
        console.log('Creating user in Firebase Auth...');
        const userRecord = await admin.auth().createUser({
            email,
            password
        });

        console.log('User created:', userRecord.uid);
        console.log('Attempting to save to Firestore...');

        // Save user data in Firestore
        await admin.firestore().collection('users').doc(userRecord.uid).set({
            email,
            name,
            surname,
            createdAt: new Date(),
            completed_lessons: [],
            points: 0
        });

        console.log('User data saved to Firestore.');

        res.status(201).json({
            message: 'User created successfully',
            user: {
                uid: userRecord.uid,
                email: userRecord.email
            }
        });

    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ error: error.message });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { idToken } = req.body;

    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        const uid = decodedToken.uid;

        const userRecord = await admin.auth().getUser(uid);

        res.status(200).json({
            message: 'Login successful',
            user: {
                uid: userRecord.uid,
                email: userRecord.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }
});

//post to load lessons
app.post('/getLesson',async (req,res) => {
    const {lessonId }=req.body
    try{
        const content = await admin.firestore().collection('lessons').doc("Lesson"+lessonId).get()
        if(content.exists){
            const parsed= content.data()
            res.status(200).json(
                {parsed}
            )
        }else{
            console.log("Can't find the lesson")
            res.status(400).json("Failed to find relevant lesson")
        }
    }catch (error) {
        console.error('Login error:', error);
        res.status(401).json({ error: 'Unauthorized' });
    }

})
//Load course
app.post('/getCourse',async (req,res)=>{
    const{course}=req.body
    const content= await admin.firestore().collection('lessons').where("language","==",course).get()
    let summaries=[]
    if(!content.empty){
            content.forEach(doc=>{
                let parsed=doc.data()
                summaries.push(
                    {
                        "description":parsed.lesson_description,
                        "points":parsed.points,
                        "name":parsed.name,
                        "id": parsed.id
                    }
                )
            })
    }
    res.status(200).json({
        course
        ,summaries}
    )
})
//check exercise
app.post("/mark",async (req,res)=>{
    const {userId,lessonId,answer}=req.body
    console.log(userId)
    const lessonRef= admin.firestore().collection('lessons').doc("Lesson"+lessonId)
    let result;
    const check = (await lessonRef.get()).data()
    if(_.isEqual(answer,check.lesson_answers)){
        const userRef= admin.firestore().collection('users').doc(userId)
        await userRef.update({
            completedLessons: admin.firestore.FieldValue.arrayUnion(lessonRef)
          })
        const userDoc= await userRef.get()
        const updated = userDoc.data().points+check.points
        userRef.update({
            points:updated
        })
        result="correct"
        res.status(200).json({
            result,
            updated}
        )
    }else{
        result="incorrect"
        res.status(200).json({result})
    }
})
//Get leaderboards

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
