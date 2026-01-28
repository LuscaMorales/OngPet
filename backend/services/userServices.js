const {User} = require('../models');

async function login(username, password){
    const user = await User.findOne({where: {username, password}});   
    if(!user){
        return {sucess: false, message: 'Usuário ou senha incorretos'};
    }
    return {sucess: true, data: user};
}

async function cadastro({username, password, power}){
    const newUser = await User.create({
        username,
        password,
        power,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    return {sucess: true, data: newUser};
}

module.exports = {
    login,
    cadastro
}