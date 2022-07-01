import { handlerTheme } from '~/utils/handlerTheme'

import { useTheme } from '~/context/use-theme'
import { useToggleTheme } from '~/hooks/use-toggle-theme'

import { IconTheme } from '../IconTheme'

export const ToggleButton = () => {
  const { theme, setTheme } = useTheme()

  useToggleTheme()

  return (
    <button
      className="dark:bg-light bg-dark flex items-center justify-center rounded-2xl p-2 px-4"
      onClick={() => handlerTheme(theme, setTheme)}
    >
      <IconTheme theme={theme} />
    </button>
  )
}
