import { MD3DarkTheme } from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    // 🎯 verde principal no dark (mais “neon suave”)
    primary: '#5ED3A6',

    secondary: '#3AAE87',
    tertiary: '#2E8B6E',

    // fundo escuro esverdeado (não preto puro)
    background: '#0F1F1A',
    surface: '#152A23',

    // texto claro
    text: '#E6F5EF',

    // destaque
    accent: '#7FFFD4',

    error: '#FF6B6B',
  },
};