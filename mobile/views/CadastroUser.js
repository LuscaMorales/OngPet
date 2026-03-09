import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { cadastro } from "../services/userServices";
import { Picker } from "@react-native-picker/picker";


export default function CadastroUser ({navigation})
{

    const[name,setName] = useState('');
    const[cpf, setCpf] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[role, setRole] = useState('Visitante');
    const[password, setPassword] = useState('');
    const[birth_date, setBirthDate] = useState('');
    const requiredFields = ['fullName', 'cpf', 'email', 'phone', 'password', 'birth_date'];
    const[display, setDisplay] = useState('none');
    
    const handleCadastro = async () => {
        const userData = {
            fullName: "João Mauricio",
            cpf: "17791256475",
            email: "joaomauricio@gmail.com",
            phone: "21956729823",
            role: "veterinario",
            password: "mauricio123",
            birth_date: "11/02/2023"
        };
        const missingFields = requiredFields.some(field => !userData[field]);
        if (missingFields) {
            alert('Todos os parâmetros são obrigatórios');
            return;
        }
        try {
            const response = await cadastro(userData);
            if(!response.sucess){
                if(response.error.code === 'USER_EXISTS'){
                    alert('Usuário já existe');
                }
            }else{
                alert('Usuário cadastrado com sucesso! ID: ' + response.id);
                setName('');
                setCpf('');
                setPhone('');
                setRole('');
                setEmail('');
                setPassword('');
                setBirthDate('');
                setDisplay('flex');
            }
        } catch (error) {
            console.log(error);
            console.error('Erro ao cadastrar usuário:', error);
        }
    };      

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Cadastre o usuário</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} value={name} placeholder="Nome Completo" onChangeText={text=>setName(text)}/>
                <TextInput style={css.login_input} value={cpf} placeholder="CPF" onChangeText={text=>setCpf(text)}/>
                <TextInput style={css.login_input} value={birth_date} placeholder="Data de Nascimento" onChangeText={text=>setBirthDate(text)}/>
                <TextInput style={css.login_input} value={email} placeholder="Email" onChangeText={text=>setEmail(text)}/>
                <TextInput style={css.login_input} value={phone} placeholder="Telefone" onChangeText={text=>setPhone(text)}/>
                <Picker style={css.login_input}
                    selectedValue={role}
                    onValueChange={(itemValue) => setRole(itemValue)}>
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="Funcionário" value="funcionario" />
                    <Picker.Item label="Veterinário" value="veterinario" />
                    <Picker.Item label="Visitante" value="viewer" />
                    <Picker.Item label="Recepção" value="recepcao" />
                </Picker>
                <TextInput style={css.login_input} value={password} placeholder="Senha" onChangeText={text=>setPassword(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleCadastro()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroUser}