import { createContext, useContext, useMemo, useState } from 'react'

interface IThemeContext {
  theme: string
  setTheme: (value: string) => void
}

interface IThemeProvider {
  children: React.ReactNode
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<string>('light')
  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  )
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  const { theme, setTheme } = context
  return { theme, setTheme }
}
