import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import languageSlice from './languageSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    language: languageSlice
  },
})