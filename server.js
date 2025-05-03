//required imports
//firebase admin sdk
const admin = require('firebase-admin');
const serviceAccount= require ('./firebase-key.json');
const express = require('express');
const bodyParser=require('body-parser');
const cors= require('cors');


//app object to define routes and configure server
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:"https://gamecode-5c399.firebaseio.com"
    
})
const app=express();
const PORT = process.env.PORT||3000;//checks if a port value is set in the enviroment variables(on a server or .env file)

//Middleware
app.use(cors());
app.use(bodyParser.json());

//sample route
app.get('/',(req,res)=>{
    res.send('Game-Coded backend is running');
});
app.post('/save-progress', async (req, res) => {
    try {
      const { userId, progress } = req.body;
  
      await admin.firestore().collection('progress').doc(userId).set({
        progress,
        updatedAt: new Date()
      });
  
      res.status(200).send({ message: 'Progress saved!' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Something went wrong.' });
    }

  });

  // signup
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const userRecord = await admin.auth().createUser({
        email,
        password
      });
  
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
  
  // login
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
  

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:3000`);
});