import { render, screen } from '@testing-library/react'
import MarkdownCV from './MarkdownCV'

jest.mock('react-markdown', () => {
  return ({ children }: { children: string }) => <div>{children}</div>
})

describe('MarkdownCV', () => {
  it('renders loading state initially', () => {
    render(<MarkdownCV />)
    expect(screen.getByText(/Loading CV.../i)).toBeInTheDocument()
  })
})
