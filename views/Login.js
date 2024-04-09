import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function Login ({navigation})
{

    const[user, setUser] = useState(null);
    const[password, setPassword] = useState(null);
    const[login, setLogin] = useState(null);

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Login</Text>
            </View>
            <View style={css.login_form}>
                <TextInput style={css.login_input} placeholder="Usuário" onChangeText={text=>setUser(text)}/>
                <TextInput style={css.login_input} placeholder="senha" onChange={text=>setPassword(text)} secureTextEntry={true}/>
                <TouchableOpacity style={css.login_buttom}>
                    <Text style={css.login_buttomText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export {Login}