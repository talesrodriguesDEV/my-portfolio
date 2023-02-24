import certificates from '@/utils/certificates'
import React from 'react'

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {certificates.map(({ title, link }, index) => (
          <li key={index}>
            <a href={link} target='_blank' rel="noreferrer">{title}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
