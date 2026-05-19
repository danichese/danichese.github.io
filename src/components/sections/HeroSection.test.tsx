import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('renders the name and role', () => {
    render(<HeroSection />)
    expect(screen.getAllByText(/Dan Cheeseman/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Building trustworthy desktops for AI agents/i)).toBeInTheDocument()
  })

  it('renders the profile image', () => {
    render(<HeroSection />)
    const img = screen.getByAltText(/Dan Cheeseman/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('profile-pic-new.jpg'))
  })

  it('renders the CV download link', () => {
    render(<HeroSection />)
    const link = screen.getByText(/Download CV/i)
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', expect.stringContaining('.pdf'))
  })
})
