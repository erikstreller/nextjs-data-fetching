import {
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navigate from './Navigate'
import Section from './Section'
import Seo from './Seo'
import Time from './Time'

type ShellProps = {
  title: string
  section: 'SSG' | 'SSR' | 'CSR' | 'ISR'
  dateTime: string
}

export default function Shell({ title, section, dateTime }: ShellProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  const router = useRouter()

  return (
    <>
      <Seo title={title} />

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
          <Heading>Data Fetching in Next.js</Heading>
          <Text paddingBottom={8} color='gray.600'>
            Click the strategies to navigate
          </Text>
          <VStack spacing={10} alignItems='flex-start'>
            <VStack spacing={8} alignItems='flex-start'>
              {strategies.map((strategy, id) => (
                <Navigate href={strategy.href} key={id}>
                  <VStack spacing={2} alignItems='flex-start'>
                    <Section
                      heading={strategy.heading}
                      description={strategy.description}
                    />
                    <Time
                      dateTime={dateTime}
                      opacity={section === strategy.section ? 1 : 0}
                    />
                  </VStack>
                </Navigate>
              ))}
            </VStack>
            <HStack>
              <Button
                bgColor={colorMode === 'light' ? 'pink.300' : 'pink.600'}
                onClick={() => router.reload()}
              >
                Refresh Page
              </Button>
              <Text paddingLeft={2} color='gray.600'>
                to see changes
              </Text>
            </HStack>
          </VStack>
          <Spacer />
          <Footer />
        </VStack>
      </Flex>
    </>
  )
}

const strategies = [
  {
    href: '/',
    heading: 'SSG: Static-site generation',
    description: 'Runs once at build-time - reused for each request',
    section: 'SSG'
  },
  {
    href: '/server',
    heading: 'SSR: Server-side rendering',
    description:
      'Runs on every request - fetch data before sending page to client',
    section: 'SSR'
  },
  {
    href: '/client',
    heading: 'CSR: Client-side rendering',
    description:
      'Runs on every request - load page first and fetch data on client-side (loading... => data)',
    section: 'CSR'
  },
  {
    href: '/incremental',
    heading: 'ISR: Incremental Static Regeneration',
    description:
      'SSG and SSR combined - update data after a certain revalidation time (7 seconds)',
    section: 'ISR'
  }
]
