'use client'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import {
    RxGithubLogo,
    RxLinkedinLogo
} from 'react-icons/rx'

const Footer = () => {

    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start  z-[22]">
                        <div className='font-bold text-[16px] text-gradient'>Community</div>
                        <a href='https://www.youtube.com/@ruhulcreates' title={'Youtube'} target='_blank' className={`flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]`}>
                            <FaYoutube />
                            <span className='text-[15px] ml-[6px]'>Youtube</span>
                        </a>
                        <a href='https://github.com/ruhulrahman' title={'Github'} target='_blank' className={`flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]`}>
                            <RxGithubLogo />
                            <span className='text-[15px] ml-[6px]'>Github</span>
                        </a>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className='text-[15px] ml-[6px]'>Discord</span>
                        </p> */}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[22]">
                        <div className='font-bold text-[16px] text-gradient'>Social Media</div>

                        <a href='https://www.facebook.com/ruhulcreates/' title={'Facebook'} target='_blank' className={`flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]`}>
                            <FaFacebook />
                            <span className='text-[15px] ml-[6px]'>Facebook</span>
                        </a>

                        {/* <a href='https://www.linkedin.com/in/ruhul14' title={'LinkedIn'} target='_blank' className={`flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]`}>
                            <RxInstagramLogo />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </a> */}
                        <a href='https://www.linkedin.com/in/ruhul14' title={'LinkedIn'} target='_blank' className={`flex flex-row items-center my-[15px] cursor-pointer hover:text-[#b49bff]`}>
                            <RxLinkedinLogo />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </a>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className='text-[15px] ml-[6px]'>Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className='text-[15px] ml-[6px]'>Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className='text-[15px] ml-[6px]'>LinkedIn</span>
                        </p> */}
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[22]">
                        <div className='font-bold text-[16px] text-gradient'>About</div>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className='text-[15px] ml-[6px]'>Become Sponsor</span>
                        </p>
                        {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className='text-[15px] ml-[6px]'>Learning about technology</span>
                        </p> */}
                        <p className="flex flex-row items-center my-[15px]">
                            <span className='text-[15px] ml-[6px]'>ruhulcsesu@gmail.com</span>
                        </p>
                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Ruhul Software Corporation 2024. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer