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
    const[procedimento, setProcedimento] = useState(null);
    const[vacina, setVacina] = useState(null);


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

    const getProced = fetch('http://localhost:3000/ConsultaProced',{
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
        if(json === 'null'){
            setProcedimento("Ainda não existe cadastro");
        }else{
            setProcedimento(json.nome);
        }
        });

    const getVacina = fetch('http://localhost:3000/ConsultaVac',{
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
        if(json === 'null'){
            setVacina("Ainda não existe cadastro");
        }else{
            setVacina(json.nome);
        }
        });




    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Dados do {nome}</Text>
            </View>
            <View>
                <Text style={css.DadosText}> Nome: {nome} </Text>
                <Text style={css.DadosText}> Raça: {raca} </Text>
                <Text style={css.DadosText}> Nascimento: {nascimento} </Text>
                <Text style={css.DadosText}> Data de chegada: {dataChegada} </Text>
            </View>
            <View>
                <Text style={css.DadosText}>Procedimentos feitos: {procedimento}</Text>
                <Text style={css.DadosText}>Vacinas aplicadas: {vacina}</Text>

            </View>
            <View style={css.login_form}>
            </View>
        </KeyboardAvoidingView>
    )
}

export {AnimalInfo}