import { render, screen } from '@testing-library/react'
import ContactSection from './ContactSection'

describe('ContactSection', () => {
  it('renders contact information', () => {
    render(<ContactSection />)
    expect(screen.getByText(/Follow the ADE build/i)).toBeInTheDocument()
    expect(screen.getByText(/daniel.cheeseman6@gmail.com/i)).toBeInTheDocument()
    expect(screen.getAllByText(/LinkedIn/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/@danichese/i)).toBeInTheDocument()
  })
})
