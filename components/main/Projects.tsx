'use client'
import React from 'react'
import ProjectCards from '../sub/ProjectCards'

const Projects = () => {
  return (
    <div id='projects' className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCards
          src='/NextWebsite.png'
          title='Modern Next.js Portfolio'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        />
        <ProjectCards
          src='/CardImage.png'
          title='Interactive Website Cards'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        />
        <ProjectCards
          src='/SpaceWebsite.png'
          title='Space Theme Website'
          description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        />
      </div>
    </div>
  )
}

export default Projects