const {User} = require('../models');

async function login(username, password){
    const user = await User.findOne({where: {username, password}});   
    if(!user){
        return {sucess: false, message: 'Usuário ou senha incorretos'};
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