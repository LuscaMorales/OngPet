import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { cadastroVac } from "../services/vacinaServices";

export default function CadastroVacina ({navigation})
{
    const[id, setId] = useState('');
    const[vacina, setVacina] = useState('');
    const[data, setData] = useState('');
    const[lab, setLab] = useState('');
    const [display, setDisplay]=useState('none')

    const handleCadastro = async () => {
        const vacinaData = {
            id: id,
            vacina: vacina,
            lab: lab,
            data: data,
        };
        if (!vacinaData.id || !vacinaData.vacina || !vacinaData.lab || !vacinaData.data) {
            alert('Todos os campos são obrigatórios');
            return;
        }
        try {
            const response = await cadastroVac(vacinaData);
            alert('Vacina cadastrada com sucesso!');
            setId('');
            setVacina('');
            setLab('');
            setData('');
            setDisplay('flex');
        } catch (error) {
            console.error('Erro ao cadastrar vacina:', error);
        }
    };
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Cadastre a vacina</Text>
                <Text style={css.login_error(display)}>Vacina registrada com sucesso</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} value={id} placeholder="ID do Animal" onChangeText={text=>setId(text)}/>
                <TextInput style={css.login_input} value={vacina} placeholder="Nome da Vacina" onChangeText={text=>setVacina(text)}/>
                <TextInput style={css.login_input} value={lab} placeholder="Laboratório" onChangeText={text=>setLab(text)}/>
                <TextInput style={css.login_input} value={data} placeholder="Data da Aplicação" onChangeText={text=>setData(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleCadastro()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroVacina}