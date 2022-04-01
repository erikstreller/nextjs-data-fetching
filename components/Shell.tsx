import {
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  VStack
} from '@chakra-ui/react'
import Footer from './Footer'
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
          <Heading marginBottom={8}>Data Fetching Types in Next.js</Heading>
          <VStack spacing={8} alignItems='flex-start'>
            <VStack spacing={2} alignItems='flex-start'>
              <Section
                heading={strategies.ssg.heading}
                description={strategies.ssg.description}
              />
              <Time dateTime={dateTime} opacity={section === 'SSG' ? 1 : 0} />
            </VStack>
            <VStack spacing={2} alignItems='flex-start'>
              <Section
                heading={strategies.ssr.heading}
                description={strategies.ssr.description}
              />
              <Time dateTime={dateTime} opacity={section === 'SSR' ? 1 : 0} />
            </VStack>
            <VStack spacing={2} alignItems='flex-start'>
              <Section
                heading={strategies.csr.heading}
                description={strategies.csr.description}
              />
              <Time dateTime={dateTime} opacity={section === 'CSR' ? 1 : 0} />
            </VStack>
            <VStack spacing={2} alignItems='flex-start'>
              <Section
                heading={strategies.isr.heading}
                description={strategies.isr.description}
              />
              <Time dateTime={dateTime} opacity={section === 'ISR' ? 1 : 0} />
            </VStack>
          </VStack>
          <Spacer />
          <Footer />
        </VStack>
      </Flex>
    </>
  )
}

const strategies = {
  ssg: {
    heading: 'SSG: Static-site generation',
    description: 'Runs once at build-time - reused for each request'
  },
  ssr: {
    heading: 'SSR: Server-side rendering',
    description:
      'Runs on every request - fetch data before sending page tp client'
  },
  csr: {
    heading: 'CSR: Client-side rendering',
    description:
      'Runs on every request - load page first and fetch data on client-side'
  },
  isr: {
    heading: 'ISR: Incremental Static Regeneration',
    description:
      'SSG and SSR combined - update data after a certain revalidation time'
  }
}
