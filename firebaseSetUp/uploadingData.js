const fs = require('fs');
const { collection, addDoc } = require('firebase/firestore');
const db = require('./firebase.js');

// Reading local json file
fs.readFile('passages.json', 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  
  const passages = JSON.parse(data);

  try {
    for (const passage of passages) { //going over each index of the array with for...of 
      const docRef = await addDoc(collection(db, 'passages'), passage);
      console.log('Document written with ID: ', docRef.id);
    }
  } catch (error) {
    console.error('Error adding document: ', error);
  }
});

