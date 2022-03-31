import { Box, Divider, Link, Text } from '@chakra-ui/react'

export default function Footer() {
  return (
    <>
      <Divider />
      <Box h={8} alignItems='flex-start'>
        <Text>
          Erik Streller {new Date().getFullYear()} •{' '}
          <Link
            href='https://github.com/erikstreller/nextjs-data-fetching'
            isExternal
            color='cyan.600'
          >
            Source Code
          </Link>
        </Text>
      </Box>
    </>
  )
}
