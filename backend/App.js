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

// ------------------ Vacina Routes ------------------

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

// ------------------ Procedimento Routes ------------------

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


app.post('/cadastroProced', async (req,res)=> {
  console.log("Recebido procedimento: ", req.body);
  const NewDate = formatData(req.body.data);
  if (!NewDate) {
    return res.status(404).json({
        error: {
        code: 'INVALID_DATE',
        message: 'Data inválida'
      }
    });
  }
  const AnimalExists = await animal.findByPk(req.body.id);
  if (!AnimalExists) {
    return res.status(404).json({
        error: {
        code: 'ANIMAL_NOT_FOUND',
        message: 'Animal não encontrado'
      }
    });
  }
  const nomeFormatado = formatString(req.body.proced);
  const [procedmt] = await procedimento.findOrCreate({
    where: { nome: nomeFormatado, tipo: req.body.tipo },
  });
  try{
      const procedAnimal = await procedAni.create({
        data: new Date(NewDate),
        idProcedimento: procedmt.dataValues.id,
        idAnimal: req.body.id,
      });
      console.log("Procedimento animal criado: ", procedAnimal);
      res.status(201).json(procedAnimal);
  } catch (error) {
      res.status(500).json({ error: 'Error adding procedimento'});
  } 
});


app.post('/cadastroProced1', async (req,res)=>{
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