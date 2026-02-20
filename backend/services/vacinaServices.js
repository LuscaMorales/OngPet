const models=require('../models');
const { Animal, Vacina, VacinaAnimal} = models;
const { formatData } = require('../utils/formatters');


async function cadastroVacina(vacinaData){
    try {
        const animal = await Animal.findByPk(vacinaData.id);
        if (!animal) {
            return {sucess: false, message: 'Animal nott found'};
        }
        const newVac = await Vacina.findOrCreate({
            where: { nome : vacinaData.vacina, laboratorio: vacinaData.lab },
        });
        const vacinaAni = await VacinaAnimal.create({
            data: new Date(formatData(vacinaData.data)),
            idAnimal: vacinaData.id,
            idVacina: newVac[0].dataValues.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    } catch (error) {
        return {sucess: false, message: 'Error to add vacine animal data' };
    }
}

/*
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
});*/

module.exports = {
    cadastroVacina
}