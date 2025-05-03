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
  

//start server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:3000`);
});