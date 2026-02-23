"use client"

import { createContext, useState, ReactNode } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "@/styles/theme"
import { GlobalStyle } from "@/styles/GlobalStyle"

interface ThemeContextType {
  toggleTheme: () => void
  theme: "light" | "dark"
}

export const ThemeContext = createContext({} as ThemeContextType)

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  const currentTheme = theme === "dark" ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
