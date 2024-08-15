
const express = require('express');
const db =require('/Users/brandoncabrera/Desktop/Typing_Frenzy/firebaseSetUp/firebase.js'); //firestore setup
const { collection, getDocs } = require('firebase/firestore');


const app = express();

app.use(express.json());//middleware


const port = process.env.PORT || 1212;

app.listen(port,
  () =>  console.log(`it's alive on http://localhost:${port}`));


//default route from firestore  
app.get('/db', (req, res) => {
  // Get a reference to the collection
  const colRef = collection(db, 'passages');

  // Retrieve documents from the collection
  getDocs(colRef)
    .then((snapshot) => {
      // Check if there are no documents
      if (snapshot.empty) {
        res.status(404).send('No matching documents.');
        return;
      }

      // array to store document data
      const data = [];

      // iterate over documents and push data to the array
      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data()
        });
      });

      // Send the data as a JSON response
      res.json(data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error fetching documents:', error);
      res.status(500).send('Error fetching documents.');
    });
});

app.get('/db/random', (req, res) => {
  const colRef = collection(db, 'passages'); // Replace 'passages' with your collection name

  getDocs(colRef)
    .then((snapshot) => {
      if (snapshot.empty) {
        res.status(404).send('No passages found.');
        return;
      }

      // Convert the snapshot to an array of documents
      const passages = [];
      snapshot.forEach((doc) => {
        passages.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      // Select a random passage
      const randomIndex = Math.floor(Math.random() * passages.length);
      const randomPassage = passages[randomIndex];

      res.json(randomPassage);
    })
    .catch((error) => {
      console.error('Error fetching documents:', error);
      res.status(500).send('Error fetching random passage.');
    });
});
