import { render, screen } from '@testing-library/react'
import CVSection from './CVSection'

// Mock the MarkdownCV component since it fetches data and uses complex rendering
jest.mock('../MarkdownCV', () => {
  const MockMarkdownCV = () => <div>Mocked MarkdownCV</div>
  MockMarkdownCV.displayName = 'MockMarkdownCV'
  return MockMarkdownCV
})

describe('CVSection', () => {
  it('renders the CV section header', () => {
    render(<CVSection />)
    expect(screen.getByText(/Curriculum Vitae/i)).toBeInTheDocument()
    expect(screen.getByText(/Professional Record/i)).toBeInTheDocument()
  })

  it('renders the MarkdownCV component', () => {
    render(<CVSection />)
    expect(screen.getByText('Mocked MarkdownCV')).toBeInTheDocument()
  })
})
