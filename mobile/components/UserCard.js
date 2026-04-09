import { View, Text, TouchableOpacity} from "react-native"
import * as React from 'react';
import { List } from 'react-native-paper';

export default function UserCard({user, onEdit, onDelete}){
    return (
        <View style={{padding: 15}}>
            <List.Item
                title={user.fullName}
                description={user.role}
                left={props => <List.Icon {...props} icon="folder" />}
            />
            <Text>{user.fullName}</Text>
            <Text>{user.role}</Text>
            <TouchableOpacity onPress={onEdit}>
                <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}