const animalServices = require('../services/animalServices');

async function check(req, res){
    try{
        const { id } = req.params;
        const result = await animalServices.checkAnimal(id);
        if(!result){
            return res.status(404).json({error: 'Animal not found'});
        }
        return res.status(200).json({id: result});
    } catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function cadastro(req, res){
    try{
        const animalData = req.body;
        const result = await animalServices.addAnimal(animalData);
        return res.status(201).json(result);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function animalCompleto(req, res){
    try{
        const { id } = req.params;
        const result = await animalServices.getCompleteAnimal(id);
        if(!result){
            return res.status(404).json({error: 'Animal not found'});
        }
        return res.status(200).json(result);
    } catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    check,
    cadastro,
    animalCompleto
};