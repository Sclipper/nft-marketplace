// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  error: {
    main: '#E71D36',
    dark_main: '#B40003',
  },
  success: {
    main: '#32936F',
    dark_main: '#00603C',
  },
  primary: {
    light: '#57D8DC',
    main: '#24A5A9',
    dark: '#0B8C90',
    dark_light: '#007276',
    dark_main: '#00595D',
    dark_dark: '#003F43',
  },
  secondary: {
    light: '#FFA2A8',
    main: '#F9888E',
    dark: '#E06F75',
    dark_light: '#AD3C42',
    dark_main: '#932228',
    dark_dark: '#7A090F',
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
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, config, components, fonts })
export default theme
