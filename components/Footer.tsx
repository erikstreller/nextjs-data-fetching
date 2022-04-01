import { Box, Divider, Link, Text, useColorMode } from '@chakra-ui/react'

export default function Footer() {
  const { colorMode } = useColorMode()

  return (
    <>
      <Divider paddingTop={4} />
      <Box h={8} alignItems='flex-start'>
        <Text>
          Erik Streller {new Date().getFullYear()} •{' '}
          <Link
            href='https://github.com/erikstreller/nextjs-data-fetching'
            isExternal
            color={colorMode === 'light' ? 'cyan.500' : 'cyan.600'}
          >
            Source Code
          </Link>
        </Text>
      </Box>
    </>
  )
}
