import Image from 'next/image'
import React, { useState } from 'react'
import projects from '@/utils/projects'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { BsFillSquareFill, BsSquare, BsCodeSlash } from 'react-icons/bs'
import Link from 'next/link'

export default function Projects() {
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

  return (
    <section className='min-h-[550px] flex flex-col items-center justify-around px-8'>
        <h2>{projects[currentProjectIndex].title}</h2>
        <Image src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].title} />
        <p className='text-justify'>{projects[currentProjectIndex].description}</p>
        <Link className='flex items-center w-1/3 justify-around' href={projects[currentProjectIndex].code} target='_blank'>See Code<BsCodeSlash /></Link>
      <div className='absolute left-2 translate-y-10' onClick={previousProject}>
        <AiOutlineLeft />
      </div>
      <div className='absolute right-2 translate-y-10' onClick={nextProject}>
        <AiOutlineRight />
      </div>
      <div className='flex justify-between w-1/4'>
        {projects.map((_project, index) => {
          if (index === currentProjectIndex) return <BsFillSquareFill key={index} onClick={() => setCurrentProjectIndex(index)} />
          return <BsSquare key={index} onClick={() => setCurrentProjectIndex(index)} />
        })}
      </div>
    </section>
  )
}
