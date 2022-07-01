export const handlerTheme = (
  theme: string,
  changeTheme: (value: string) => void,
) => {
  if (theme === 'light') {
    localStorage.theme = 'dark'
    changeTheme('dark')
  }
  if (theme === 'dark') {
    localStorage.theme = 'light'
    changeTheme('light')
  }
}
