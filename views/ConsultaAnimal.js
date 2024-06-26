import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function ConsultaAnimal ({navigation})
{

    const[id, setId] = useState(null);    
    const [display, setDisplay]=useState('none')



    async function sendForm(){
        let response=await fetch('http://192.168.1.15:3000/ConsultaAnimal',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDAnimal: id,
            }),
          });
          let json=await response.json();
          if(json == "failed"){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            }, 5000);
          }else{
            console.log(json);
            navigation.navigate('AnimalInfo',{animalId:id});
          }
        }

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Consulte o animal</Text>
                <Text style={css.login_error(display)}> Id incorreto</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Digite o Id do animal" onChangeText={text=>setId(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>sendForm()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {ConsultaAnimal}