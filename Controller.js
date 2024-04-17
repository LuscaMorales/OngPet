const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')
const models=require('./models');
const { raw } = require('mysql2');
const { where } = require('sequelize');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let vacina=models.Vacina;
let animal=models.Animal;
let procedimento=models.Procedimento;


let port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Example app listening on port 3000');
});

app.post('/login', async (req,res)=>{
  let response= await user.findOne({
    where:{username:req.body.username, password: req.body.password}
  });
  if(response === null){
    res.send(JSON.stringify('failed'));
  }else{
    res.send(response);
  }
});