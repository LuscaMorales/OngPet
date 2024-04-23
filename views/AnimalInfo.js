import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function AnimalInfo ({route, navigation})
{

    const[id, setId] = useState(null);
    const {animalId} = route.params;
    const[nome, setNome] = useState(null);      
    const[raca, setRaca] = useState(null);      
    const[nascimento, setNascimento] = useState(null);      
    const[dataChegada, setDataChegada] = useState(null);

    //envio form de login
    async function sendForm(){
        let response=await fetch('http://192.168.1.15:3000/ConsultaAnimal',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                IDAnimal: animalId,
            }),
          });
          let json=await response.json();
          console.log(json.nome);
          setNome(json.nome);
          setRaca(json.raca);
        }

    const getAnimal = fetch('http://192.168.1.15:3000/ConsultaAnimal',{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            IDAnimal: animalId,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
            setNome(json.nome);
            setRaca(json.raca);
            setNascimento(json.nascimento);
            setDataChegada(json.dataChegada)});


    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Dados do {nome}</Text>
            </View>
            <View>
                <Text style={css.DadosText}> nome = {nome} </Text>
                <Text style={css.DadosText}> raca = {raca} </Text>
                <Text style={css.DadosText}> nascimento = {nascimento} </Text>
                <Text style={css.DadosText}> data de chegada = {dataChegada} </Text>
            </View>
            <View style={css.login_form}>
            </View>
        </KeyboardAvoidingView>
    )
}

export {AnimalInfo}