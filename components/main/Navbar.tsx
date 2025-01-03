import { Socials } from '@/constants'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                src='/NavLogo.png'
                alt='Logo'
                width={70}
                height={70}
                className='cursor-pointer animate-spin hover:animate-pulse'
                />
                <span className="font-bold ml-[10px] hidden md:block text-gray-300">Portfolio of Ruhul Amin</span>
            </a>

            <div className="h-full w-[500px] flex flex-row items-center justify-between md:mr-20">
                <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-300">
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>
                </div>
            </div>

            <div className="flex md:flex-wrap md:gap-5 sm:gap-3">
                {
                    Socials.map(item => (
                        <a href={item.link} key={item.name} title={item.name} target='_blank' className={`bg-[#57368C] border border-[#7042f861] rounded-full p-[5px]`}>
                            <Image
                            src={item.src}
                            alt={item.name}
                            key={item.name}
                            width={24}
                            height={24}
                        />
                        </a>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Navbar