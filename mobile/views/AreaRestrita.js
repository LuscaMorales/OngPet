import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import { css } from "../assets/css/Css";
import { cadastroUser } from "../services/userServices";

export default function AreaRestrita ({navigation})
{
    return(
        <ScrollView>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.HeaderAR}>Cadastro de Usuarios</Text>
                <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('CadastroUser')}>
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