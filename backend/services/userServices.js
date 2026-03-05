const {User} = require('../models');
const bcrypt = require('bcrypt');


async function authenticate(cpf, password){
    const user = await User.findOne({where: {cpf}});   
    if(!user){
        return {
            sucess: false,
            code: "USER_NOT_FOUND"};
    }
    const valid  = await bcrypt.compare(password, user.password);
    if (!valid) {
        return { 
            success: false,
            code: "INVALID_PASSWORD"};
    }
    
    return {sucess: true, data: user};
}

async function cadastro({username, password, power}){
    try {
        const newUser = await User.create({
            username,
            password,
            power,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {sucess: true, data: newUser};
    } catch (error) {
        console.error(error);
        return {sucess: false, message: 'Erro ao cadastrar usuário'};
    }
}

module.exports = {
    login,
    cadastro
}