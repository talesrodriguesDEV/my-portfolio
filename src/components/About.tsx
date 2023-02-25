import Image from 'next/image'
import React from 'react'
import me from '../images/me.jpeg'
import Stacks from './Stacks'

export default function About({ english }: { english: boolean }) {
  const EN = 'Hey! My name is Tales, I\'m 21 years old and I\'m from Brazil. I\'m a Full Stack developer focusing on React and Node.'
  const PT = 'Aoba! Meu nome é Tales, tenho 21 anos e sou de Goiânia. Atuo como desenvolvedor Full Stack com foco em React e Node.'

  return (
    <section className='flex flex-col items-center'>
      <Image className='rounded-full my-24' width={200} height={200} src={me} alt='Tales Rodrigues' />
      <p className='text-justify px-8'>{english ? EN : PT}</p>
      <Stacks />
    </section>
  )
}
