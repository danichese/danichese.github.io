import { render, screen } from '@testing-library/react'
import Home from './page'

jest.mock('react-markdown', () => {
  const MockReactMarkdown = ({ children }: { children: string }) => <div>{children}</div>
  MockReactMarkdown.displayName = 'MockReactMarkdown'
  return MockReactMarkdown
})

describe('Home', () => {
  it('renders the hero section with name and role', () => {
    render(<Home />)
    expect(screen.getAllByText(/Dan Cheeseman/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Building trustworthy desktops for AI agents/i)).toBeInTheDocument()
  })

  it('renders the profile image', () => {
    render(<Home />)
    const img = screen.getByAltText(/Dan Cheeseman/i)
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('profile-pic-new.jpg'))
  })

  it('renders the CV download link', () => {
    render(<Home />)
    const link = screen.getByText(/Download CV/i)
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', expect.stringContaining('.pdf'))
  })

  it('renders the About section', () => {
    render(<Home />)
    expect(screen.getByText(/Calm systems, visible work/i)).toBeInTheDocument()
    expect(screen.getByText(/First-principles builder/i)).toBeInTheDocument()
  })

  it('renders the Projects section with featured projects', () => {
    render(<Home />)
    expect(screen.getByText(/Proof of work, led by ADE/i)).toBeInTheDocument()
    expect(screen.getAllByText('Agent Desktop Environment').length).toBeGreaterThan(0)
    expect(screen.getByText('PSP-Lab')).toBeInTheDocument()
  })

  it('renders the CV section', () => {
    render(<Home />)
    expect(screen.getByText(/Curriculum Vitae/i)).toBeInTheDocument()
    expect(screen.getByText(/Loading CV.../i)).toBeInTheDocument()
  })

  it('renders the Contact section', () => {
    render(<Home />)
    expect(screen.getAllByText(/Follow the ADE build/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/LinkedIn/i).length).toBeGreaterThan(0)
  })
})
