import {
  ColorModeProvider,
  CSSReset,
  GlobalStyle,
  ThemeProvider as ChakraThemeProvider
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import theme from './theme'

export default function CustomChakraProvider({
  children
}: PropsWithChildren<{}>) {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          initialColorMode: 'dark'
        }}
        value='dark'
      >
        <GlobalStyle />
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ChakraThemeProvider>
  )
}
