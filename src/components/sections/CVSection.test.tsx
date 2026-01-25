import { render, screen } from '@testing-library/react'
import CVSection from './CVSection'

// Mock the MarkdownCV component since it fetches data and uses complex rendering
jest.mock('../MarkdownCV', () => {
  return () => <div>Mocked MarkdownCV</div>
})

describe('CVSection', () => {
  it('renders the CV section header', () => {
    render(<CVSection />)
    expect(screen.getByText(/Curriculum Vitae/i)).toBeInTheDocument()
    expect(screen.getByText(/My Professional Record/i)).toBeInTheDocument()
  })

  it('renders the MarkdownCV component', () => {
    render(<CVSection />)
    expect(screen.getByText('Mocked MarkdownCV')).toBeInTheDocument()
  })
})
