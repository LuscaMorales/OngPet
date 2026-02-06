import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { cadastroVac } from "../services/vacinaServices";

export default function CadastroVacina ({navigation})
{
    const[id, setId] = useState(null);
    const[vacina, setVacina] = useState(null);
    const[data, setData] = useState(null);
    const[lab, setLab] = useState(null);
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


    //envio form de login
    async function sendForm3(){
        let response=await fetch('http://192.168.1.15:3000/cadastroVacina',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                vacina: vacina,
                lab: lab,
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
                <Text style={css.loginHeader}>Cadastre a vacina</Text>
                <Text style={css.login_error(display)}>Vacina registrada</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="ID do Animal" onChangeText={text=>setId(text)}/>
                <TextInput style={css.login_input} placeholder="Nome da Vacina" onChangeText={text=>setVacina(text)}/>
                <TextInput style={css.login_input} placeholder="Laboratório" onChangeText={text=>setLab(text)}/>
                <TextInput style={css.login_input} placeholder="Data da Aplicação" onChangeText={text=>setData(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>handleCadastro()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroVacina}