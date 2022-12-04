// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  error: '#E71D36',
  success: '#32936F',
  primary: {
    default: '#24A5A9',
    _dark: '#1d787a',
  },
  secondary: {
    default: '#F9888E',
    _dark: '#c46d72',
  },
  gray: {
    50: '#F7FAFC',
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
    400: '#A0AEC0',
    500: '#718096',
    600: '#4A5568',
    700: '#2D3748',
    800: '#1A202C',
    900: '#171923',
  },
}

const components = {
  Link: {
    baseStyle: {
      '&:hover': {
        textDecoration: 'none',
        color: colors.black,
        textShadow: '0px 0px 0.5px black',
      },
      color: 'rgb(85, 85, 85)',
    },
  },
}

const fonts = {
  heading:
    '"Montserrat Alternates", "Roboto", "Helvetica", "Arial", sans-serif',
  body: '"Montserrat Alternates", "Roboto", "Helvetica", "Arial", sans-serif',
  mono: '"Montserrat Alternates", "Roboto", "Helvetica", "Arial", sans-serif',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ colors, config, components, fonts })
export default theme
