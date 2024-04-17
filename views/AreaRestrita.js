import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function AreaRestrita ({navigation})
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
                <Text style={css.HeaderAR}>Cadastro de Usuarios</Text>
                <Text>{user} - {password} - {power}</Text>
                <TextInput style={css.login_input} placeholder="Username" onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login_input} placeholder="Senha" onChangeText={text=>setPassword(text)}/>
                <TextInput style={css.login_input} placeholder="Poder" onChangeText={text=>setPower(text)}/>
                <TouchableOpacity style={css.login_buttom}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
                <Text style={css.HeaderAR}>Cadastro de Animais</Text>
                <TouchableOpacity style={css.login_buttom}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            <View>
            <Text style={css.HeaderAR}>Consulta de Animais</Text>
                <TouchableOpacity style={css.login_buttom}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </KeyboardAvoidingView>
    )
}

export {AreaRestrita}