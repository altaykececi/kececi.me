import React from 'react'
import UserInfo from '../components/Cv/UserInfo/UserInfo'
import Skills from '../components/Cv/Skills/Skills'
import TimelineCompany from '../components/Cv/Timeline/TimelineCompany'
import TimelineEducation from '../components/Cv/Timeline/TimelineEducation'

import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from 'react-router-dom'


const CvDetail = () => {


    return (
        <div className='mt-12'>
            <div className='ml-12 inline-block'>
                <Link to="/" className='cursor-pointer text-gray-600 dark:text-white '><BsArrowLeftCircle size={32} /></Link>
            </div>
            <UserInfo />
            <Skills />
            <TimelineCompany />
            <TimelineEducation />
        </div>
    )
}

export default CvDetail