import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";

const Timeline = () => {
    const data = [
        {
            icon: <FiBriefcase />,
            title: "Software Engineer",
            company: "Acme Inc.",
            time: "2019 ",
            desc: "Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        }, {
            icon: <FiBriefcase />,
            title: "Software Engineer",
            company: "Acme Inc.",
            time: "2019 ",
            desc: "Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            icon: <FiBriefcase />,
            title: "Software Engineer",
            company: "Acme Inc.",
            time: "2019 ",
            desc: "Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            icon: <FiBriefcase />,
            title: "Software Engineer",
            company: "Acme Inc.",
            time: "2019 ",
            desc: "Developed and maintained complex web applications using React, Node.js, and various other technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        }
    ]

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white mt-8 rounded p-4 pt-4'>
            <h2 className='text-xl font-medium syne mb-4 flex items-center gap-2'><IoBriefcaseOutline size={20} /> Deneyim</h2>
            {
                data.map((item, index) => {
                    return (
                        <div className='relative ' key={index}>
                            <div className='absolute h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-3 top-0 transform -translate-x-1/2'></div>
                            <div>
                                <div className='flex items-center'>
                                    <span className='absolute left-0 top-1 w-6 h-6 bg-blue-500 dark:bg-blue-400  flex items-center justify-center text-white rounded-full p-1 text-xl'>{item.icon}</span>
                                    <div className='pl-8 comfor'>
                                        <h3 class="text-gray-900 dark:text-gray-100 font-medium text-lg syne" >{item.title}</h3>
                                        <p class="text-gray-600 dark:text-gray-400 text-sm" >{item.company} | {item.time}</p>
                                        <p class="text-gray-600 dark:text-gray-400 mt-2 mb-6" >{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Timeline