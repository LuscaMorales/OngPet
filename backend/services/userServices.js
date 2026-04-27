const {User} = require('../models');
const bcrypt = require('bcrypt');
const { formatData } = require('../utils/formatters');
const {cpfValidator, validateEmail, telefone_validation} = require('../utils/validators');
const { Op } = require('sequelize');



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
        const newCpf = cpfValidator(userData.cpf);
        if(!newCpf){
            return {
                success: false,
                code: "INVALID_CPF",
                message: "CPF inválido"
            }
        }
        if(!validateEmail(userData.email)){
            return {
                success: false,
                code: "INVALID_EMAIL",
                message: "Email inválido"
            }
        }
        const newPhone = telefone_validation(userData.phone);
        if(!newPhone){
            return{
                success: false,
                code: "INVALID_PHONE",
                message: "Telefone inválido"
            }
        }
        const newUser = await User.create({
            fullName: userData.fullName,
            cpf: newCpf,
            email: userData.email,
            phone: newPhone,
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

async function update(id, userData){
    try {
        //Project.findAll({where: {name: 'Some Project',[Op.not]: [{ id: id }],},});
        console.log(userData);
        const existing = await User.findOne({where: {cpf: userData.cpf, [Op.not]: [{ id: id }],},});
        console.log(existing);
        if(existing){
            return {
                success: false,
                code: "USER_EXISTS",
                message: "Usuário já cadastrado"
            }
        }else{
            console.log("passaaaaaaaaaaaaaaaaaaaaaaaaaaou");
        }
        const newCpf = cpfValidator(userData.cpf);
        if(!newCpf){
            return {
                success: false,
                code: "INVALID_CPF",
                message: "CPF inválido"
            }
        }
        if(!validateEmail(userData.email)){
            return {
                success: false,
                code: "INVALID_EMAIL",
                message: "Email inválido"
            }
        }
        const newPhone = telefone_validation(userData.phone);
        if(!newPhone){
            return{
                success: false,
                code: "INVALID_PHONE",
                message: "Telefone inválido"
            }
        }
        const newUser = await User.update({
            fullName: userData.fullName,
            cpf: newCpf,
            email: userData.email,
            phone: newPhone,
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

async function getAll(){
    const users = await User.findAll();   
    if(!users){
        return {
            success: false,
            code: "USERS_NOT_FOUND"};
    }   
    return {
        success: true,
        data: users};
}

async function getAll(){
    const users = await User.findAll();   
    if(!users){
        return {
            success: false,
            code: "USERS_NOT_FOUND"};
    }   
    return {
        success: true,
        data: users};
}

module.exports = {
    authenticate,
    register,
    update,
    getAll
}