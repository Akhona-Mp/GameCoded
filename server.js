const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const chatRoute = require('./routes/chat');
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/progress', require('./routes/progress'));
app.use('/chat', chatRoute);

app.get('/', (req, res) => {
  res.send('Game-Coded backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
