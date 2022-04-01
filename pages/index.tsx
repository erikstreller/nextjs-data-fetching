import Shell from '@/components/Shell'
import { GetStaticProps } from 'next'

export default function Home({ staticTime }) {
  return (
    <Shell
      title='SSG: Static-site generation'
      section='SSG'
      dateTime={staticTime}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://worldtimeapi.org/api/ip')
  const time = await res.json()

  return {
    props: {
      staticTime: time.datetime
    }
  }
}
