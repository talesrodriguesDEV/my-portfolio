import Image from 'next/image'
import React, { useState } from 'react'
import projects from '@/utils/projects'
import { BsFillSquareFill, BsSquare, BsCodeSlash, BsCursorFill } from 'react-icons/bs'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
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
    <section className='flex flex-col items-center px-8 mt-20 justify-center'>
      <div className='min-h-[550px] flex flex-col items-center bg-black text-white p-4 rounded-lg'>
        <h2 className='text-2xl'>{projects[currentProjectIndex].title}</h2>
        <Image className='mb-6 mt-1 rounded-lg' src={projects[currentProjectIndex].image} alt={projects[currentProjectIndex].title} />
        <p className='text-justify'>{projects[currentProjectIndex].description}</p>
        <Link className='w-1/3 flex justify-around items-center mt-6 border rounded-lg p-1' href={projects[currentProjectIndex].code} target='_blank'>See Code<BsCodeSlash /></Link>
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
