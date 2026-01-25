import { render, screen } from '@testing-library/react'
import Home from './page'

jest.mock('react-markdown', () => {
  return ({ children }: { children: string }) => <div>{children}</div>
})

describe('Home', () => {
  it('renders the hero section with name and role', () => {
    render(<Home />)
    expect(screen.getAllByText(/Dan Cheeseman/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/AI-Assisted Full Stack Developer/i)).toBeInTheDocument()
  })

  it('renders the profile image', () => {
    render(<Home />)
    const img = screen.getByAltText(/Dan Cheeseman/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('profile-pic.png'))
  })

  it('renders the CV download link', () => {
    render(<Home />)
    const link = screen.getByText(/Download CV/i)
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', expect.stringContaining('.pdf'))
  })

  it('renders the About section', () => {
    render(<Home />)
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getAllByText(/8\+ Years/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/App Support & ITIL Management/i).length).toBeGreaterThan(0)
  })

  it('renders the Projects section with featured projects', () => {
    render(<Home />)
    expect(screen.getByText(/Featured Products/i)).toBeInTheDocument()
    expect(screen.getByText('PSP-Lab')).toBeInTheDocument()
    expect(screen.getByText('Security Service Decomposition')).toBeInTheDocument()
  })

  it('renders the CV section', () => {
    render(<Home />)
    expect(screen.getByText(/Curriculum Vitae/i)).toBeInTheDocument()
    expect(screen.getByText(/Loading CV.../i)).toBeInTheDocument()
  })

  it('renders the Contact section', () => {
    render(<Home />)
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument()
    expect(screen.getAllByText(/LinkedIn/i).length).toBeGreaterThan(0)
  })
})