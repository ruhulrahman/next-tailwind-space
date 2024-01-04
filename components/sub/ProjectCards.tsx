import Image from 'next/image'
import { title } from 'process'
import React from 'react'

interface Props {
    src: string
    title: string
    description: string
}

const ProjectCards = ({ src, title, description } : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg border border-[#2A0E61]'>
      <Image
        src={src}
        height={1000}
        width={1000}
        alt={title}
        className='w-full object-contain'
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className='mt-2 text-gray-200ay'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCards