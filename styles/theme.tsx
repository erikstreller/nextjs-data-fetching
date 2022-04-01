import { extendTheme, theme as base, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `Inter, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.body}`
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  }
})

export default theme
