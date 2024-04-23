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
const id = 1;

function formatData(stringDate){
  let dia = stringDate.substring(0,3);
  let mes = stringDate.substring(3,6);
  let ano = stringDate.substring(6,10);
  let dateOK = mes + dia + ano;
  return dateOK;
}


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

app.post('/cadastroUser', async (req,res)=>{
  let create=await user.create({
    username:req.body.username,
    password:req.body.password,
    power:req.body.power,
    createdAt: new Date(),
    updatedAt: new Date()
  });
});

app.post('/cadastroAnimal', async (req,res)=>{
  let create=await animal.create({
    nome:req.body.nome,
    raca:req.body.raca,
    dataChegada: new Date(formatData(req.body.dataChegada)),
    nascimento: new Date(formatData(req.body.nascimento)),
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.send(create);
});

app.post('/ConsultaAnimal', async (req,res)=>{
  let read=await animal.findByPk(req.body.IDAnimal);
  if(read === null){
    res.send(JSON.stringify('failed'));
  }else{
    res.send(read);
  }
});
