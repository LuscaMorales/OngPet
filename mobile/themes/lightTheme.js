import { MD3LightTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,

    // 🎯 cor principal (verde veterinário suave)
    primary: '#4CAF93',

    // variações úteis
    secondary: '#7DD3A0',
    tertiary: '#A7E3C0',

    // fundo claro e limpo
    background: '#F5FBF8',
    surface: '#FFFFFF',

    // texto
    text: '#1E2E28',

    // elementos de destaque
    accent: '#6EE7B7',

    // estados
    error: '#E57373',
  },
};