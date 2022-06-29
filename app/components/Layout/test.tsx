import { render, screen } from '@testing-library/react'

import { Layout } from '.'

describe('<Layout />', () => {
  test('should render correctly', () => {
    render(
      <Layout>
        <h1>Hello</h1>
      </Layout>,
    )
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
