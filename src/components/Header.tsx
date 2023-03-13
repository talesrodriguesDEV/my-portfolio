import React from 'react'

import { IHeaderProps } from '@/interfaces'

import Link from 'next/link'

import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Header({ english, setEnglish }: IHeaderProps) {
  return (
    <header className='flex lg:flex-col lg:py-10 justify-between text-3xl py-3 px-5 items-center bg-black text-white'>
      <div className='flex lg:flex-col lg:h-1/3 lg:items-center w-1/3 max-w-[220px] justify-between'>
        <Link href="https://github.com/talesrodriguesDEV" target='_blank' rel="noreferrer">
          <FaGithub />
        </Link>
        <Link href="mailto:tales00001@gmail.com">
          <FaEnvelope />
        </Link>
        <Link href="https://www.linkedin.com/in/talesrodriguesdev/" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </Link>
      </div>
      <span className='cursor-pointer' onClick={() => { setEnglish(previous => !previous) }}>{english ? '🇧🇷' : '🇺🇸'}</span>
    </header>
  )
}
