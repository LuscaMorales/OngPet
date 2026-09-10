import { View, Text, TouchableOpacity} from "react-native"
import * as React from 'react';
import {IconButton, List, Avatar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from 'react-native-paper';


export default function UserCard({user, onEdit, onDelete}){
    const theme = useTheme();
    const iconNF = "https://res.cloudinary.com/dnpzlhevt/image/upload/v1783554685/iconnotfound_mvfpyt.jpg";
    return (
        <View style={{padding: 15}}>
            <List.Item
                title={user.fullName}
                description={user.role}
                theme={theme}
                left={props => (
                    <Avatar.Image
                    {...props}
                    size={40}
                    source={{ uri: user.avatarUrl || iconNF}}
                    />
                )}
                right={props => (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <IconButton
                        icon="pencil"
                        size={20}
                        onPress={() => onEdit()}
                    />
                    <IconButton
                        icon="delete"
                        size={20}
                        onPress={() => onDelete()}
                    />
                    </View>
                )}
            />
        </View>
    );
}