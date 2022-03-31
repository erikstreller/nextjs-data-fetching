import { Text, VStack } from '@chakra-ui/react'

type SectionProps = {
  heading: string
  description: string
}

export default function Section({ heading, description }: SectionProps) {
  return (
    <VStack alignItems='flex-start' spacing='4px'>
      <Text fontSize='2xl' fontWeight='medium'>
        {heading}
      </Text>
      <Text fontSize='md' fontWeight='normal'>
        {description}
      </Text>
    </VStack>
  )
}
