import { MD3DarkTheme } from 'react-native-paper';

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,

    // Paleta OngPet Dark personalizada:
    // color1: #287e1c | color2: #1e5e15 | color3: #143f0e | color4: #0a1f07 | color5: #000000
    primary: '#287e1c',
    onPrimary: '#FFFFFF',
    primaryContainer: '#1e5e15',
    onPrimaryContainer: '#E6F5EF',

    secondary: '#1e5e15',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#143f0e',
    onSecondaryContainer: '#D2F0CE',

    tertiary: '#143f0e',

    background: '#000000',       // .color5 (#000000)
    surface: '#0a1f07',          // .color4 (#0a1f07)
    surfaceVariant: '#143f0e',   // .color3 (#143f0e)

    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#A8E39F',

    outline: '#287e1c',          // .color1 (#287e1c)
    outlineVariant: '#1e5e15',   // .color2 (#1e5e15)

    error: '#FF5252',
    onError: '#FFFFFF',
  },
};