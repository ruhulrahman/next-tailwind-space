'use client'

import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center px-20 mt-40 w-full z-[20]'>
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[4px] border-[#7042f88b] opacity-[0.9]'>
                    <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
                </motion.div>


                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={slideInFromRight(0.8)}
                    className='w-full h-full flex justify-center items-center'>
                    <Image
                        src='/man/ruhul-portrait.png'
                        height={380}
                        width={380}
                        alt='main icon'
                    />
                </motion.div>
                {/* <div id='projects' className='flex flex-col items-center justify-center py-20'>
                    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                        <div className='relative overflow-hidden rounded-lg border border-[#2A0E61]'>
                            <Image
                                src='/man/ruhul-portrait.png'
                                height={380}
                                width={380}
                                alt='main icon'
                                className='w-full object-contain'
                            />
                        </div>
                    </div>
                </div> */}

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-[-40px] text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                    <span>
                        Providing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
                        project experience
                    </span>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'>
                    <p className='font-semibold text-[25px]'>Hi, I am <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>Ruhul Amin</span>.</p>
                    <p className='text-justify'>I am a Full Stack Software Engineer with 7+ years of experiences specializing in backend technologies like PHP, Laravel, Java, Spring Boot, Node.js, and Express.js, as well as frontend frameworks including Vue.js, React.js, Next.js, Nuxt.js, Quasar Framework and Bootstrap, Tailwind CSS for responsive UI design. With a proven track record of delivering robust solutions for government, educational, financial, and HR projects, I combine technical expertise with a passion for clean, scalable code. Whether crafting enterprise systems or intuitive user experiences, I ensure every project achieves the best results.
                        Let’s build something impactful together.</p>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'>
                    {/* My Skills */}
                    <a href="#skills" className='cursor-pointer'>My Skills</a>
                </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-full h-full flex justify-center items-center'>
                <Image
                    src='/mainIconsdark.svg'
                    height={650}
                    width={650}
                    alt='main icon'
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent