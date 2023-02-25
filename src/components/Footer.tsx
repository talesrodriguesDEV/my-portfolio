import Link from 'next/link'
import React from 'react'
import { BsCursorFill } from 'react-icons/bs'

export default function Footer({ english }: { english: boolean }) {
  const EN = 'More projects'
  const PT = 'Mais projetos'

  return (
    <footer className='flex justify-center bg-black text-white p-2 mt-8'>
      <Link className='w-1/3 flex justify-around items-center' href='https://github.com/talesrodriguesDEV?tab=repositories' target='_blank'>{english ? EN : PT}<BsCursorFill /></Link>
    </footer>
  )
}
