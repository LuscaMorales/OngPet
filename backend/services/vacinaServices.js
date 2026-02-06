const models=require('../models');
const { Animal, Vacina, VacinaAnimal} = models;
const { formatData } = require('../utils/formatters');


async function cadastroVacina(vacinaData){
    try {
        const animal = await Animal.findByPk(vacinaData.idAnimal);
        if (!animal) {
            return {sucess: false, message: 'Animal not found'};
        }
        const vacina = await Vacina.findOrCreate({
            where: { nome : vacinaData.nome, laboratorio: vacinaData.laboratorio },
        });
        const vacinaAni = await VacinaAnimal.create({
            id
        });
    }
}


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