import Link from 'next/link'
import React from 'react'
import { BsCursorFill } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='flex justify-center bg-black text-white p-2 mt-6'>
      <Link className='w-1/3 flex justify-around items-center' href='https://github.com/talesrodriguesDEV?tab=repositories' target='_blank'>Mais projetos <BsCursorFill /></Link>
    </footer>
  )
}
