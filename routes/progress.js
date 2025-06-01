const express = require('express');
const router = express.Router();
const admin = require('../config/firebase');

// Save progress route
router.post('/save-progress', async (req, res) => {
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

module.exports = router;
