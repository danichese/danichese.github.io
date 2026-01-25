import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  it('renders the experience and education', () => {
    render(<AboutSection />)
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getAllByText(/8\+ Years/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/App Support & Service Management/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/BTEC National Diploma/i).length).toBeGreaterThan(0)
  })
})
