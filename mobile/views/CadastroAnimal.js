import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform, Alert } from "react-native";
import { css } from "../assets/css/Css";
import { addAnimal } from "../services/animalServices";
import { Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';


export default function CadastroAnimal ({navigation})
{

    const[name, setName] = useState('');
    const[titleName, setTitleName] = useState('');
    const[nascimento, setNascimento] = useState('');
    const[chegada, setChegada] = useState('');
    const[raca, setRaca] = useState('');
    const[id, setId] = useState('');
    const[display, setDisplay] = useState('none')
    const[image, setImage] = useState('');
    

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


    const handleSelectImage = () => {
        Alert.alert(
            "Foto de Perfil",
            "Como deseja adicionar a foto de perfil?",
            [
                { text: "📷 Tirar Foto", onPress: takePhoto },
                { text: "🖼️ Escolher da Galeria", onPress: pickFromGallery },
                { text: "Cancelar", style: "cancel" }
            ]
        );
    };

    const takePhoto = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Permissão necessária', 'É necessário permitir o acesso à câmera para tirar fotos.');
            return;
        }
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images'], 
            quality: 0.7,
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.canceled) {
            setImage({
                uri: result.assets[0].uri,
                name: "image.jpg",
                type: result.assets[0].mimeType || 'image/jpeg',
            });
        }
    };

    const pickFromGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria.');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'], 
            quality: 0.7,
            allowsEditing: true,
            aspect: [4, 3],
        });
        if (!result.canceled) {
            setImage({
                uri: result.assets[0].uri,
                name: "image.jpg",
                type: result.assets[0].mimeType || 'image/jpeg',
            });
        }
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Cadastre o animal</Text>
                <Text style={css.login_error(display)}> O Id do {titleName} será {id}</Text>
            </View>
            <View style={css.login_form}>
                <View>
                    <Image style={css.images} source={{uri:image.uri}}/>
                    <Button onPress={handleSelectImage}>Adicionar / Alterar Foto</Button>
                </View>
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