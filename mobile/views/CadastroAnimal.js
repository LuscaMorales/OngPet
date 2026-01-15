import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { addAnimal } from "../services/animalServices";

export default function CadastroAnimal ({navigation})
{

    const[name, setName] = useState(null);
    const[titleName, setTitleName] = useState(null);
    const[nascimento, setNascimento] = useState(null);
    const[chegada, setChegada] = useState(null);
    const[raca, setRaca] = useState(null);
    const[id, setId] = useState(null);
    const[display, setDisplay] = useState('none')

    const handleCadastro = async () => {
        const animalData = {
            nome: name,
            raca: raca,
            dataChegada: chegada,
            nascimento: nascimento
        };

        if (!animalData.nome || !animalData.raca) {
            alert('Nome e raça são obrigatórios');
            return;
        }

        try {
            const response = await addAnimal(animalData);
            alert('Animal cadastrado com sucesso! ID: ' + response.id);
            setName('');
            setRaca('');
            setNascimento('');
            setChegada('');
            setTitleName(response.nome);
            setId(response.id);
            setDisplay('flex');
        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
        }
    };      

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Cadastre o animal</Text>
                <Text style={css.login_error(display)}> O Id do {titleName} será {id}</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} value={name} placeholder="Nome" onChangeText={text=>setName(text)}/>
                <TextInput style={css.login_input} value={raca} placeholder="Raça" onChangeText={text=>setRaca(text)}/>
                <TextInput style={css.login_input} value={nascimento} placeholder="Data de Nascimento" onChangeText={text=>setNascimento(text)}/>
                <TextInput style={css.login_input} value={chegada} placeholder="Data da Chegada" onChangeText={text=>setChegada(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleCadastro()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroAnimal}