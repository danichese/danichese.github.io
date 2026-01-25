import { render, screen } from '@testing-library/react'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  const project = {
    title: 'Test Project',
    description: 'A test description',
    aiNarrative: 'AI was helpful',
    techStack: ['React', 'Next.js'],
    githubUrl: 'https://github.com',
    imageUrl: '/assets/project-1.png',
  }

  it('renders project details correctly', () => {
    render(<ProjectCard {...project} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test description')).toBeInTheDocument()
    expect(screen.getByText(/AI was helpful/i)).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View on GitHub/i })).toHaveAttribute('href', 'https://github.com')
  })
})
