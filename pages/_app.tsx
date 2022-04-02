import '@/styles/global.css'
import CustomChakraProvider from '@/styles/provider'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomChakraProvider>
      <Component {...pageProps} />
    </CustomChakraProvider>
  )
}

export default MyApp
