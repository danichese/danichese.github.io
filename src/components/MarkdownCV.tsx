'use client'

import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { FileText, Download } from 'lucide-react'

const MarkdownCV = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/assets/cv.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
  }, [])

  if (!content) return <div className="animate-pulse text-zinc-500">Loading CV...</div>

  return (
    <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-sm md:p-12">
      <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-8 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tech/10 text-tech">
            <FileText size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">Curriculum Vitae</h3>
            <p className="text-zinc-400">AI-Assisted Full Stack Portfolio</p>
          </div>
        </div>
        <a
          href="/assets/cv.md"
          download="Dan-Cheeseman-CV.md"
          className="flex items-center gap-2 rounded-full bg-tech/10 px-6 py-3 font-semibold text-tech transition-all hover:bg-tech hover:text-black"
        >
          <Download size={20} />
          Download .md
        </a>
      </div>
      
      <div className="prose prose-invert prose-zinc max-w-none prose-headings:text-tech prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tighter prose-h2:text-human prose-h2:border-none prose-h3:text-foreground prose-a:text-tech prose-hr:border-white/10">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownCV
