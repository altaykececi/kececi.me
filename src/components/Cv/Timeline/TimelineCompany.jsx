import React from 'react'
import { FiBriefcase } from "react-icons/fi";
import { IoBriefcaseOutline } from "react-icons/io5";

const Timeline = () => {
    const data = [
        {
            icon: <FiBriefcase />,
            title: "Front End Developer",
            company: "Vagonsoft Web Yazılım",
            time: "2022-2023 Tem.",
            desc: (
                <>
                    Vagonsoft firmasında front-end geliştirme alanında yaklaşık 7 ay çalıştım ve bu süre boyunca; <br />
                    Otopark, Oto Yıkama, Nakliye Otomasyonları <br />
                    Kombi Arama web sitesi için arayüz tasarımı <br />
                    Viptransfer web sitesi için arayüz tasarımı gibi bir çok projeyi tamamladım. <br />
                    Genel olarak js, bootstrap5 ve tailwindCss kullanıldı.
                </>
            )
        }, {
            icon: <FiBriefcase />,
            title: "Front End Developer",
            company: "Koçtim Group",
            time: "2020-2021",
            desc: (
                <>
                    1 yıl boyunca front end ve web tasarımcı olarak çalıştım.<br />
                    30'dan fazla web sitesinin yönetimi, düzenlemesi ve arayüz tasarımlarının iyileştirmeleri yapıldı. <br />
                    Ağırlıklı olarak Javascript kullanıldı.
                </>
            ),
        },
        {
            icon: <FiBriefcase />,
            title: "Front End Developer",
            company: "Bozkurt Yazılım",
            time: "2019-2021",
            desc: (
                <>
                    Güzellik Merkezi, Poliklinik ve Teknik Servis randevu sistemlerinin arayüzü geliştirildi. <br />
                    Projelerde front end tarafında çalıştım, React ve TailwindCss kullandım.
                </>
            ),
        },
        {
            icon: <FiBriefcase />,
            title: "IT STAJYER",
            company: "Doğuş Holding",
            time: "2016-2017",
            desc: (
                <>
                    Doğuş Teknoloji'nin IT departmanında 9 ay boyunca çalıştım.<br />
                    Bu süre içinde hem donanım hem de yazılım alanlarında görev
                    aldım.
                </>
            ),
        }
    ]

    return (
        <div className='container max-w-[1200px] mx-auto bg-white dark:bg-gray-800 dark:text-white mt-8 rounded py-6 px-2 md:px-32'>
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