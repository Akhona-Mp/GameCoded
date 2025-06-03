const express = require('express');
const admin = require('firebase-admin');
const router = express.Router();

// Initialize Firebase Admin SDK
const serviceAccount = require('../firebase-key.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

// Sign-up endpoint
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
        });
        res.status(201).send({ message: 'User created successfully', userId: userRecord.uid });
    } catch (error) {
        res.status(400).send({ message: 'Error creating user', error: error.message });
    }
});

// Sign-in endpoint
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Firebase Authentication does not provide direct password verification in the Admin SDK.
        // Use Firebase Client SDK on the frontend for sign-in and token generation.
        res.status(400).send({
            message: 'Sign-in should be handled on the client side using Firebase Authentication SDK.',
        });
    } catch (error) {
        res.status(400).send({ message: 'Error signing in', error: error.message });
    }
});

// Verify token endpoint (optional)
router.post('/verify-token', async (req, res) => {
    const { token } = req.body;
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.status(200).send({ message: 'Token verified successfully', decodedToken });
    } catch (error) {
        res.status(401).send({ message: 'Invalid token', error: error.message });
    }
});

module.exports = router;
