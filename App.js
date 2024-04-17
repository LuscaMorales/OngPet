import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { css } from './assets/css/Css';
import Login from './views/Login'
import AreaRestrita from './views/AreaRestrita';
import CadastroAnimal from './views/CadastroAnimal';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroAnimal">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
        <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
