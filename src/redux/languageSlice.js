import { createSlice } from '@reduxjs/toolkit';

const languageSlice = createSlice({
  name: 'language',
  initialState: { language: 'tr' }, 
  reducers: {
    getLocaleStorageLanguage(state) {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        state.language = savedLanguage;
      }
    },
    languageChange(state, action) {
      const newLanguage = action.payload;
      state.language = newLanguage;
      localStorage.setItem('language', newLanguage);
    }
  }
});

export const { getLocaleStorageLanguage, languageChange } = languageSlice.actions;
export default languageSlice.reducer;
