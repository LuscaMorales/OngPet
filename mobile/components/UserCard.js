import { View, Text, TouchableOpacity} from "react-native"

export default function UserCard({user, onEdit, onDelete}){
    return (
        <View style={{padding: 15}}>
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