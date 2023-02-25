import {reactObj, nodeObj} from '@/utils/stacks'
import Image from 'next/image'
import React from 'react'

export default function Stacks() {
  return (
    <div className='flex justify-between animate-spin-slow absolute mt-36 w-full'>
      <Image className='animate-inverse-spin-slow rotate-45' alt={reactObj.name} width={100} src={reactObj.logo} />
      <Image className='animate-inverse-spin-slow rotate-45' alt={nodeObj.name} width={100} src={nodeObj.logo} />
    </div>
  )
}
