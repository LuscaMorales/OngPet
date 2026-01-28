import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, ScrollView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { loginUser } from "../services/userServices";

export default function Login ({navigation})
{

    const [display, setDisplay]=useState('none')
    const[user, setUser] = useState(null);
    const[password, setPassword] = useState(null);
    const[login, setLogin] = useState(null);

    //envio form de login

    const handleLogin = async () => {
        const result = await loginUser(user, password);
        if (!result.sucess) {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
        } else if (result.data.power === 3) {
            navigation.navigate('AreaRestrita');
        } else {
            navigation.navigate('AreaFuncionario');
        }
    }

    /*async function sendForm(){
        let response=await fetch('http://localhost:3000/users/login',{
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
        console.log(response);
        if(json === 'failed'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);
          }else if(json.power === 3){
            navigation.navigate('AreaRestrita');
          }else{
            navigation.navigate('AreaFuncionario')
          }
        }*/
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Login</Text>
                <Text style={css.login_error(display)}> Usuário ou senha inválidos</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Usuário" onChangeText={text=>setUser(text)}/>
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