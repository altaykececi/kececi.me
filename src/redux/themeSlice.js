import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: "theme",
    initialState: { theme: "light" },
    reducers: {
        getLocaleStorageTheme(state) {
            if (localStorage.theme === "dark") {
                document.documentElement.classList.add("dark")
                state.theme = "dark"
            }
        },
        themeChange(state) {
            if (state.theme === "dark") {
                localStorage.removeItem("theme")
                document.documentElement.classList.remove("dark");
                state.theme = "light"
            } else {
                localStorage.theme = "dark"
                document.documentElement.classList.add("dark");
                state.theme = "dark"

            }
        }
    }
})


export const { getLocaleStorageTheme, themeChange } = themeSlice.actions
export default themeSlice.reducer