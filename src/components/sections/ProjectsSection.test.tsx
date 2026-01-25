import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders the featured products', () => {
    render(<ProjectsSection />)
    expect(screen.getByText(/Featured Products/i)).toBeInTheDocument()
    expect(screen.getByText('PSP-Lab')).toBeInTheDocument()
    expect(screen.getByText('Security Service Decomposition')).toBeInTheDocument()
    expect(screen.getByText('Portfolio Site Migration')).toBeInTheDocument()
  })
})
