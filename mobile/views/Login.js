import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, ScrollView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { login } from "../services/userServices";
import { TextInputMask } from 'react-native-masked-text'


export default function Login ({navigation})
{

    const[display, setDisplay]=useState('none')
    const[cpf, setCpf] = useState('');
    const[password, setPassword] = useState('');



    const handleLogin = async () => {
        if (cpf.length !== 14) {
            alert("CPF inválido");
            return;
        }
        const roles = ["funcionario", "veterinario", "admin"];
        const result = await login(cpf, password);
        if (!result.success) {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
            return;
        }
        if (roles.includes(result.data.role)) {
            navigation.navigate('AreaRestrita');
        } else {
            navigation.navigate('AreaFuncionario');
        }
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Login</Text>
                <Text style={css.login_error(display)}> Usuário ou senha inválidos</Text>
            </View>
            <View style={css.login_form}>
                <TextInputMask style={css.login_input} placeholder="CPF"
                type={'cpf'} value={cpf} onChangeText={text =>setCpf(text)}/>
                <TextInput style={css.login_input} placeholder="Senha" onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleLogin()}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.login_buttomGeral} onPress={()=>navigation.navigate('ConsultaAnimal')}>
                    <Text style={css.login_buttomText}>Acesso Geral</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {Login}