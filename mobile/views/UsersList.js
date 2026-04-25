import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, FlatList, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { getCompleteAnimal } from "../services/animalServices";
import UserCard from "../components/UserCard";
import {getAll} from "../services/userServices";
import { Provider as PaperProvider } from 'react-native-paper';
import { useTheme } from 'react-native-paper';


export default function UsersList ({navigation})
{

    const theme = useTheme();
    const[id, setId] = useState(null);
    const[usersData, setUsersData] = useState('');      



    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getAll();
                setUsersData(data.data);
                console.log(data.data);
            } catch (error) {
                console.error('Erro ao buscar dados dos usuários', error)   ;
            }
        };
        fetchUserData();
    }, []);

    const editUser = async () => {
        const procedData = {};
        try {
            const response = await addProcedm(procedData);
        } catch (error) {
            console.log(error)
            alert('Erro ao editar usuário', error);
        }
    };


    return(
        <PaperProvider>
            <View style={{ backgroundColor: theme.colors.background}}>
                <FlatList 
                    data={usersData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <UserCard
                            user={item}
                            onEdit={()=>navigation.navigate('CadastroUser', { userData: item})}
                            onDelete={()=>alert("deletando")}
                        />
                    )}
                />
            </View>
        </PaperProvider>
    )
}

export {UsersList}