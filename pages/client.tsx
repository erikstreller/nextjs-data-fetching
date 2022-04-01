import Shell from '@/components/Shell'
import { useEffect, useState } from 'react'

export default function Client() {
  const [clientTime, setClientTime] = useState<string>(null)

  useEffect(() => {
    fetch('https://worldtimeapi.org/api/ip')
      .then((res) => res.json())
      .then((time) => {
        setClientTime(time.datetime)
      })
  }, [])

  return (
    <Shell
      title='CSR: Client-side rendering'
      section='CSR'
      dateTime={clientTime}
    />
  )
}
