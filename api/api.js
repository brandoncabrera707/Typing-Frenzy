const express = require('express');
const app = express();
const fetch = require(node-fetch);

app.use(express.json());

const port = process.env.PORT || 1212;

app.listen(port,
  () =>  console.log(`it's alive on http://localhost:${port}`));


app.get('/', (req,res) => {
  res.send('Hello World!!');
});



fetch("http://localhost:1212/passages.json")
  .then(response =>{
    if(!response){
      throw new Error("Response was not ok!")
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error =>{
    console.log(error)
  })
  
