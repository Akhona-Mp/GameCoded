const express = require('express');
const router = express.Router();
const admin = require('../config/firebase');

// Signup route
router.post('/signup', async (req, res) => {
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
            createdAt: new Date()
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
router.post('/login', async (req, res) => {
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

module.exports = router;
