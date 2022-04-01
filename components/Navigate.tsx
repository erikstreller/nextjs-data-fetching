import { Link, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

type NavigateProps = {
  children: ReactNode
  href: string
}

export default function Navigate({ children, href }: NavigateProps) {
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{
          textDecor: 'none'
        }}
      >
        <VStack spacing={2} alignItems='flex-start'>
          {children}
        </VStack>
      </Link>
    </NextLink>
  )
}
