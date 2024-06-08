import React from 'react'
import { Link } from 'react-router-dom' 
import { FiPhone, FiMail, FiLink, FiGithub } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";


const UserInfo = () => {
    return (
        <div className='container max-w-[1200px] mx-auto rounded'>
            <div className='text-center syne md:py-2'>
                <h2 className='text-4xl font-light dark:text-white'>Recep Kececi</h2>
                <h6 className='text-lg font-light text-gray-500 dark:text-gray-300'>Frontend Developer</h6>
            </div>
            <div className='flex flex-col lg:flex-row items-center justify-center md:gap-24 py-10 px-5 rounded-lg mb-5 relative'>
                <div className='flex justify-center lg:mb-0 mb-8 '>
                    <img src="/images/profile.jpeg" alt="avatar" className='h-56 w-56 rounded-full' />
                </div>
                <div className='flex flex-col gap-3 rubik  '>
                    <h5 className='text-xl  dark:text-white'>Contact:</h5>
                    <div>
                        <span className='flex items-center text-lg gap-2 text-gray-600 dark:text-white'><FiMail />kececirecep@outlook.com</span>
                        <span className='flex items-center text-lg gap-2 text-gray-600 dark:text-white'><FiPhone />+90 537 337 9376</span>
                        <span className='flex items-center text-lg gap-2 text-gray-600 dark:text-white'><TbCurrentLocation />Gebze/Kocaeli</span>
                        <Link to="https://tr.linkedin.com/in/recepkececi" target='_blank' className='flex items-center text-lg gap-2 text-gray-600 dark:text-white'><FiLink />https://tr.linkedin.com/in/recepkececi</Link>
                        <Link to="https://github.com/kececirecep" target='_blank' className='flex items-center text-lg gap-2 text-gray-600 dark:text-white'><FiGithub />kececirecep</Link>
                    </div> 
                    <div className="flex flex-col md:flex-row gap-4 ">


                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default UserInfo