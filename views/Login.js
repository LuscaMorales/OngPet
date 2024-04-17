import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function Login ({navigation})
{

    const [display, setDisplay]=useState('none')
    const[user, setUser] = useState(null);
    const[password, setPassword] = useState(null);
    const[login, setLogin] = useState(null);

    //envio form de login
    async function sendForm(){
        let response=await fetch('http://192.168.1.15:3000/login',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: password
            }),
          });
          let json=await response.json();
          if(json === 'failed'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);
          }
        }
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Login</Text>
                <Text style={css.login_error(display)}> Usuário ou senha inválidos</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Usuário" onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login_input} placeholder="senha" onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('AreaRestrita')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('AreaFuncionario')}>
                    <Text style={css.login_buttomText}>Entrar Funcionario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('ConsultaAnimal')}>
                    <Text style={css.login_buttomText}>Entrar Geral</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {Login}