const userService = require('../services/userServices');

async function login(req, res){
    try{
        const { username, password } = req.body;
        const result = await userService.login(username, password);
        if(!result.sucess){
            return res.status(400).json({error: result.message});
        }
        return res.status(200).json(result.data);
    } catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function cadastro(req, res){
    try{
        const {username, password, power} = req.body;
        const result = await userService.cadastro({username, password, power});
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    login,
    cadastro
};