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
        const userData = req.file;
        console.log("==USER DATA== ", userData);
        const result = await userService.register({
            body: req.body,
            file: req.file,
        });
        if(!result.success){
            errorList = ["USER_EXISTS", "INVALID_CPF", "INVALID_EMAIL", "INVALID_PHONE", "NO_IMAGE"];
            console.log("register controller", result);
            if(errorList.includes(result.code)){
                return res.status(400).json(result);
            }
        }
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function update(req, res){
    try{
        const { id } = req.params;
        const userData = req.body;
        const result = await userService.update(id, userData);
        if(!result.success){
            errorList = ["USER_EXISTS", "INVALID_CPF", "INVALID_EMAIL", "INVALID_PHONE"];
            if(errorList.includes(result.code)){
                return res.status(400).json(result);
            }
        }
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function getAll(req, res){
    try{
        const result = await userService.getAll();
        if(!result.success){
            return res.status(400).json(result);
        }
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

async function delUser(req, res){
    try{
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        if(!result.success){
            return res.status(400).json(result);
        }
        return res.status(201).json(result.data);
    }catch (error){
        return res.status(500).json({error: 'Internal server error'});
    }
}

module.exports = {
    login,
    register,
    update,
    getAll,
    delUser
};