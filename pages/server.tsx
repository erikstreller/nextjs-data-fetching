import Shell from '@/components/Shell'
import { GetServerSideProps } from 'next'

export default function Server({ serverTime }) {
  return (
    <Shell
      title='SSR: Server-side rendering'
      section='SSR'
      dateTime={serverTime}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://worldtimeapi.org/api/ip')
  const time = await res.json()

  return {
    props: {
      serverTime: time.datetime
    }
  }
}
