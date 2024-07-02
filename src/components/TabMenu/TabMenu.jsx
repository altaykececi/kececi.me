import React, { useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'

import { FaReact } from "react-icons/fa";
import { RiCss3Line } from "react-icons/ri";
import { FaWordpressSimple } from "react-icons/fa";


import { motion } from "framer-motion";
import { useSelector } from 'react-redux';
import { languageChange } from '../../redux/languageSlice';

const TabMenu = () => {

  let language = useSelector(state => state.language.language)

  const projects = [
    {
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65b40524d9ab560008fc41ff/screenshot_2024-01-26-19-17-51-0000.webp&fit=cover&h=500&w=800",
      title: "Resao Professional Crative Theme",
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum çok kapsamlı, full responsive bir react projesi." : "A very comprehensive, fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://resao.netlify.app",
      githubUrl: "https://github.com/kececirecep/resao",
    },
    {
      image: "https://i.imgur.com/WSxKlNL.png",
      title: "Hekto E-commerce Theme", 
      desc: language === "tr" ? "React ve Tailwindcss kullanarak geliştirmiş olduğum e-commerce react uygulaması." : "E-commerce React application I developed using React and Tailwindcss.",
      tags: ["react", "redux toolkit", "tailwindcss"],
      url: "https://hekto-creative.netlify.app",
      githubUrl: "https://github.com/kececirecep/hekto-ecommerce",
    },
    {
      image: "https://i.imgur.com/BLyy1Zi.png",
      title: "Lawyer Landing Page", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://lawyer-creative-page.netlify.app",
      githubUrl: "https://github.com/kececirecep/Lawyer-Landing-Page",
    },
    {
      image: "https://i.imgur.com/g45POw4.png",
      title: "Argencis Landing Page", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss", "landing page"],
      url: "https://argencis-creative.netlify.app",
      githubUrl: "https://github.com/kececirecep/argencis-creative-landing",
    },
    {
      image: "https://i.imgur.com/HXxKCx1.png",
      title: "Creativo", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss", "creative page"],
      url: "https://design-creative.netlify.app",
      githubUrl: "https://github.com/kececirecep/Creative",
    },
    {
      image: "https://i.imgur.com/MiuFtqF.png",
      title: "Banking Landing Page",
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss", "landing page"],
      url: "https://banking-landing-page.netlify.app",
      githubUrl: "https://github.com/kececirecep/Banking-Website-Landing-Page",
    },
    {
      image: "https://i.imgur.com/FQPgfu7.png",
      title: "Blog Template",
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss", "blog"],
      url: "https://kececi-portfolio-blog.netlify.app",
      githubUrl: "https://github.com/kececirecep/blogPortfoliio",
    },
    {
      image: "https://i.imgur.com/K9qsBgM.png",
      title: "Youtube Video List",
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-youtube.netlify.app",
      githubUrl: "https://github.com/kececirecep/youtube",
    },
    {
      image: "https://i.imgur.com/GL1nqJN.png",
      title: "Todo App",
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum full responsive bir react projesi." : "It is a fully responsive react project that I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-todo.netlify.app",
      githubUrl: "https://github.com/kececirecep/todo",
    },
    {
      image: "https://i.imgur.com/l4VHgxh.png",
      title: "Portfolio", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum bir react projesi." : "A react project I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-portfolio-v2.netlify.app",
      githubUrl: "https://github.com/kececirecep/portfolio-one",
    },
    {
      image: "https://i.imgur.com/zuGTlR1.png",
      title: "Number Matching Game", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum numara eşleştirme oyunu." : "Number matching game I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-number-matching-game.netlify.app",
      githubUrl: "https://github.com/kececirecep/number-matching-game",
    },
    {
      image: "https://i.imgur.com/1dpkbu5.png",
      title: "Portfolio v2", 
      desc: language === "tr" ? "React ve tailwindcss kullanarak geliştirmiş olduğum bir portfolio sitesi." : "A portfolio site I developed using React and tailwindcss.",
      tags: ["react", "tailwindcss"],
      url: "https://kececi-number-matching-game.netlify.app",
      githubUrl: "https://github.com/kececirecep/portfolio-theme",
    },
    {
      image: "https://i.imgur.com/Rv9NoFN.png",
      title: "Star Wars Yoda", 
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/BayjPEV",
      githubUrl: "https://codepen.io/kececi/pen/BayjPEV"
    }, {
      image: "https://i.imgur.com/66diiiU.png",
      title: "Css Bear",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/GRgjydM",
      githubUrl: "https://codepen.io/kececi/pen/GRgjydM"
    }, {
      image: "https://i.imgur.com/MtruVGF.png",
      title: "Pizza",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/oNggYoL",
      githubUrl: "https://codepen.io/kececi/pen/oNggYoL"
    }, {
      image: "https://i.imgur.com/3lIGO6f.png",
      title: "Pokémon",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/rNaBxyo",
      githubUrl: "https://codepen.io/kececi/pen/rNaBxyo"
    }, {
      image: "https://i.imgur.com/eooxIqH.png",
      title: "Dondurma",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/aMYRvy",
      githubUrl: "https://codepen.io/kececi/pen/aMYRvy"
    },
    {
      image: "https://i.imgur.com/pzHO7YF.png",
      title: "Kedi",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/yreJmQ",
      githubUrl: "https://codepen.io/kececi/pen/yreJmQ"
    }, {
      image: "https://i.imgur.com/w0jzX4I.png",
      title: "Kutu",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/GeLpJJ?editors=0010",
      githubUrl: "https://codepen.io/kececi/pen/GeLpJJ?editors=0010"
    }, {
      image: "https://i.imgur.com/bVEcMBz.png",
      title: "Domuz",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/bZvJjz",
      githubUrl: "https://codepen.io/kececi/pen/bZvJjz"
    }, {
      image: "https://i.imgur.com/WiTQ5GH.png",
      title: "Pokemon",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/wQPGbP",
      githubUrl: "https://codepen.io/kececi/pen/wQPGbP"
    },
    {
      image: "https://i.imgur.com/H5JzrKk.png",
      title: "Login Page",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/rNxdGwO",
      githubUrl: "https://codepen.io/kececi/pen/rNxdGwO"
    }, {
      image: "https://i.imgur.com/ocECzLz.png",
      title: "Google Error Page",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/KEmjMg",
      githubUrl: "https://codepen.io/kececi/pen/KEmjMg"
    },
    {
      image: "https://i.imgur.com/zPiCgky.png",
      title: "Menu",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/LavVzr",
      githubUrl: "https://codepen.io/kececi/pen/LavVzr"
    }, {
      image: "https://i.imgur.com/NV4nbF3.png",
      title: "Efektif Animasyon",
      desc: language === "tr" ? "Css Alıştırmaları" : "Css Exercises",
      tags: ["css"],
      url: "https://codepen.io/kececi/pen/MWWxjMv",
      githubUrl: "https://codepen.io/kececi/pen/MWWxjMv"
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };


  return (
    <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 flex flex-col lg:flex-row items-center py-10 px-5 rounded-lg'>

      <div>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold mb-2 dark:text-white'>{language === "tr" ? "Projeler" : "Projects"}</h1>
          <p className='text-sm text-gray-500 dark:text-white'>{language === "tr" ? "Farklı alanlardaki çalışmalarımı görüntüleyebilirsiniz." : "You can view my work in different fields."}</p>
        </div>
        <div className='mb-8 gap-4 flex uppercase flex-col sm:flex-row'>
          <button
            onClick={(e) => reactClick("react")}
            className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-white ${activeButton === "react" ? "active" : ""}`}><FaReact size={"25px"} /> React ({counterCategory("react")})</button>
          <button onClick={(e) => reactClick("css")} className={`py-2 px-3 text-sm shadow rounded-xl flex items-center gap-2 dark:text-white border dark:border-[#34495E] ${activeButton === "css" ? "active" : ""}`}><RiCss3Line size={"22px"} />Css ({counterCategory("css")})</button>
        </div>

        <div className='pb-8 dark:text-white text-gray-500 text-sm'>
          {activeButton === "react" && language === "tr" ? (
            <p>
              React projelerimi içeren portföyümde, modern web geliştirme tekniklerini
              kullanarak oluşturduğum uygulamaları sergiliyorum. Her proje, benim teknik
              becerilerimi ve yaratıcılığımı yansıtmaktadır. Siz de bu projelerin hem
              kod yapısını hem tasarımını detaylıca inceleyebilirsiniz.
            </p>
          ) : activeButton === "react" ? (
            <p>
              In my portfolio containing my React projects, I showcase the applications
              I created using modern web development techniques. Each project reflects
              my technical skills and creativity. You can examine both the code
              structure and design of these projects in detail.
            </p>
          ) : null}

          {activeButton === "css" && language === "tr" ? (
            <p>
              Yıllar önce, her gün küçük bir tasarım yaparak, CSS becerilerimi
              geliştirmek için bir hedef koymuştum. Bu süreçte, birçok farklı proje
              üzerinde çalıştım ve her biri benim için önemli bir öğrenme deneyimi oldu.
              İşte onlardan bazıları.
            </p>
          ) : activeButton === "css" ? (
            <p>
              Years ago, I set a goal to improve my CSS skills by creating a small
              design every day. During this period, I worked on many different projects
              and each one was an important learning experience for me. Here are some of
              them.
            </p>
          ) : null}
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
                      githubUrl={item.githubUrl}
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
