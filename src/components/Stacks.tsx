import stacks from '@/utils/stacks'
import Image from 'next/image'
import React from 'react'

export default function Stacks() {
  return (
    <section>
      <h2>Stacks</h2>
      {stacks.map(({name, logo}, index) => <Image key={index} width={100} height={100} alt={name} src={logo} />)}
    </section>
  )
}
