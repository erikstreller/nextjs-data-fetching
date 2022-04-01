import Shell from '@/components/Shell'
import { GetStaticProps } from 'next'

export default function Incremental({ incrementalTime }) {
  return (
    <Shell
      title='ISR: Incremental Static Regeneration'
      section='ISR'
      dateTime={incrementalTime}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://worldtimeapi.org/api/ip')
  const time = await res.json()

  return {
    props: {
      incrementalTime: time.datetime
    },
    revalidate: 7
  }
}
