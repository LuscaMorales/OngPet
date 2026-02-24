const procedServices = require("../services/procedimentoServices");

async function cadastro(req, res){
    try{
        const procedData = req.body;
        const result = await procedServices.cadastro(procedData);
        if (!result){
            return res.status(400).json({error: 'Controller: Procedimento cadastro failed'});
        }
        return res.status(201).json(result);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}