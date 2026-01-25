import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home', () => {
  it('renders the name Dan Cheeseman', () => {
    render(<Home />)
    const name = screen.getByText(/Dan Cheeseman/i)
    expect(name).toBeInTheDocument()
  })
})
