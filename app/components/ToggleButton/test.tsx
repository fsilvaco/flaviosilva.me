import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from '~/context/use-theme'

import { ToggleButton } from '.'

describe('<ToggleButton />', () => {
  test('should render dark icon after user click', () => {
    render(
      <ThemeProvider>
        <ToggleButton />
      </ThemeProvider>,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByTestId('dark-icon')).toBeInTheDocument()
  })
})
