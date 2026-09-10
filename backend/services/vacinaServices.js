const models=require('../models');
const { Animal, Vacina, VacinaAnimal} = models;
const { formatData, formatString } = require('../utils/formatters');


async function cadastroVacina(vacinaData){
    try {
        const animal = await Animal.findByPk(vacinaData.id);
        if (!animal) {
            return {sucess: false, message: 'Animal not found'};
        }
        const newVac = await Vacina.findOrCreate({
            where: { nome : formatString(vacinaData.vacina), laboratorio: formatString(vacinaData.lab)},
        });
        const vacinaAni = await VacinaAnimal.create({
            data: new Date(formatData(vacinaData.data)),
            idAnimal: vacinaData.id,
            idVacina: newVac[0].dataValues.id,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {sucess: true, data: vacinaData}
    } catch (error) {
        return {sucess: false, message: 'Error to add vacine animal data' };
    }
}

module.exports = {
    cadastroVacina
}