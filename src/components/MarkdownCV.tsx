'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { FileText, Download, Printer } from 'lucide-react'

const MarkdownCV = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/assets/cv.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [])

  const handlePrint = () => {
    window.print()
  }

  if (!content) return <div className="animate-pulse text-zinc-500">Loading CV...</div>

  return (
    <div className="glass-panel w-full max-w-5xl p-6 md:p-10">
      <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b border-[var(--glass-border)] pb-8 md:flex-row no-print">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgb(var(--chaos-blue)/0.12)] text-blue">
            <FileText size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-foreground">Curriculum Vitae</h3>
            <p className="text-muted">Builder profile and service-management record</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={handlePrint}
            className="chaos-button"
          >
            <Printer size={20} />
            Print to PDF
          </button>
          <a
            href="/assets/cv.md"
            download="Dan-Cheeseman-CV.md"
            className="chaos-button chaos-button--solid"
          >
            <Download size={20} />
            Download .md
          </a>
        </div>
      </div>
      
      <div className="prose max-w-none prose-headings:text-blue prose-h1:text-4xl prose-h1:font-semibold prose-h2:text-red prose-h2:border-none prose-h3:text-foreground prose-p:text-muted prose-li:text-muted prose-strong:text-foreground prose-a:text-blue prose-hr:border-[var(--glass-border)] print:prose-zinc">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownCV
