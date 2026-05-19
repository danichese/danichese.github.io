import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'
import { ThemeProvider } from './ThemeProvider'

const renderNavbar = () => render(
  <ThemeProvider>
    <Navbar />
  </ThemeProvider>
)

describe('Navbar', () => {
  it('renders the name Dan', () => {
    renderNavbar()
    const logos = screen.getAllByText(/^Dan$/i)
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders navigation links', () => {
    renderNavbar()
    expect(screen.getAllByText('ADE').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('toggles mobile menu', () => {
    renderNavbar()
    const button = screen.getByLabelText(/Toggle menu/i)
    fireEvent.click(button)
    const mobileLinks = screen.getAllByText('About')
    expect(mobileLinks.length).toBeGreaterThan(1) // Desktop + Mobile
  })
})
