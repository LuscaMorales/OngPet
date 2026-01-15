import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { checkAnimal } from "../services/animalServices";

export default function ConsultaAnimal ({navigation})
{

    const[id, setId] = useState(null);    
    const [display, setDisplay]=useState('none')


    const handleAnimal = async () => {
        try {
            const response = await checkAnimal(id);
            if (response === null) {
                setDisplay('flex');
                setTimeout(() => {
                    setDisplay('none');
                }, 5000);
                setId('');
            }
            else {
                navigation.navigate('AnimalInfo', { animalId: id });
            }
        } catch (error) {
            console.error('Erro ao buscar dados do animal:', error);
        } 
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Consulte o animal</Text>
                <Text style={css.login_error(display)}> Id incorreto</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} value={id} placeholder="Digite o Id do animal" onChangeText={text=>setId(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleAnimal()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {ConsultaAnimal}