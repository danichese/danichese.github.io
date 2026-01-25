import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the copyright and credits', () => {
    render(<Footer />)
    expect(screen.getByText(/Dan Cheeseman/i)).toBeInTheDocument()
    expect(screen.getByText(/Built with Gemini CLI & Conductor/i)).toBeInTheDocument()
  })
})
