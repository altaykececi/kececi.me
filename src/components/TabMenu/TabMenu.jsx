import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

import { FaReact } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";


const TabMenu = () => {

  const projects = [
    {
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65b40524d9ab560008fc41ff/screenshot_2024-01-26-19-17-51-0000.webp&fit=cover&h=500&w=800",
      title: "Resao Crative Theme",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum çok kapsamlı, full responsive bir react projesi.",
      tags: ["react", "tailwindcss"],
      url: "https://resao.netlify.app"
    },
    {
      image: "/images/project1.jpg",
      title: "Project 2",
      desc: "Deneme projesi test aşamasında şu anda. React kullanılıyor",
      tags: ["react", "typescript", "tailwindcss"],
      url: "#"
    },
    {
      image: "/images/project1.jpg",
      title: "Project 2",
      desc: "Deneme projesi test aşamasında şu anda. React kullanılıyor",
      tags: ["s", "css", "tailwindcss"],
      url: "#"
    },
    {
      image: "/images/project1.jpg",
      title: "Project 2",
      desc: "Deneme projesi test aşamasında şu anda. React kullanılıyor",
      tags: ["a", "typescript", "wordpress"],
      url: "#"
    }
  ]

  const [activeButton, setActiveButton] = useState("react");


  const reactClick = (name) => {
    setActiveButton(name);
  }

  const counterCategory = (name) => {
    const categoryLength = projects.filter(item => item.tags.includes(name))
    return categoryLength.length
  }


  return (
    <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 flex flex-col lg:flex-row items-center py-10 px-5 rounded-lg'>

      <div>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold mb-2 dark:text-white'>Projeler</h1>
          <p className='text-sm text-gray-500 dark:text-white'>Farklı alanlardaki çalışmalarımı görüntüleyebilirsiniz.</p>
        </div>
        <div className='mb-8 gap-4 flex uppercase flex-col sm:flex-row'>
          <button
            onClick={(e) => reactClick("react")}
            className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-white ${activeButton === "react" ? "active" : ""}`}><FaReact size={"25px"} /> React ({counterCategory("react")})</button>
          <button onClick={(e) => reactClick("css")} className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-white border dark:border-[#34495E] ${activeButton === "css" ? "active" : ""}`}><RiCss3Line size={"22px"} />Css ({counterCategory("css")})</button>
          <button onClick={(e) => reactClick("wordpress")} className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-white border dark:border-[#34495E] ${activeButton === "wordpress" ? "active" : ""}`}><FaWordpressSimple size={"22px"} />Wordpress ({counterCategory("wordpress")})</button>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6 grid-cols-1 '>
          {
            projects
              .filter((project) => project.tags.includes(activeButton))
              .map((item, index) => {
                return (
                  <ProjectCard
                    key={index}
                    img={item.image}
                    title={item.title}
                    desc={item.desc}
                    tags={item.tags}
                    url={item.url}
                  />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default TabMenu