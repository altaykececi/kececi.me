import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Timeline = () => {
    let language = useSelector(state => state.language.language)


    const data = [
        {
            icon: <FiBriefcase />,
            title: language === "tr" ? "Ön Uç Geliştirici" : "Front End Developer",
            company: "Vagonsoft Web Yazılım",
            time: "2022-2023 Tem.",
            desc: (
                language === "tr" ?
                    <>
                        Vagonsoft firmasında front-end geliştirme alanında yaklaşık 7 ay çalıştım ve bu süre boyunca; <br />
                        Otopark, Oto Yıkama, Nakliye Otomasyonları <br />
                        Kombi Arama web sitesi için arayüz tasarımı <br />
                        Viptransfer web sitesi için arayüz tasarımı gibi bir çok projeyi tamamladım. <br />
                        Genel olarak js, bootstrap5 ve tailwindCss kullanıldı.
                    </> :
                    <>
                        I worked in front-end development at Vagonsoft for about 7 months and during this time; <br />
                        Parking Lot, Car Wash, Transportation Automations <br />
                        Interface design for Combi Search website <br />
                        I have completed many projects such as interface design for the Viptransfer website. <br />
                        In general, js, bootstrap5 and tailwindCss were used.
                    </>
            )
        }, {
            icon: <FiBriefcase />,
            title: language === "tr" ? "Ön Uç Geliştirici" : "Front End Developer",
            company: "Koçtim Group",
            time: "2020-2021",
            desc: (
                language === "tr" ?
                    <>
                        1 yıl boyunca front end ve web tasarımcı olarak çalıştım.<br />
                        30'dan fazla web sitesinin yönetimi, düzenlemesi ve arayüz tasarımlarının iyileştirmeleri yapıldı. <br />
                        Ağırlıklı olarak Javascript kullanıldı.
                    </> :
                    <>
                        I worked as a front end and web designer for 1 year.<br />
                        Improvements were made to the management, editing and interface designs of more than 30 websites. <br />
                        Mainly Javascript was used.
                    </>
            ),
        },
        {
            icon: <FiBriefcase />,
            title: language === "tr" ? "Ön Uç Geliştirici" : "Front End Developer",
            company: "Bozkurt Yazılım",
            time: "2019-2021",
            desc: (
                language === "tr" ?
                    <>
                        Güzellik Merkezi, Poliklinik ve Teknik Servis randevu sistemlerinin arayüzü geliştirildi. <br />
                        Projelerde front end tarafında çalıştım, React ve TailwindCss kullandım.
                    </> :
                    <>
                        The interface of Beauty Center, Polyclinic and Technical Service appointment systems has been improved. <br />
                        I worked on the front end side of the projects and used React and TailwindCss.
                    </>
            ),
        },
        {
            icon: <FiBriefcase />,
            title: "IT STAJYER",
            company: "Doğuş Holding",
            time: "2016-2017",
            desc: (
                language === "tr" ?
                    <>
                        Doğuş Teknoloji'nin IT departmanında 9 ay boyunca çalıştım.<br />
                        Bu süre içinde hem donanım hem de yazılım alanlarında görev
                        aldım.
                    </> :
                    <>
                        I worked in the IT department of Doğuş Technology for 9 months.<br />
                        During this period, he worked in both hardware and software fields.
                        I bought.
                    </>
            ),
        }
    ]

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white mt-8 rounded py-6 px-2 md:px-32'>
            <h2 className='text-xl font-medium syne mb-4 flex items-center gap-2'><IoBriefcaseOutline size={20} /> {language === "tr" ? "Deneyim" : "Experience"}</h2>
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