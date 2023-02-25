import {reactObj, nodeObj} from '@/utils/stacks'
import Image from 'next/image'
import React from 'react'

export default function Stacks() {
  return (
    <div className='flex justify-between animate-spin-slow absolute mt-36 lg:-mt-20 w-full micro:w-4/5 sm:w-3/5 md:w-1/3 xl:w-1/4 2xl:w-1/5'>
      <Image className='animate-inverse-spin-slow rotate-45' alt={reactObj.name} width={100} src={reactObj.logo} />
      <Image className='animate-inverse-spin-slow rotate-45' alt={nodeObj.name} width={100} src={nodeObj.logo} />
    </div>
  )
}
