import Head from 'next/head'

type SeoProps = {
  title: string
  content?: string
}

export default function Seo({
  title,
  content = 'Data Fetching Overview - SSG | SSR | CSR | ISR'
}: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={content} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
