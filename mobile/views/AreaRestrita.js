import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, TextInput, View, TouchableOpacity, Image, Platform, ScrollView } from "react-native";
import { css } from "../assets/css/Css";
import { cadastroUser } from "../services/userServices";
import { useTheme, Button, Text  } from 'react-native-paper';



export default function AreaRestrita ({navigation})
{
    const theme = useTheme();

    return(
        <ScrollView>
            <View style={{ backgroundColor: theme.colors.background}}>
                <View>
                    <Text>Cadastro de Usuarios</Text>
                    <TouchableOpacity style={css.login_buttom} onPress={()=>navigation.navigate('UsersList')}>
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
            </View>
        </ScrollView>
    )
}

export {AreaRestrita}