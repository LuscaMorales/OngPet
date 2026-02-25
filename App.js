import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { css } from './mobile/assets/css/Css';
import Login from './mobile/views/Login'
import AreaRestrita from './mobile/views/AreaRestrita';
import CadastroAnimal from './mobile/views/CadastroAnimal';
import ConsultaAnimal from './mobile/views/ConsultaAnimal';
import AreaFuncionario from './mobile/views/AreaFuncionario';
import AnimalInfo from './mobile/views/AnimalInfo';
import CadastroVacina from './mobile/views/CadastroVacina';
import CadastroProced from './mobile/views/CadastroProced';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CadastroProced">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
        <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />
        <Stack.Screen name="ConsultaAnimal" component={ConsultaAnimal} />
        <Stack.Screen name="AreaFuncionario" component={AreaFuncionario} />
        <Stack.Screen name="AnimalInfo" component={AnimalInfo} />
        <Stack.Screen name="CadastroVacina" component={CadastroVacina} />
        <Stack.Screen name="CadastroProced" component={CadastroProced} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  