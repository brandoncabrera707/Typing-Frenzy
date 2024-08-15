
const express = require('express');
const fs = require('fs');
const db = require('firebase/firebase.js');


const app = express();

app.use(express.json());


const port = process.env.PORT || 1212;

app.listen(port,
  () =>  console.log(`it's alive on http://localhost:${port}`));


app.get('/db', (req,res) => {
  res.send('Hello World!!');
});


app.get('/passages', (req,res) => {

})


