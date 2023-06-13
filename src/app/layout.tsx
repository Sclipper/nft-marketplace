'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import * as React from 'react'
// import Fonts from './Fonts'
import theme from '../theme'
import Header from './components/Header'
import { GlobalProvider } from './globalContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ height: '100vh' }}>
        <CacheProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <GlobalProvider>
            <ChakraProvider theme={theme}>
              <>
                <Header />
                <Box>
                  {/* <Fonts /> */}
                  {children}
                </Box>
              </>
            </ChakraProvider>
          </GlobalProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
