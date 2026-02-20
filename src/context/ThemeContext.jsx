import { createContext, useContext, useState, useEffect } from "react"

const THEMES = ["sunrise", "sunset", "midnight"]
const STORAGE_KEY = "macchi-theme"
const DEFAULT_THEME = "sunset"

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY)
        
        return THEMES.includes(stored) ? stored : DEFAULT_THEME
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])

    function setTheme(newTheme) {
        if (THEMES.includes(newTheme)) {
            document.documentElement.classList.add("is-theme-changing")
            setThemeState(newTheme)

            setTimeout(() => {
                document.documentElement.classList.remove("is-theme-changing")
            }, 600)
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) throw new Error("useTheme must be used within a ThemeProvider")
    return context
}
