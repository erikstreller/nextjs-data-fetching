import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
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
