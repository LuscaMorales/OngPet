import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, TextInput, View, TouchableOpacity, Image, Platform, Alert } from "react-native";
import { css } from "../assets/css/Css";
import { cadastro, update } from "../services/userServices";
import { Picker } from "@react-native-picker/picker";
import { TextInputMask } from 'react-native-masked-text'
import { Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';



export default function CadastroUser ({route, navigation})
{

    const userData = route.params?.userData;
    const isEditMode = !!userData;
    const [loading, setLoading] = useState(false);
    const [imageUser, setImageUser] = useState('');


    const[name,setName] = useState('');
    const[cpf, setCpf] = useState("");
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[role, setRole] = useState('viewer');
    const[password, setPassword] = useState('');
    const[birth_date, setBirthDate] = useState('');
    
    const[display, setDisplay] = useState('none');

    useEffect(()=>{
        if(isEditMode){
            setImageUser({
                uri:userData.avatarUrl,
                name:"imageUser.jpg",
                type:"image/jpg",
            });
            setName(userData.fullName);
            setCpf(userData.cpf);
            setEmail(userData.email);
            setPhone(userData.phone);
            setRole(userData.role);
            setPassword(userData.password);
            setBirthDate(userData.birth_date.split('-').reverse().join('/'));
        }   
    }, [isEditMode]);
    
    const handleSubmit = async () => {
        //setLoading(true);

        const requiredFields = ['fullName', 'cpf', 'email', 'phone', 'password', 'birth_date'];
        const NewUserData = {
            fullName: name,
            cpf: cpf,
            email: email,
            phone: phone,
            role: role,
            password: password,
            birth_date: birth_date,
            avatar : imageUser,
        };
        const missingFields = requiredFields.some(field => !NewUserData[field]);
        if (missingFields) {
            alert('Todos os parâmetros são obrigatórios');
            return;
        }
        if (cpf.length !== 11 && cpf.length !== 14) {
            alert("CPF inválido");
            return;
        }
        if (!email.includes("@")) {
            alert("Email inválido");
            return;
        }
        try {
            if(isEditMode){
                const response = await update(userData.id, NewUserData);
                if(!response.success){
                    if(response.error.code){
                        alert(response.error.message);
                    }
                }else{
                    alert("Usuário alterado com sucesso");
                    navigation.goBack();
                }
            }else{
                const response = await cadastro(NewUserData);
                if(!response.success){
                    if(response.error.code){
                        alert(response.error.message);
                    }
                }else{
                    alert('Usuário cadastrado com sucesso!');
                    setName('');
                    setCpf('');
                    setPhone('');
                    setRole('');
                    setEmail('');
                    setPassword('');
                    setBirthDate('');
                    setDisplay('flex');
                }
            }
        } catch (error) {
            console.error('Erro cadastro/edit usuário:', error);
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
            setImageUser({
                uri: result.assets[0].uri,
                name: "imageUser.jpg",
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
            setImageUser({
                uri: result.assets[0].uri,
                name: "imageUser.jpg",
                type: result.assets[0].mimeType || 'image/jpeg',
            });
        }
    };

    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>{isEditMode ? 'Editar o usuário' : 'Crie o usuário'}</Text>
            </View>
            <View style={css.login_form}>
                <View>
                    <Image style={css.images} source={{uri:imageUser.uri}}/>
                    <Button onPress={handleSelectImage}>Adicionar / Alterar Foto</Button>
                </View>
                <TextInput style={css.login_input} value={name} placeholder="Nome Completo" onChangeText={text=>setName(text)}/>
                <TextInputMask style={css.login_input} placeholder="CPF"
                type={'cpf'} value={cpf} onChangeText={text =>setCpf(text)}/>
                <TextInputMask style={css.login_input} placeholder="Data de Nascimento"
                    type={'datetime'}
                    options={{
                        format:'DD/MM/YYYY'
                    }}
                    value={birth_date}
                    onChangeText={text =>setBirthDate(text)}/>
                <TextInput style={css.login_input} value={email} placeholder="Email" onChangeText={text=>setEmail(text)}/>
                <TextInputMask style={css.login_input} placeholder="Telefone"
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    value={phone}
                    onChangeText={text =>setPhone(text)}/>
                <Picker style={css.login_input}
                    selectedValue={role}
                    onValueChange={(itemValue) => setRole(itemValue)}>
                    <Picker.Item label="Admin" value="admin" />
                    <Picker.Item label="Funcionário" value="funcionario" />
                    <Picker.Item label="Veterinário" value="veterinario" />
                    <Picker.Item label="Visitante" value="viewer" />
                    <Picker.Item label="Recepção" value="recepcao" />
                </Picker>
                <TextInput style={css.login_input} value={password} placeholder="Senha" onChangeText={text=>setPassword(text)} secureTextEntry={true}/>
                <Button onPress={()=>handleSubmit()} disabled={loading}>{isEditMode ? 'Salvar Alterações' : 'Criar usuário'}</Button>
            </View>
        </KeyboardAvoidingView>
    )
}

export {CadastroUser}