import { HStack, Text, useColorMode } from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'

type TimeProps = {
  dateTime?: string
  opacity?: number
}

export default function Time({ dateTime, opacity = 1 }: TimeProps) {
  const { colorMode } = useColorMode()

  return (
    <HStack>
      <Text
        fontSize='4xl'
        fontWeight='medium'
        color={colorMode === 'light' ? 'cyan.400' : 'cyan.600'}
        opacity={opacity}
      >
        {dateTime ? format(parseISO(dateTime), 'kk:mm:ss') : 'Loading...'}
      </Text>
    </HStack>
  )
}
