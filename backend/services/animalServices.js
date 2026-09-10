const models=require('../models');
const ani = models.Animal;
const VacAni = models.VacinaAnimal;
const ProAni = models.ProcedimentoAnimal;
const { formatData } = require('../utils/formatters');
const {uploadImage} = require('./uploadServices');


async function checkAnimal(id){
    try {
        let animalData = await ani.findByPk(id);
        if (!animalData) {
            return {sucess: false, message: 'Error fetching animal data' };;
        }
        return {sucess: true, data: animalData};
    }catch (error) {
        return {sucess: false, message: 'Error fetching animal data' };
    }
}

async function addAnimal({body, file}){
  try {
    var imageUrl = "";
    if(file){
        const uploadResult = await uploadImage(file);
        imageUrl = uploadResult.url;
    }else{
        return {
            success: false,
            code: "NO_IMAGE",
            message: "NO_IMAGEOCMING"
        }
    }
    const animalData = body;
    const newAnimal = await ani.create({
    nome:animalData.nome,
    raca:animalData.raca,
    dataChegada: new Date(formatData(animalData.dataChegada)),
    nascimento: new Date(formatData(animalData.nascimento)),
    createdAt: new Date(),
    updatedAt: new Date(),
    avatarUrl: imageUrl,
    });
    return {sucess: true, data: newAnimal};
  }catch (error) {
    return {sucess: false, message: 'Error adding animal' };
  }
}

async function getCompleteAnimal(id){
    try {
        const animalData = await ani.findByPk(id, {
            include: [VacAni, ProAni],
        });
        if (!animalData) {
            return {sucess: false, message: 'Error fetching animal data' };;
        }
        return {sucess: true, data: animalData};
    } catch (error) {
        return {sucess: false, message: 'Error fetching animal data' };
    }    
}

module.exports = {
    checkAnimal,
    addAnimal,
    getCompleteAnimal
};