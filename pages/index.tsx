import * as React from 'react'

import { Box, useColorMode } from '@chakra-ui/react'
import theme from 'theme'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  React.useEffect(() => {
    if (colorMode !== theme.config.initialColorMode) {
      toggleColorMode()
    }
  }, [colorMode, toggleColorMode])
  return (
    <Box>
      {/* <Header /> */}
      heloo
    </Box>
  )
}
