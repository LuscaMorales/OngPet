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

function formatData(stringDate){
  let dia = stringDate.substring(0,3);
  let mes = stringDate.substring(3,6);
  let ano = stringDate.substring(6,10);
  let dateOK = mes + dia + ano;
  return dateOK;
}


app.listen(port, ()=>{
    console.log('Exa67mple app listening on port 3000');
});

app.post('/login', async (req,res)=>{
  console.log("botao pressionado");
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

app.post('/ConsultaVac', async (req,res)=>{
  let verifVac=await vacAni.findOne({
    where:{idAnimal:req.body.IDAnimal}
  });
  if(verifVac === null){
    res.send(JSON.stringify('null'));
  }else{
    let vac = await vacina.findByPk(verifVac.idVacina);
    res.send(vac);
  }
});

app.post('/ConsultaProced', async (req,res)=>{
  let verifProced=await procedAni.findOne({
    where:{idAnimal:req.body.IDAnimal}
  });
  if(verifProced === null){
    res.send(JSON.stringify('null'));
  }else{
    let proced = await procedimento.findByPk(verifProced.idProcedimento);
    res.send(proced);
  }
});

app.post('/cadastroProced', async (req,res)=>{
  let verif = await procedimento.findOne({
    where:{nome:req.body.proced}
  });
  if(verif === null){
    console.log("criando um novo");
    let criaProced = await procedimento.create({
      nome:req.body.proced 
    });
    let criaProcedAni = await procedAni.create({
      data:new Date(formatData(req.body.data)),
      idProcedimento:criaProced.id,
      idAnimal:req.body.id
    });

  }else{
    console.log("achado um existente");
    console.log(verif.id);
    let criaProcedAni = await procedAni.create({
      data:new Date(formatData(req.body.data)),
      idProcedimento:verif.id,
      idAnimal:req.body.id
    });
  }
 // res.send(criaProcedAni);
});

app.post('/cadastroVacina', async (req,res)=>{
  let verifVac = await vacina.findOne({
    where:{nome:req.body.vacina}
  });
  if(verifVac === null){
    let criaVac = await vacina.create({
      nome:req.body.vacina,
      laboratorio:req.body.lab
    });
    let criaVacAni = await vacAni.create({
      data:new Date(formatData(req.body.data)),
      idAnimal:req.body.id,
      idVacina:criaVac.id
    });
  }else{
    console.log("achei");
    let criaVacAni = await vacAni.create({
      data:new Date(formatData(req.body.data)),
      idAnimal:req.body.id,
      idVacina:req.body.vacina
    });
  }
 // res.send(criaVacAni);  
});


app.get('/consultaMac', async (req,res)=>{
  let verifProced=await procedAni.findOne({
    where:{idAnimal:13}
  });
  if(verifProced === null){
    res.send(JSON.stringify('Ainda não existe cadastro'));
  }else{
    let proced = await procedimento.findByPk(verifProced.idProcedimento);
    res.send(proced);
  }
});