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
    return {
        sucess: true,
        data: user};
}

async function create({userData}){
    try {
        const existing = await User.findOne({where: {cpf: userData.cpf}});
        if(existing){
            return {
                sucess: false,
                code: "USER_EXISTS",
                message: "Usuário já cadastrado"
            }
        }
        const newUser = await User.create({
            fullname: userData.fullname,
            cpf: userData.cpf,
            email: userData.email,
            phone: userData.phone,
            role: userData.role || "viewer",
            password: userData.password,
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {sucess: true, data: newUser};
    } catch (error) {
        console.error(error);
        return {
            sucess: false,
            message: 'Erro ao cadastrar usuário'};
    }
}

module.exports = {
    login,
    cadastro
}