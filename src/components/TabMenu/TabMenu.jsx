import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

import { FaReact } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";


import { motion } from "framer-motion";

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
      image: "https://i.imgur.com/WSxKlNL.png",
      title: "Hekto E-commerce Theme",
      desc: "React ve Tailwindcss kullanarak geliştirmiş olduğum e-commerce react uygulaması.",
      tags: ["react", "redux toolkit", "tailwindcss"],
      url: "https://hekto-creative.netlify.app"
    },
    {
      image: "https://i.imgur.com/BLyy1Zi.png",
      title: "Lawyer Landing Page",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss"],
      url: "https://lawyer-creative-page.netlify.app"
    },
    {
      image: "https://i.imgur.com/g45POw4.png",
      title: "Argencis Landing Page",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss", "landing page"],
      url: "https://argencis-creative.netlify.app"
    },
    {
      image: "https://i.imgur.com/HXxKCx1.png",
      title: "Creativo",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss", "creative page"],
      url: "https://design-creative.netlify.app"
    },
    {
      image: "https://i.imgur.com/MiuFtqF.png",
      title: "Banking Landing Page",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss", "landing page"],
      url: "https://banking-landing-page.netlify.app"
    },
    {
      image: "https://i.imgur.com/FQPgfu7.png",
      title: "Blog Template",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss", "blog"],
      url: "https://kececi-portfolio-blog.netlify.app"
    },
    {
      image: "https://i.imgur.com/K9qsBgM.png",
      title: "Youtube Video List",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-youtube.netlify.app"
    },
    {
      image: "https://i.imgur.com/GL1nqJN.png",
      title: "Todo App",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-todo.netlify.app"
    },
    {
      image: "https://i.imgur.com/l4VHgxh.png",
      title: "Portfolio",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum bir react projesi.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-portfolio-v2.netlify.app"
    },
    {
      image: "https://i.imgur.com/zuGTlR1.png",
      title: "Number Matching Game",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum numara eşleştirme oyunu.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-number-matching-game.netlify.app"
    },
    {
      image: "https://i.imgur.com/1dpkbu5.png",
      title: "Portfolio v2",
      desc: "React ve tailwindcss kullanarak geliştirmiş olduğum bir portfolio sitesi.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-number-matching-game.netlify.app"
    },
    {
      image: "https://i.imgur.com/Rv9NoFN.png",
      title: "Star Wars Yoda",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/BayjPEV"
    }, {
      image: "https://i.imgur.com/66diiiU.png",
      title: "Css Bear",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/GRgjydM"
    }, {
      image: "https://i.imgur.com/MtruVGF.png",
      title: "Pizza",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/oNggYoL"
    }, {
      image: "https://i.imgur.com/3lIGO6f.png",
      title: "Pokémon",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/rNaBxyo"
    }, {
      image: "https://i.imgur.com/eooxIqH.png",
      title: "Dondurma",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/aMYRvy"
    },
    {
      image: "https://i.imgur.com/pzHO7YF.png",
      title: "Kedi",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/yreJmQ"
    }, {
      image: "https://i.imgur.com/w0jzX4I.png",
      title: "Kutu",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/GeLpJJ?editors=0010"
    }, {
      image: "https://i.imgur.com/bVEcMBz.png",
      title: "Domuz",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/bZvJjz"
    }, {
      image: "https://i.imgur.com/WiTQ5GH.png",
      title: "Pokemon",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/wQPGbP"
    },
    {
      image: "https://i.imgur.com/H5JzrKk.png",
      title: "Login Page",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/rNxdGwO"
    }, {
      image: "https://i.imgur.com/ocECzLz.png",
      title: "Google Error Page",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/KEmjMg"
    },
    {
      image: "https://i.imgur.com/zPiCgky.png",
      title: "Menu",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/LavVzr"
    }, {
      image: "https://i.imgur.com/NV4nbF3.png",
      title: "Efektif Animasyon",
      desc: "Css Alıştırmaları",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/MWWxjMv"
    },
  ]
  const [activeButton, setActiveButton] = useState("react");


  const reactClick = (name) => {
    setActiveButton(name);
  }

  const counterCategory = (name) => {
    const categoryLength = projects.filter(item => item.tags.includes(name))
    return categoryLength.length
  }


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: 20, opacity: 0 }, // Yatay kaydırma (x)
    visible: {
      x: 0,
      opacity: 1
    }
  };


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

        <div className='pb-8 text-[#34495E] font-semibold'>
          {
            activeButton === "react" ?
              <p>React projelerimi içeren portföyümde, modern web geliştirme tekniklerini kullanarak oluşturduğum uygulamaları sergiliyorum. Her proje, benim teknik becerilerimi ve yaratıcılığımı yansıtmaktadır. Siz de bu projelerin hem kod yapısını hem tasarımını detaylıca inceleyebilirsiniz.</p>
              : <p>Yıllar önce, her gün küçük bir tasarım yaparak, CSS becerilerimi geliştirmek için bir hedef koymuştum. Bu süreçte, birçok farklı proje üzerinde çalıştım ve her biri benim için önemli bir öğrenme deneyimi oldu. İşte onlardan bazıları.</p>
          }
        </div>

        <div
          className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 gap-y-6 grid-cols-1 items-stretch'>
          {
            projects
              .filter((project) => project.tags.includes(activeButton))
              .map((item, index) => {
                return (
                  <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                  >
                    <ProjectCard
                      key={index}
                      img={item.image}
                      title={item.title}
                      desc={item.desc}
                      tags={item.tags}
                      url={item.url}
                    />
                  </motion.div>
                )
              })
          }
        </div>
      </div>
    </div>
  )
}

export default TabMenu