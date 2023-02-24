import Image from 'next/image'
import React from 'react'
import me from '../images/me.jpeg'

export default function About() {
  return (
    <section className='flex flex-col items-center py-6 border'>
      <Image className='rounded-full' width={200} height={200} src={me} alt='Tales Rodrigues' />
      <p className='text-justify w-3/4 pt-6'>
        Aoba! Meu nome é Tales, tenho 21 anos e sou de Goiânia. Atuo como desenvolvedor Full Stack com foco em React e Node.
      </p>
    </section>
  )
}
