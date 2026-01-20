import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { Picker } from "@react-native-picker/picker";
import { addProcedm } from "../services/procedServices";

export default function CadastroProced ({navigation})
{
    const[id, setId] = useState(null);
    const[procedimento, setProcedimento] = useState(null);
    const[data, setData] = useState(null);
    const [display, setDisplay]=useState('none')
    const [tipoProcedimento, setTipoProcedimento] = useState('Consulta');


    const handleCadastro = async () => {
        const procedData = {
            id: id,
            proced: procedimento,
            data: data,
            tipo: tipoProcedimento
        };

        try {
            const response = await addProcedm(procedData);
            alert('Procedimento cadastrado com sucesso! ID: ' + response.id);
            setId('');
            setProcedimento('');
            setData('');
            setDisplay('flex');
        } catch (error) {
            alert('Erro ao cadastrar procedimento:', error);
        }
    };


    //envio form de login
    async function sendForm3(){
        let response=await fetch('http://localhost:3000/cadastroProced',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                proced: procedimento,
                data: data,
            }),
          });
          let json = await response.json();
          if(json == null){
            console.log("deu erro");
          }else{
            setId(json.id)
            setDisplay('flex');
          }
        }
    

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Cadastre o procedimento</Text>
                <Text style={css.login_error(display)}>Vacina registrada</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="ID do Animal" onChangeText={text=>setId(text)}/>
                <TextInput style={css.login_input} placeholder="Nome do procedimento" onChangeText={text=>setProcedimento(text)}/>
                <TextInput style={css.login_input} placeholder="Data do procedimento" onChangeText={text=>setData(text)}/>
                <Picker style={css.login_input}
                    selectedValue={tipoProcedimento}
                    onValueChange={(itemValue) => setTipoProcedimento(itemValue)}>
                    <Picker.Item label="Consulta" value="Consulta" />
                    <Picker.Item label="Cirurgia" value="Cirurgia" />
                    <Picker.Item label="Exame" value="Exame" />
                    <Picker.Item label="Castração" value="Castração" />
                    <Picker.Item label="Outro" value="Outro" />
                </Picker>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleCadastro()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroProced}