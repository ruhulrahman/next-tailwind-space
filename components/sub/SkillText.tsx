'use client'

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[4px] border-[#7042f88b] opacity-[0.9]'>
                <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[19px]'>Making app with modern technologies</h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className='text-[40px] font-semibold mt-[10px] text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                My Skills
            </motion.div>

            <motion.div
            variants={slideInFromRight(0.5)}
            className='text-[20px] cursive text-gray-200 mb-10 mt-[10px]'>
                Never miss a task deadline and idea
            </motion.div>
        </div>
    )
}

export default SkillText