const models=require('../models');
const { Animal, Procedimento, ProcedimentoAnimal} = models;
const { formatData, formatString } = require('../utils/formatters');

async function cadastro(procedData){
    console.log("Recebido procedimento: ", procedData);
    const NewDate = formatData(procedData.data);
    if (!NewDate) {
        return res.status(404).json({
            error: {
            code: 'INVALID_DATE',
            message: 'Data inválida'
        }
    });
    }
    const AnimalExists = await Animal.findByPk(procedData.id);
    if (!AnimalExists) {
        return res.status(404).json({
            error: {
            code: 'ANIMAL_NOT_FOUND',
            message: 'Animal não encontrado'
        }
    });
    }
    const nomeFormatado = formatString(procedData.proced);
    const [procedmt] = await procedimento.findOrCreate({
        where: { nome: nomeFormatado, tipo: procedData.tipo },
        });
    try{
        const procedAnimal = await ProcedimentoAnimal.create({
            data: new Date(NewDate),
            idProcedimento: procedmt.dataValues.id,
            idAnimal: procedData.id,
        });
    console.log("Procedimento animal criado: ", procedAnimal);
    res.status(201).json(procedAnimal);
  } catch (error) {
      res.status(500).json({ error: 'Error adding procedimento'});
  } 
}

/*
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
*/

module.exports = {
    cadastro
}