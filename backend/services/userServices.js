const {User} = require('../models');
const bcrypt = require('bcrypt');
const { formatData } = require('../utils/formatters');
const {cpfValidator} = require('../utils/validators');



async function authenticate(cpf, password){
    const user = await User.findOne({where: {cpf}});   
    if(!user){
        return {
            success: false,
            code: "USER_NOT_FOUND"};
    }   
    const valid  = await bcrypt.compare(password, user.password);
    if (!valid) {
        return { 
            success: false,
            code: "INVALID_PASSWORD"};
    }
    return {
        success: true,
        data: user};
}

async function register({userData}){
    try {
        const existing = await User.findOne({where: {cpf: userData.cpf}});
        if(existing){
            return {
                success: false,
                code: "USER_EXISTS",
                message: "Usuário já cadastrado"
            }
        }
        if(!cpfValidator(userData.cpf)){
            return {
                success: false,
                code: "INVALID_CPF",
                message: "CPF inválido"
            }
        }
        const newUser = await User.create({
            fullName: userData.fullName,
            cpf: userData.cpf,
            email: userData.email,
            phone: userData.phone,
            role: userData.role || "viewer",
            password: userData.password,
            birth_date: new Date(formatData(userData.birth_date)),
            createdAt: new Date(),
            updatedAt: new Date()
        });
        return {success: true, data: newUser};
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: 'Erro ao cadastrar usuário'};
    }
}

module.exports = {
    authenticate,
    register
}