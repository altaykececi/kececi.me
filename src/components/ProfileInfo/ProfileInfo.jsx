import React from 'react'
import { FiGithub } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaCodepen, FaEye } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { BsBasket, BsCloudMoon } from "react-icons/bs";
import { IoMdSunny } from "react-icons/io";
import { FaLanguage } from "react-icons/fa6";


import { useDispatch, useSelector } from 'react-redux';
import { themeChange } from '../../redux/themeSlice';
import { languageChange, getLocaleStorageLanguage } from '../../redux/languageSlice';


import { IoLanguageSharp } from "react-icons/io5";

const ProfileInfo = () => {
    let themeStatus = useSelector(state => state.theme.theme)
    let language = useSelector(state => state.language.language)


    const dispatch = useDispatch();


    const social = [
        {
            icon: <HiOutlineLocationMarker />,
            text: language === 'tr' ? "Türkiye, Gebze" : "Turkey, Gebze",
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



    const handleClick = () => {
        dispatch(themeChange())
    }

    const handleClickLanguage = () => {
        const newLanguage = language === 'tr' ? 'en' : 'tr';
        dispatch(languageChange(newLanguage));
    };

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white flex flex-col lg:flex-row items-center py-10 px-5 rounded-lg mb-5 relative'>
            <div className='flex items-center'>
                <div className='p-2 bg-[#34495e] text-gray-100 dark:bg-[#34495e] rounded-lg flex items-center justify-center gap-4 dark:text-yellow-200 absolute right-6 top-6'>
                    <button onClick={() => handleClick()}>{themeStatus === "dark" ? <IoMdSunny size="32px" /> : <BsCloudMoon size="32px" />}</button>
                </div>
                <div className='p-2  text-[#34495e] dark:bg-[#34495e00] rounded-lg flex items-center justify-center gap-4 dark:text-[#c5c7d3] absolute   md:right-24 top-6'>
                    <button onClick={() => handleClickLanguage()}>{language === "tr" ? <span className='flex items-center gap-2'><FaLanguage size="32px" /> TR</span> : <span className='flex items-center gap-2'><FaLanguage size="32px" /> EN</span>}</button>
                </div>

            </div>
            <div className='w-full flex justify-center lg:mb-0 mb-8'>
                <img src="/images/profile.jpeg" alt="avatar" className='h-52 w-52 rounded-full' />
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-2xl font-bold'>Recep Kececi</h2>
                    <span className='text-gray-500 dark:text-white'>{language === "tr" ? "Ön Uç Geliştirici" : "Frontend Developer"}</span>
                </div>
                <span className='text-sm text-gray-500 dark:text-white'>
                    {language === 'tr' ?
                        "Merhaba, ben Recep Kececi. Yazılım geliştirme ve tasarım konularında çalışmaktayım. React ve CSS gibi teknolojilere olan hakimiyetimle web uygulamaları geliştiriyorum. Yenilikçi projelerde çalışarak deneyimimi ve yeteneklerimi geliştirmeyi hedefliyorum. İşbirliği ruhuyla takımımı desteklemek ve kullanıcı odaklı çözümler sunmak için buradayım."
                        :
                        "Hello, I am Recep Kececi. I work in the fields of software development and design. With my proficiency in technologies such as React and CSS, I develop web applications. I aim to enhance my experience and skills by working on innovative projects. I am here to support my team with a spirit of collaboration and to provide user-centered solutions."
                    }
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
                    <Link to="/cv-details" className='inline-block border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:text-black text-[14px] dark:text-white text-gray-700'>
                        <div className='flex items-center gap-2'>
                            <FaEye /> {language === "tr" ? "Cv Detay" : "Cv Details"}
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo