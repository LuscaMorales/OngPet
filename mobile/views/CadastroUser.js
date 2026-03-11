import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { cadastro } from "../services/userServices";
import { Picker } from "@react-native-picker/picker";


export default function CadastroUser ({navigation})
{

    const[name,setName] = useState("Marcus Alberto");
    const[cpf, setCpf] = useState("11132806704");
    const[email, setEmail] = useState("marcusalberto@gmail.com");
    const[phone, setPhone] = useState("(01)43444-4444");
    const[role, setRole] = useState("veterinario");
    const[password, setPassword] = useState("marcus123");
    const[birth_date, setBirthDate] = useState("11/02/2002");
    const requiredFields = ['fullName', 'cpf', 'email', 'phone', 'password', 'birth_date'];
    const[display, setDisplay] = useState('none');
    
    const handleCadastro = async () => {
        const userData = {
            fullName: name,
            cpf: cpf,
            email: email,
            phone: phone,
            role: role,
            password: password,
            birth_date: birth_date 
        };
        const missingFields = requiredFields.some(field => !userData[field]);
        if (missingFields) {
            alert('Todos os parâmetros são obrigatórios');
            return;
        }
        if (cpf.length !== 11) {
            alert("CPF inválido");
            return;
        }
        if (!email.includes("@")) {
            alert("Email inválido");
            return;
        }
        try {
            const response = await cadastro(userData);
            if(!response.success){
                if(response.error.code){
                    alert(response.error.message);
                }
            }else{
                alert('Usuário cadastrado com sucesso!');
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