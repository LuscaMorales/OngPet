import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function AreaFuncionario ({navigation})
{

    const[user, setUser] = useState(null);
    const[password, setPassword] = useState(null);
    const[power, setPower] = useState(null);
    const[login, setLogin] = useState(null);

    //envio form de login
    async function sendForm(){
        let response=await fetch('http://192.168.1.15:3000/cadastroUser',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: password,
                power: power
            }),
          });
          let json=await response.json();
          //if(json === 'failed')
        }
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.HeaderAR}>Cadastro de Animais</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroAnimal')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={css.HeaderAR}>Consulta de Animais</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('ConsultaAnimal')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={css.HeaderAR}>Cadastro de Consulta</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroProced')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={css.HeaderAR}>Cadastro de vacina</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroVacina')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {AreaFuncionario}