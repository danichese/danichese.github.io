import Image from 'next/image'
import Link from 'next/link'
import * as motion from "framer-motion/client"
import { ArrowUpRight } from 'lucide-react'

interface ProjectProps {
  title: string
  status: string
  description: string
  aiNarrative: string
  techStack: string[]
  githubUrl: string
  imageUrl?: string
  visual?: 'ade'
  linkLabel?: string
}

const ProjectCard = ({
  title,
  status,
  description,
  aiNarrative,
  techStack,
  githubUrl,
  imageUrl,
  visual,
  linkLabel = 'View on GitHub',
}: ProjectProps) => {
  return (
    <motion.article
      className="glass-panel group flex h-full flex-col overflow-hidden p-0"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {visual === 'ade' ? (
        <div className="project-visual project-visual--ade" aria-label="ADE interface visual">
          <span />
          <span />
          <span />
        </div>
      ) : (
        <div className="relative h-44 w-full overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--chaos-blue)/0.42)] to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-4 w-fit rounded-lg border border-[var(--glass-border)] bg-[var(--surface-soft)] px-3 py-1 font-mono text-xs text-muted">
          {status}
        </span>
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>

        <div className="mt-5 rounded-lg border-l-2 border-[rgb(var(--chaos-green))] bg-[var(--surface-soft)] p-4">
          <p className="text-sm font-medium text-emerald">Build narrative</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{aiNarrative}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="glass-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={githubUrl}
            target="_blank"
            className="chaos-link"
          >
            {linkLabel}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
