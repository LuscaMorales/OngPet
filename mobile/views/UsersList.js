import React, {useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, FlatList, View, TouchableOpacity, Image, Platform } from "react-native";
import { css } from "../assets/css/Css";
import { getCompleteAnimal } from "../services/animalServices";
import UserCard from "../components/UserCard";
import {getAll} from "../services/userServices";

export default function UsersList ({navigation})
{

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
    


    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? "padding" : "height"} style={[css.container, css.darkbg]}>
            <View>
                <Text style={css.loginHeader}>Lista de usuário</Text>
            </View>
            <View>
                <FlatList 
                    data={usersData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <UserCard
                            user={item}
                            onEdit={()=>alert("editando")}
                            onDelete={()=>alert("deletando")}
                        />
                    )}
                />
            </View>
            <View style={css.login_form}>
            </View>
        </KeyboardAvoidingView>
    )
}

export {UsersList}