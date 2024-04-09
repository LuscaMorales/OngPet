const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

let port=process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, ()=>{
    console.log('Example app listening on port 3000');
}) 