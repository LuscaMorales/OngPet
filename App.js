import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { css } from './mobile/assets/css/Css';
import { PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './mobile/themes';
import React, {useEffect, useState} from "react";



import {
  Login, 
  AreaRestrita, 
  CadastroAnimal,
  ConsultaAnimal,
  AreaFuncionario,
  AnimalInfo,
  CadastroVacina,
  CadastroProced,
  CadastroUser,
  UsersList
} from './mobile/views';

const Stack = createNativeStackNavigator();


export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <PaperProvider theme={isDark ? darkTheme : lightTheme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroAnimal">
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
        <Stack.Screen name="CadastroUser" component={CadastroUser} />
        <Stack.Screen name="UsersList" component={UsersList} />
        <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} /> 
        <Stack.Screen name="ConsultaAnimal" component={ConsultaAnimal} />
        <Stack.Screen name="AreaFuncionario" component={AreaFuncionario} />
        <Stack.Screen name="AnimalInfo" component={AnimalInfo} />
        <Stack.Screen name="CadastroProced" component={CadastroProced} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
  