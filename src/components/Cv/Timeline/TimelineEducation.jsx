import React from 'react'
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { useSelector } from 'react-redux';

const TimelineEducation = () => {
    let language = useSelector(state => state.language.language)

    const data = [
        {
            icon: <MdOutlineSchool />,
            title: language === "tr" ? "Bilgisayar Programcılığı" : "Computer Programmer",
            company: "Kastamonu Üniversitesi",
            time: "2016-2018",
            desc: (
                language === "tr" ?
                    <>
                        Bilgisayar programlama, veri tabanı yönetimi, web geliştirme ve yazılım konularında eğitim aldım. Javascript, C# ve SQL gibi dillerde uygulamalı projeler gerçekleştirdim. <br />
                        Bitirme projesi olarak C# market otomasyonu yaptım. <br />
                        Çok sayıda pixel-perfect psd to css tema yaptım.
                    </> :
                    <>
                        I received training in computer programming, database management, web development and software. I have carried out applied projects in languages ​​such as Javascript, C# and SQL. <br />
                        As my graduation project, I made C# market automation. <br />
                        I have made many pixel-perfect psd to css themes.
                    </>
            ),
        }, {
            icon: <MdOutlineSchool />,
            title: language === "tr" ? "Bilişim Öğrencisi" : "IT Student",
            company: "Gebze Mesleki ve Teknik Anadolu Lisesi",
            time: "2016",
            desc: (
                language === "tr" ?
                    <>
                        Bilişim teknolojileri, ağ yönetimi ve temel programlama konularında eğitim aldım. <br />
                        HTML, CSS ve Javascript gibi dillerde temel beceriler kazandım ve küçük ölçekli projeler gerçekleştirdim.
                    </> :
                    <>
                        I received training in information technologies, network management and basic programming. <br />
                        I gained basic skills in languages ​​such as HTML, CSS and Javascript and carried out small-scale projects.
                    </>
            ),
        },
    ]
    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white my-8 rounded py-6 px-2 md:px-32'>
            <h2 className='text-xl font-medium syne mb-4 flex items-center gap-2'><MdOutlineSchool size={20} /> {language === "tr" ? "Eğitim" : "Education"}</h2>
            {
                data.map((item, index) => {
                    return (
                        <div className='relative' key={index}>
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

export default TimelineEducation