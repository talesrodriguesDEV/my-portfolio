import { useState } from 'react'

import Head from 'next/head'

import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'

export default function Home() {
  const [english, setEnglish] = useState(false)

  return (
    <>
      <Head>
        <title>Tales Rodrigues DEV</title>
        <meta name="description" content="Tales Rodrigues' DEV Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col lg:flex-row lg:justify-between lg:h-screen'>
        <Header english={english} setEnglish={setEnglish} />
        <About english={english} />
        <Projects english={english} />
        <Footer english={english} />
      </main>
    </>
  )
}
