const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')
const models=require('./models');
const { raw } = require('mysql2');
const { where } = require('sequelize');

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
let user=models.User;
let vacina=models.Vacina;
let animal=models.Animal;
let procedimento=models.Procedimento;


let port=process.env.PORT || 3000;

app.get('/create', async(req, res) => {
  let create=await user.create({
    username:"lucas",
    password:"1234",
    power:3,
    createdAt: new Date(),
    updatedAt: new Date()
  });
  res.send('Usuário cirado com sucesso');
});

app.listen(port, ()=>{
    console.log('Example app listening on port 3000');
});

app.get('/read', async (req,res)=>{
  let read=await user.findAll({
    raw:true
  });
  console.log(read);
});

//update
app.get('/update', async (req,res)=>{
  let update=await user.findByPk(1).then((usuario)=>{
    usuario.username='Lucases';
    usuario.password='5161651';
    usuario.save();
  });
});

//update2 forma
app.get('/update2', async (req,res)=>{
  await user.update({
    username: "Lucas1",
    password: "123456"
  },{
    where:{id:1}
  });
});