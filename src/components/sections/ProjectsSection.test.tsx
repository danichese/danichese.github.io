import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders the featured products', () => {
    render(<ProjectsSection />)
    expect(screen.getByText(/Proof of work, led by ADE/i)).toBeInTheDocument()
    expect(screen.getByText('Agent Desktop Environment')).toBeInTheDocument()
    expect(screen.getByText('PSP-Lab')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Site Migration')).toBeInTheDocument()
  })
})
