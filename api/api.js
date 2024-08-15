
const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

const port = process.env.PORT || 1212;

app.listen(port,
  () =>  console.log(`it's alive on http://localhost:${port}`));


app.get('/', (req,res) => {
  res.send('Hello World!!');
});




fs.readFile('passages.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  const jsonData = JSON.parse(data);

  // Example: Accessing the 'author' and 'passage' keys from each object in an array
  jsonData.forEach(item => {
    console.log(`Author: ${item.author}`);
    
  });
});