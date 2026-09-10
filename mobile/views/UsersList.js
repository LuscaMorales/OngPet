import React, {useCallback, useEffect, useState} from "react";
import {KeyboardAvoidingView, Text, FlatList, View, TouchableOpacity, Image, Platform, Alert } from "react-native";
import { css } from "../assets/css/Css";
import { getCompleteAnimal } from "../services/animalServices";
import UserCard from "../components/UserCard";
import {getAll, delUser} from "../services/userServices";
import { Button, Dialog, PaperProvider, Portal } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { useFocusEffect } from "@react-navigation/native";


export default function UsersList ({navigation})
{

    const theme = useTheme();
    const[id, setId] = useState(null);
    const[usersData, setUsersData] = useState([]);
    const[user, setUser] = useState('');

    const [visible, setVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);


    const fetchUserData = async () => {
        try {
            const data = await getAll();
            setUsersData(data.data);
        } catch (error) {
            Alert.alert('Erro ao buscar dados dos usuários', error);
        }
    };

    useFocusEffect(
        useCallback(()=>{
            fetchUserData();
        },[])
    );

    const deleteUser = async () =>{
        try {
            const deletedUser = await delUser(selectedId);
            fetchUserData();
        }catch (error){
            console.error('Erro ao deletar o usuário',error);
        }
    };
    
    const showDialog = (id) => {
    setSelectedId(id);
    setVisible(true);
    };

    const hideDialog = () => {
    setVisible(false);
    };

    const confirmDelete = () => {
    deleteUser();
    hideDialog();
    };
    
    return(
        <PaperProvider>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Confirmar Exclusão</Dialog.Title>
                    <Dialog.Content>
                        <Text>Tem certeza que deseja excluir esse usuário</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Cancelar</Button>
                        <Button onPress={confirmDelete} textColor="red">Deletar</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <View style={{ backgroundColor: theme.colors.background, flex: 1}}>
                <FlatList 
                    data={usersData}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <UserCard
                            user={item}
                            onEdit={()=>navigation.navigate('CadastroUser', { userData: item})}
                            onDelete={()=>{showDialog(item.id)}}
                        />
                    )}
                    ListEmptyComponent={
                        <View style={{
                            alignItems: 'center',
                            padding: 24,
                        }}
                        >
                            <Text variant="bodyLarge">
                                Nenhum usuário cadastrado!
                            </Text>
                        </View>
                    }
                />
            </View>
        </PaperProvider>
    )
}

export {UsersList}