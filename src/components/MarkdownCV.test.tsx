import { render, screen } from '@testing-library/react'
import MarkdownCV from './MarkdownCV'

jest.mock('react-markdown', () => {
  const MockReactMarkdown = ({ children }: { children: string }) => <div>{children}</div>
  MockReactMarkdown.displayName = 'MockReactMarkdown'
  return MockReactMarkdown
})

describe('MarkdownCV', () => {
  it('renders loading state initially', () => {
    render(<MarkdownCV />)
    expect(screen.getByText(/Loading CV.../i)).toBeInTheDocument()
  })
})
