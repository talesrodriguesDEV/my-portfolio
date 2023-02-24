import About from '@/components/About'
import Education from '@/components/Education'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Stacks from '@/components/Stacks'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tales Rodrigues DEV</title>
        <meta name="description" content="Tales Rodrigues' DEV Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <About />
        <Projects />
        <Education />
        <Stacks />
      </body>
    </>
  )
}
