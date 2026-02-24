const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')
const models=require('./models');
const { raw } = require('mysql2');
const { where } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = require('sequelize');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let vacina=models.Vacina;
let animal=models.Animal;
let procedimento=models.Procedimento;
let vacAni = models.VacinaAnimal;
let procedAni = models.ProcedimentoAnimal;


let port=process.env.PORT || 3000;
const id = 1;


app.listen(port, ()=>{
    console.log('Example app listening on port 3000');
});

app.use('/users', require('./routes/userRoutes'));
app.use('/animals', require('./routes/animalRoutes'));
app.use('/vacinas', require('./routes/vacinaRoutes'));
app.use('/procedimentos', require('./routes/procedimentoRoutes'));

// ------------------ Procedimento Routes ------------------

