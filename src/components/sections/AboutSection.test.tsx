import { render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection', () => {
  it('renders the experience and education', () => {
    render(<AboutSection />)
    expect(screen.getByText(/Calm systems, visible work/i)).toBeInTheDocument()
    expect(screen.getByText(/First-principles builder/i)).toBeInTheDocument()
    expect(screen.getByText(/Trust-focused operator/i)).toBeInTheDocument()
    expect(screen.getByText(/Documentation-led/i)).toBeInTheDocument()
  })
})
