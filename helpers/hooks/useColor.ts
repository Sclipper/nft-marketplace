import { useColorModeValue } from '@chakra-ui/react'
import theme from 'theme'

type AvailableColors =
  | 'primary.main'
  | 'primary.dark'
  | 'primary.light'
  | 'secondary.main'
  | 'secondary.dark'
  | 'secondary.light'
  | 'error.main'
  | 'success.main'
// eslint-disable-next-line import/prefer-default-export
export const useColor = (color: AvailableColors) => {
  const colorSplit = color.split('.')
  const lightColor = theme.colors[colorSplit[0]][colorSplit[1] ?? '']
  const darkColor =
    theme.colors[colorSplit[0]][colorSplit[1] ? `dark_${colorSplit[1]}` : '']
  return useColorModeValue(lightColor, darkColor)
}
