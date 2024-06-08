import React from 'react'
import ProfileInfo from '../components/ProfileInfo/ProfileInfo'
import TabMenu from '../components/TabMenu/TabMenu'

const Home = () => {
    return (
        <div className='bg-[#F3F4F6] dark:bg-gray-500 w-full py-10 px-4 overflow-x-hidden h-screen'>
            <ProfileInfo />
            <TabMenu />
        </div>
    )
}

export default Home