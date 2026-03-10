const userService = require('../services/userServices');

async function login(req, res){
    try{
        const { cpf, password } = req.body;
        const result = await userService.authenticate(cpf, password);
        if(!result.success){
            const notFound = "USER_NOT_FOUND";
            const invalidPassword = "INVALID_PASSWORD";
            if(result.code === notFound){
                return res.status(404).json({
                    success: false,
                    code : notFound ,
                    message: "Usuário não encontrado ou inexistente"
                });
            }
            if(result.code === invalidPassword){
                return res.status(400).json({
                    success: false,
                    code : invalidPassword ,
                    message: "Senha inválida"
                });
            }
            return res.status(400).json({error: result.message});
        }
        return res.status(200).json(result.data);
    } catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function register(req, res){
    try{
        const userData = req.body;
        const result = await userService.register(userData);
        if(!result.success){
            const userExist = "USER_EXISTS";
            const invalidCpf = "INVALID_CPF";
            console.log("resusoansodn", result);
            if(result.code === userExist){
                return res.status(400).json(result);
            }
            if(result.code === invalidCpf){
                return res.status(400).json(result);
            }
        }
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    login,
    register
};