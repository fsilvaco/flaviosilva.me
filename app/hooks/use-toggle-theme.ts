import { useEffect } from 'react'

import { useTheme } from '~/context/use-theme'

export const useToggleTheme = () => {
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.body.classList.add('dark')
      setTheme('dark')
    }

    if (localStorage.theme === 'light') {
      document.body.classList.remove('dark')
      setTheme('light')
    }
  }, [theme, setTheme])
}
