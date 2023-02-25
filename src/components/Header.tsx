import Link from 'next/link'
import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='flex justify-between text-3xl p-3 items-center bg-black text-white'>
      <div className='flex w-1/3 justify-between'>
        <Link href="https://github.com/talesrodriguesDEV" target='_blank' rel="noreferrer"><FaGithub /></Link>
        <Link href="mailto:tales00001@gmail.com"><FaEnvelope /></Link>
        <Link href="https://www.linkedin.com/in/talesrodriguesdev/" target='_blank' rel="noreferrer"><FaLinkedin /></Link>
      </div>
      <span>🇧🇷</span>
    </header>
  )
}
