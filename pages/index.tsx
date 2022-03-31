import Footer from '@/components/Footer'
import Section from '@/components/Section'
import {
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <Head>
        <title>Data Fetching in Next.js</title>
        <meta
          name='description'
          content='Data Fetching Overview - SSG | SSR | CSR | ISR'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Button onClick={toggleColorMode} position='fixed' top={4} right={4}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>

      <Flex
        as='main'
        h='100vh'
        w='90%'
        maxW='1100px'
        marginX='auto'
        alignItems='flex-start'
        paddingTop={16}
        flexDirection='column'
      >
        <VStack alignItems='flex-start' h='full' w='full'>
          <Heading marginBottom={8}>Data Fetching Types in Next.js</Heading>
          <VStack spacing={8} alignItems='flex-start'>
            {strategies.map((strategy, id) => (
              <Section
                key={id}
                heading={strategy.heading}
                description={strategy.description}
              />
            ))}
          </VStack>
          <Spacer />
          <Footer />
        </VStack>
      </Flex>
    </div>
  )
}

const strategies = [
  {
    heading: 'SSG: Static-site generation',
    description: 'Runs once at build-time - reused for each request'
  },
  {
    heading: 'SSR: Server-side rendering',
    description:
      'Runs on every request - fetch data before sending page tp client'
  },
  {
    heading: 'CSR: Client-side rendering',
    description:
      'Runs on every request - load page first and fetch data on client-side'
  },
  {
    heading: 'ISR: Incremental Static Regeneration',
    description:
      'SSG and SSR combined - update data after a certain revalidation time'
  }
]
