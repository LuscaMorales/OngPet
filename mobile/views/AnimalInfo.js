import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { getCompleteAnimal } from "../services/animalServices";

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
    const [animal, setAnimal] = useState({ProcedimentoAnimals: [], VacinaAnimals: []});


    
    useEffect(() => {
        const fetchAnimalData = async () => {
            try {
                const animalDados = await getCompleteAnimal(animalId);
                setAnimal(animalDados);
            } catch (error) {
                console.error('Erro ao buscar dados completos do animal:', error);
            }
        };
        fetchAnimalData();
    }, [animalId]);
    


    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Dados do {animal.nome}</Text>
            </View>
            <View>
                <Text style={css.DadosText}> Nome: {animal.nome} </Text>
                <Text style={css.DadosText}> Raça: {animal.raca} </Text>
                <Text style={css.DadosText}> Nascimento: {animal.nascimento} </Text>
                <Text style={css.DadosText}> Data de chegada: {animal.dataChegada} </Text>
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