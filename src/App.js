import './App.css';
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import TabMenu from './components/TabMenu/TabMenu';
import { useDispatch } from 'react-redux';
import { getLocaleStorageTheme, themeChange } from './redux/themeSlice';
import { useEffect } from 'react';

function App() {
  let dispacth = useDispatch() 

  useEffect(() => {
    dispacth(getLocaleStorageTheme())
  }, [])

  return (
    <div className='bg-[#F3F4F6] dark:bg-gray-500 w-full py-10 px-4 overflow-x-hidden h-screen'>
      <ProfileInfo />
      <TabMenu />
    </div>
  );
}

export default App;