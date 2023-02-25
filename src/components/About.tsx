import React from 'react'

import Image from 'next/image'

import me from '../images/me.jpeg'
import react from '../images/stacks/react.png'
import node from '../images/stacks/node.png'

import { IDefaultComponentProps } from '@/interfaces'

export default function About({ english }: IDefaultComponentProps) {
  const EN = 'Hey! My name is Tales, I\'m 21 years old and I\'m from Brazil. I\'m a Full Stack developer focusing on React and Node.'
  const PT = 'Aoba! Meu nome é Tales, tenho 21 anos e sou de Goiânia. Atuo como desenvolvedor Full Stack com foco em React e Node.'

  return (
    <section className='flex flex-col items-center lg:justify-center lg:w-[480px]'>
      <Image className='rounded-full my-24' width={200} height={200} src={me} alt='Tales Rodrigues' />
      <p className='text-justify px-8'>{english ? EN : PT}</p>
      <div className='flex justify-between animate-spin-slow absolute mt-36 w-5/6 micro:w-4/5 sm:w-3/5 md:w-1/3 lg:-mt-20 xl:w-1/4 2xl:w-1/5'>
        <Image className='stack' alt='React' width={100} src={react} />
        <Image className='stack' alt='Node' width={100} src={node} />
      </div>
    </section>
  )
}
