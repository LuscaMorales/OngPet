import React, { useRef, useState } from "react";
import { KeyboardAvoidingView, View, Platform } from "react-native";
import { Text, TextInput, Button, Surface, Avatar, HelperText } from "react-native-paper";
import { css } from "../assets/css/Css";
import { login } from "../services/userServices";
import { TextInputMask } from 'react-native-masked-text';

export default function Login({ navigation }) {
    const [display, setDisplay] = useState('none');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const cpfField = useRef(null);

    const handleLogin = async () => {
        if (cpf.length !== 14) {
            alert("CPF inválido");
            return;
        }
        setLoading(true);
        const roles = ["funcionario", "veterinario", "admin"];
        const rawCpf = cpfField.current?.getRawValue ? cpfField.current.getRawValue() : cpf.replace(/\D/g, '');
        const result = await login(rawCpf, password);
        setLoading(false);

        if (!result.success) {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
            return;
        }
        if (roles.includes(result.data.role)) {
            navigation.navigate('AreaRestrita');
        } else {
            navigation.navigate('AreaFuncionario');
        }
    };

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? "padding" : "height"} 
            style={[css.container, css.darkbg]}
        >
            <Surface style={css.login_card} elevation={4}>
                <View style={{ alignItems: 'center', marginBottom: 12 }}>
                    <Avatar.Icon 
                        size={64} 
                        icon="paw" 
                        style={{ backgroundColor: '#287e1c', marginBottom: 12 }} 
                        color="#FFFFFF"
                    />
                    <Text style={css.loginHeader}>OngPet</Text>
                    <Text style={css.loginSubHeader}>Painel de Controle e Resgate</Text>
                </View>

                {display === 'flex' && (
                    <HelperText type="error" visible={true} style={css.login_error('flex')}>
                        ⚠️ Usuário ou senha inválidos
                    </HelperText>
                )}

                <View style={css.login_form}>
                    <TextInput
                        mode="outlined"
                        label="CPF"
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                        activeOutlineColor="#287e1c"
                        outlineColor="#143f0e"
                        textColor="#FFFFFF"
                        outlineStyle={{ borderRadius: 18 }}
                        style={css.login_input}
                        left={<TextInput.Icon icon="card-account-details-outline" color="#287e1c" />}
                        render={props => (
                            <TextInputMask
                                {...props}
                                type={'cpf'}
                                ref={cpfField}
                            />
                        )}
                    />

                    <TextInput
                        mode="outlined"
                        label="Senha"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={!showPassword}
                        activeOutlineColor="#287e1c"
                        outlineColor="#143f0e"
                        textColor="#FFFFFF"
                        outlineStyle={{ borderRadius: 18 }}
                        style={css.login_input}
                        left={<TextInput.Icon icon="lock-outline" color="#287e1c" />}
                        right={
                            <TextInput.Icon 
                                icon={showPassword ? "eye-off" : "eye"} 
                                color="#287e1c"
                                onPress={() => setShowPassword(!showPassword)} 
                            />
                        }
                    />

                    <Button 
                        mode="contained" 
                        buttonColor="#287e1c"
                        textColor="#FFFFFF"
                        style={css.login_buttom}
                        labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
                        loading={loading}
                        disabled={loading}
                        onPress={handleLogin}
                    >
                        Entrar
                    </Button>

                    <Button 
                        mode="outlined" 
                        textColor="#A8E39F"
                        style={css.login_buttomGeral}
                        labelStyle={{ fontSize: 14, fontWeight: '600' }}
                        icon="shield-account-outline"
                        onPress={() => navigation.navigate('ConsultaAnimal')}
                    >
                        Acesso Geral
                    </Button>
                </View>
            </Surface>
        </KeyboardAvoidingView>
    );
}

export { Login };