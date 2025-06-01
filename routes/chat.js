const express = require('express');
const axios = require('axios');
const router = express.Router();

const DIRECT_LINE_SECRET = process.env.DIRECT_LINE_SECRET;
const DIRECT_LINE_URL = process.env.DIRECT_LINE_URL;

// Chat route with Azure bot
router.post('/', async (req, res) => {
    const { message, userId } = req.body;

    try {
        // Start a new conversation
        const startConvRes = await axios.post(`${DIRECT_LINE_URL}/conversations`, {}, {
            headers: {
                Authorization: `Bearer ${DIRECT_LINE_SECRET}`
            }
        });

        const conversationId = startConvRes.data.conversationId;

        // Send the user's message
        await axios.post(`${DIRECT_LINE_URL}/conversations/${conversationId}/activities`, {
            type: 'message',
            from: { id: userId || 'user1' },
            text: message
        }, {
            headers: {
                Authorization: `Bearer ${DIRECT_LINE_SECRET}`
            }
        });

        // Wait briefly to allow bot to respond
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Retrieve bot response
        const activitiesRes = await axios.get(`${DIRECT_LINE_URL}/conversations/${conversationId}/activities`, {
            headers: {
                Authorization: `Bearer ${DIRECT_LINE_SECRET}`
            }
        });

        const activities = activitiesRes.data.activities;
        const botMessages = activities.filter(activity => activity.from.id !== (userId || 'user1'));

        res.status(200).json({
            replies: botMessages.length
                ? botMessages.map(msg => msg.text).filter(Boolean)
                : ['I didnt quite catch that. Can you repeat?']
        });

    } catch (error) {
        console.error('Chat error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to communicate with bot' });
    }
});

module.exports = router;
