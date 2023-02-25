import React from 'react'

import Link from 'next/link'

import { IDefaultComponentProps } from '@/interfaces'

import { BsCursorFill } from 'react-icons/bs'

export default function Footer({ english }: IDefaultComponentProps) {
  const projectsLink = english ? 'More projects' : 'Mais projetos'

  return (
    <footer className='flex justify-center bg-black text-white p-2 mt-8 lg:mt-0 lg:p-0 lg:w-[80px]'>
      <Link
        className='w-1/3 max-w-[125px] flex lg:flex-col lg:justify-center lg:text-center lg:px-2 justify-around items-center'
        href='https://github.com/talesrodriguesDEV?tab=repositories'
        target='_blank'
      >
        {projectsLink}
        <BsCursorFill />
      </Link>
    </footer>
  )
}
