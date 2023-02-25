import Link from 'next/link'
import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

interface IHeaderProps {
  english: boolean,
  setEnglish: (func: (english: boolean) => boolean) => void
}

export default function Header({ english, setEnglish }: IHeaderProps) {
  return (
    <header className='flex justify-between text-3xl py-3 px-5 items-center bg-black text-white'>
      <div className='flex w-1/3 justify-between'>
        <Link href="https://github.com/talesrodriguesDEV" target='_blank' rel="noreferrer"><FaGithub /></Link>
        <Link href="mailto:tales00001@gmail.com"><FaEnvelope /></Link>
        <Link href="https://www.linkedin.com/in/talesrodriguesdev/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
      </div>
      <span onClick={() => { setEnglish(previous => !previous) }}>{english ? '🇧🇷' : '🇺🇸'}</span>
    </header>
  )
}
