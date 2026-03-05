const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port=process.env.PORT || 3000;
const id = 1;


app.listen(port, ()=>{
    console.log('Example app listening on port 3000');
});

app.use('/users', require('./routes/userRoutes'));
app.use('/animals', require('./routes/animalRoutes'));
app.use('/vacinas', require('./routes/vacinaRoutes'));
app.use('/procedimentos', require('./routes/procedimentoRoutes'));
