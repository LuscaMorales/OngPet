const models=require('../models');
const { Animal, Procedimento, ProcedimentoAnimal} = models;
const { formatData, formatString } = require('../utils/formatters');

async function cadastro(procedData){
    const NewDate = formatData(procedData.data);
    if (!NewDate) {
        return {
            sucess: false,
            code: 'INVALID_DATE'}
        };
    const AnimalExists = await Animal.findByPk(procedData.id);
    if (!AnimalExists) {
        return {
            sucess: false,
            code: 'ANIMAL_NOT_FOUND'}
    };
    const nomeFormatado = formatString(procedData.proced);
    const [procedmt] = await Procedimento.findOrCreate({
        where: { nome: nomeFormatado, tipo: procedData.tipo},
    });
    try {
        const procedAnimal = await ProcedimentoAnimal.create({
            data: new Date(NewDate),
            idProcedimento: procedmt.dataValues.id,
            idAnimal: procedData.id,
        });
        return {sucess: true , data: procedAnimal}
    } catch (error) {
        return { 
        sucess: false,
        error: 'Error adding procedimento'};
      } 
}

module.exports = {
    cadastro
}