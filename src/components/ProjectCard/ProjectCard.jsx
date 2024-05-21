import React from 'react'
import { Link } from 'react-router-dom'

import { motion } from "framer-motion";


const ProjectCard = (props) => {
  return (
    <motion.div
    
     className='shadow rounded-2xl overflow-hidden dark:border dark:border-gray-500'>
      <Link to={props.url} target='_blank'>
        <div className='w-full h-[276px]'>
          <img src={props.img} className='w-full h-[276px] object-cover md:object-cover' alt="" />
        </div>
      </Link>
      <div className='p-4'>
        <Link to={props.url} target='_blank' className='text-lg font-semibold mb-2 dark:text-gray-300'>{props.title}</Link>
        <p className='text-gray-500 text-sm dark:text-gray-400'>{props.desc}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {
            props.tags.map((item, index) => {
              return (
                <span key={index} className='bg-[#ececec] text-[#333333] dark:bg-gray-400 font-semibold rounded-xl text-[12px] px-3 py-0.5 capitalize'>{item}</span>
              )
            })
          }
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard