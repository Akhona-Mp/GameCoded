const admin = require('firebase-admin');
const serviceAccount = require('./firebase-key.json');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample route
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

// Signup route with Firestore write
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

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
