const vacinaServices = require('../services/vacinaServices');

async function cadastro(req, res){
    try{
        const vacinaData = req.body;
        const result = await vacinaServices.cadastroVacina(vacinaData);
        if (!result){
            return res.status(400).json({error: 'Vacina cadastro failed'});
        }
        return res.status(201).json(result);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {cadastro};