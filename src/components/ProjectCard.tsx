import Image from 'next/image'
import Link from 'next/link'

interface ProjectProps {
  title: string
  description: string
  aiNarrative: string
  techStack: string[]
  githubUrl: string
  imageUrl: string
}

const ProjectCard = ({ title, description, aiNarrative, techStack, githubUrl, imageUrl }: ProjectProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:border-tech/50">
      <div className="relative mb-6 h-48 w-full overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-zinc-400">{description}</p>
      
      <div className="mt-4 rounded-lg bg-black/30 p-4 border-l-2 border-tech">
        <p className="text-sm font-medium text-tech">AI-Assisted Workflow:</p>
        <p className="mt-1 text-sm italic text-zinc-300">"{aiNarrative}"</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href={githubUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-tech"
        >
          View on GitHub
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
