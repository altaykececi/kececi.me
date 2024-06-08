import './App.css';

import Home from './pages/Home'
import CvDetail from './pages/CvDetail'

import { useDispatch } from 'react-redux';
import { getLocaleStorageTheme } from './redux/themeSlice';
import { getLocaleStorageLanguage } from './redux/languageSlice'
import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';


function App() {
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocaleStorageTheme())
  }, [])

  useEffect(() => {
    dispatch(getLocaleStorageLanguage());
  }, []);

  return (
    <div className=' '>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cv-details' element={<CvDetail />} />
      </Routes>
    </div>
  );
}

export default App;