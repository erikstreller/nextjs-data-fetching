import { HStack, Text } from '@chakra-ui/react'

type TimeProps = {
  dateTime?: string
  opacity?: number
}

export default function Time({ dateTime, opacity = 1 }: TimeProps) {
  return (
    <HStack>
      <Text fontSize='4xl' fontWeight='medium' opacity={opacity}>
        {dateTime ? dateTime : 'Loading...'}
      </Text>
    </HStack>
  )
}
