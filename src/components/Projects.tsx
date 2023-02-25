import Image from 'next/image'
import React, { useState } from 'react'
import { projetos, projects } from '@/utils/projects'
import { BsFillSquareFill, BsSquare, BsCodeSlash, BsCursorFill } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'

export default function Projects({ english }: { english: boolean }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const nextProject = () => {
    const isLastProject = currentProjectIndex === projects.length - 1

    if (isLastProject) setCurrentProjectIndex(0)
    else setCurrentProjectIndex(previousIndex => previousIndex + 1)
  }

  const previousProject = () => {
    const isFirstProject = currentProjectIndex === 0

    if (isFirstProject) setCurrentProjectIndex(projects.length - 1)
    else setCurrentProjectIndex(previousIndex => previousIndex - 1)
  }

  const linkEN = 'See code'
  const linkPT = 'Ver código'

  const projs = english ? projects : projetos

  return (
    <section className='flex flex-col items-center px-8 mt-8 justify-center'>
      <div className='min-h-[510px] flex flex-col items-center bg-black text-white px-4 py-1 rounded-lg'>
        <h2 className='text-2xl'>{projs[currentProjectIndex].title}</h2>
        <Image className='mb-6 mt-1 rounded-lg' src={projs[currentProjectIndex].image} alt={projs[currentProjectIndex].title} />
        <p className='text-justify'>{projs[currentProjectIndex].description}</p>
        <Link className='w-2/5 flex justify-around items-center mt-6 border rounded-md p-2 bg-[#111111]' href={projs[currentProjectIndex].code} target='_blank'>{english ? linkEN : linkPT}<BsCodeSlash /></Link>
      </div>
      <div className='flex justify-between w-1/4 mt-2'>
        {projects.map((_project, index) => {
          if (index === currentProjectIndex) return <BsFillSquareFill key={index} onClick={() => setCurrentProjectIndex(index)} />
          return <BsSquare key={index} onClick={() => setCurrentProjectIndex(index)} />
        })}
      </div>
      <div className='absolute left-0' onClick={previousProject}>
        <FaChevronLeft className='text-3xl' />
      </div>
      <div className='absolute right-0' onClick={nextProject}>
        <FaChevronRight className='text-3xl' />
      </div>
    </section>
  )
}
