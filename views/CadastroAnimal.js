import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function CadastroAnimal ({navigation})
{

    const[name, setName] = useState(null);
    const[nascimento, setNascimento] = useState(null);
    const[chegada, setChegada] = useState(null);
    const[raca, setRaca] = useState(null);
    

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
                <Text style={css.loginHeader}>Cadastre o animal</Text>
                <Text>{name} - {raca} - {nascimento} - {chegada}</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Nome" onChangeText={text=>setName(text)}/>
                <TextInput style={css.login_input} placeholder="Raça" onChangeText={text=>setRaca(text)}/>
                <TextInput style={css.login_input} placeholder="Data de Nascimento" onChangeText={text=>setNascimento(text)}/>
                <TextInput style={css.login_input} placeholder="Data da Chegada" onChangeText={text=>setChegada(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>sendForm()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroAnimal}