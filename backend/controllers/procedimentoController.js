const procedServices = require("../services/procedimentoServices");

async function cadastro(req, res){
    try{
        const procedData = req.body;
        const result = await procedServices.cadastro(procedData);
        if (!result.sucess===true){
            const dateError = "INVALID_DATE";
            const animalNotFoundError = "ANIMAL_NOT_FOUND";
            if (result.code === dateError){
                return res.status(400).json({
                    sucess: false,
                    code : dateError ,
                    message: "Data inválida"
                });
            }
            if (result.code === animalNotFoundError ){
                return res.status(404).json({
                    sucess: false,
                    code: animalNotFoundError ,
                    message: "Animal requisitado não foi encontrado"
                });
            }
            return res.status(400).json({error: 'Controller: Procedimento cadastr    failed'});
        }
        return res.status(201).json(result);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {cadastro};