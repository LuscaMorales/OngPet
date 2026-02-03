import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import { css } from "../assets/css/Css";
import { cadastroUser } from "../services/userServices";

export default function AreaRestrita ({navigation})
{

    const[user, setUser] = useState('');
    const[password, setPassword] = useState('');
    const[power, setPower] = useState('');
    const[login, setLogin] = useState(null);

    
    const createUser = async () => {
        const response = await cadastroUser(user, password, power);
        if (!response.sucess) {
            alert('Erro ao cadastrar usuário: ' + response.error);
        } else {
            alert('Usuário cadastrado com sucesso!');
            setUser('');
            setPassword('');
            setPower('');
        }
    }

    return(
        <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.HeaderAR}>Cadastro de Usuarios</Text>
                <TextInput style={css.login_input} value={user} placeholder="Username" onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login_input} value={password} placeholder="Senha" onChangeText={text=>setPassword(text)}/>
                <TextInput style={css.login_input} value={power} placeholder="Poder" onChangeText={text=>setPower(text)}/>
                <TouchableOpacity style={css.login_buttom} onPress={()=>createUser()}>
                    <Text style={css.login_buttomText}>Enviar</Text>
                </TouchableOpacity>
            </View>
                <Text style={css.HeaderAR}>Cadastro de Animais</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroAnimal')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            <View>
            <Text style={css.HeaderAR}>Consulta de Animais</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('ConsultaAnimal')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={css.HeaderAR}>Cadastro de Consulta</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroProced')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
            <Text style={css.HeaderAR}>Cadastro de vacina</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroVacina')}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

export {AreaRestrita}