import React from 'react'
import { FiGithub } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCodepen } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { BsCloudMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";

import { useDispatch, useSelector } from 'react-redux';
import { themeChange } from '../../redux/themeSlice';

const ProfileInfo = () => {
    let themeStatus = useSelector(state => state.theme.theme)

    console.log(themeStatus);

    const social = [
        {
            icon: <HiOutlineLocationMarker />,
            text: "Türkiye, Gebze",
            url: "#",
            hover: false
        }, {
            icon: <MdOutlinePhoneAndroid />,
            text: "+90 537 337 9376",
            url: "tel:+905373379376",
            hover: true
        }
        , {
            icon: <FaLinkedinIn />,
            text: "recepkececi",
            url: "https://www.linkedin.com/in/recepkececi/",
            hover: true
        }, {
            icon: <FiGithub />,
            text: "kececirecep",
            url: "https://github.com/kececirecep/",
            hover: true
        }, {
            icon: <FaCodepen />,
            text: "kececi",
            url: "https://codepen.io/kececi",
            hover: true
        }
    ]

    const pdfLink = ""


    let dispacth = useDispatch()

    const handleClick = () => {
        dispacth(themeChange())
    }

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white flex flex-col lg:flex-row items-center py-10 px-5 rounded-lg mb-5 relative'>
            <div className='p-2 bg-[#34495e] text-gray-100 dark:bg-[#34495e] rounded-lg flex items-center justify-center dark:text-yellow-200 absolute right-6 top-6'>
                <button onClick={() => handleClick()}>{themeStatus === "dark" ? <IoMdSunny size="32px" /> : <BsCloudMoon size="32px" />}</button>
            </div>
            <div className='w-full flex justify-center lg:mb-0 mb-8'>
                <img src="/images/profile.jpeg" alt="avatar" className='h-52 w-52 rounded-full' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>Recep Kececi</h2>
                    <span className='text-gray-500 dark:text-white'>Frontend Developer</span>
                </div>
                <span className='text-sm text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, harum animi! Distinctio, repellendus soluta, consequuntur aspernatur illum quae beatae reiciendis officiis cumque animi voluptates! Porro, nemo. Maxime aliquam et aspernatur!
                </span>
                <div className="flex flex-col md:flex-row gap-4 ">
                    {
                        social.map((item, index) => {
                            return (
                                <Link to={item.url} key={index} target={`${item.hover ? "_blank" : "_self"}`} className={`flex items-center gap-2 text-sm text-gray-500 dark:text-white ${item.hover ? "hover:underline" : "cursor-default"}`}>
                                    {item.icon}
                                    {item.text}
                                </Link>
                            )
                        })
                    }

                </div>
                <div>
                    <Link to={pdfLink} target='_blank' className='inline-block border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:text-black text-[14px] dark:text-white text-gray-700'>
                        <div className='flex items-center gap-2'>
                            <FaDownload /> Download CV
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo