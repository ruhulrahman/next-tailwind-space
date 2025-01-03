'use client'

import { Backend_skill, Databases, Editor_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants';
import SkillsDataProvider from '../sub/SkillsDataProvider';
import SkillText from '../sub/SkillText';

const Skills = () => {
  return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 transform scale-[0.9] pb-80'>

      <SkillText />



      {/* <motion.div
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'>
        I am a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my skills
      </motion.div> */}
      {/* <motion.div
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
        Learn More
      </motion.div> */}

      {/* <Tooltip color='warning' content="I am a tooltip">
        <Button className='bg-[#57368C] border border-[#7042f861] rounded-full p-[5px] text-white'>Hover me</Button>
      </Tooltip> */}

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Skill_data.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Frontend_skill.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Backend_skill.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Databases.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Full_stack.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end">
        {
          Other_skill  && Other_skill.length > 0 && Other_skill.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {
          Editor_skill.map((item, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <SkillsDataProvider
                src={item.Image}
                width={item.width}
                height={item.height}
                index={index}
                title={item.skill_name}
              />
              <span className='text-white'>{item.skill_name}</span>
            </div>
          ))
        }
      </div>

      <div className="w-full h-full absolute">
        <div className='w-full h-full z-[10] opacity-30 absolute flex items-center bg-cover'>
          <video
            className="w-full h-auto"
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills