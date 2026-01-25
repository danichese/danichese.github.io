import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the name Dan Cheeseman', () => {
    render(<Navbar />)
    const logos = screen.getAllByText(/Dan Cheeseman/i)
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Experience').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu', () => {
    render(<Navbar />)
    const button = screen.getByLabelText(/Toggle menu/i)
    fireEvent.click(button)
    const mobileLinks = screen.getAllByText('About')
    expect(mobileLinks.length).toBeGreaterThan(1) // Desktop + Mobile
  })
})
