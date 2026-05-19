import Link from 'next/link'
import { Activity, Eye, GitBranch, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    title: 'Trust',
    body: 'Visible permission boundaries and human approvals for risky agent actions.',
    icon: ShieldCheck,
  },
  {
    title: 'Observability',
    body: 'Live activity streams, snapshots, and session state that a human can inspect.',
    icon: Eye,
  },
  {
    title: 'Auditability',
    body: 'Append-only event logs and git-backed worktrees for reviewable agent output.',
    icon: GitBranch,
  },
]

const stack = ['Tauri 2.x', 'Rust', 'SolidJS', 'Vite', 'MCP', 'Codex CLI', 'Git worktrees']
const done = ['T001 monorepo init', 'T002 core / enterprise boundary rule']
const next = ['T003 Tauri workspace', 'T004 SolidJS frontend workspace']

const ADESection = () => {
  return (
    <section id="ade" className="w-full max-w-6xl py-24">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-kicker">Flagship Project</p>
          <h2 className="mt-2 text-4xl font-semibold text-foreground md:text-5xl">
            Agent Desktop Environment
          </h2>
        </div>
        <span className="glass-pill w-fit">Foundation build in progress</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass-panel p-6 md:p-8">
          <p className="max-w-3xl text-xl leading-relaxed text-muted">
            ADE is a native Windows desktop environment where AI agents work in a real workspace and humans keep live supervision, permission control, and an audit trail.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {pillars.map(({ title, body, icon: Icon }) => (
              <div key={title} className="rounded-lg border border-[var(--glass-border)] bg-[var(--surface-soft)] p-5">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--chaos-green)/0.14)] text-emerald">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="glass-pill">{item}</span>
            ))}
          </div>
        </article>

        <aside className="glass-panel overflow-hidden p-0">
          <div className="border-b border-[var(--glass-border)] px-5 py-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted">
              <Activity size={16} aria-hidden="true" />
              ADE build ledger
            </div>
          </div>

          <div className="space-y-6 p-5 md:p-6">
            <div className="rounded-lg bg-[var(--terminal-bg)] p-5 font-mono text-sm shadow-inner">
              <p className="text-foreground">Phase 0: Foundation</p>
              <p className="mt-2 text-muted">Current task: shape the public builder profile around ADE</p>
              <div className="mt-5 space-y-2">
                {done.map((item) => (
                  <p key={item} className="text-emerald">done / {item}</p>
                ))}
                {next.map((item) => (
                  <p key={item} className="text-blue">next / {item}</p>
                ))}
              </div>
            </div>

            <div className="ade-preview" aria-label="ADE desktop preview">
              <div className="ade-preview__toolbar">
                <span />
                <span />
                <span />
              </div>
              <div className="ade-preview__grid">
                <div className="ade-preview__rail" />
                <div className="ade-preview__workspace">
                  <span>agent.session</span>
                  <strong>Human approval required</strong>
                  <p>File write, shell execution, and workspace state are visible before the agent proceeds.</p>
                </div>
              </div>
            </div>

            <Link
              href="https://github.com/danichese"
              target="_blank"
              className="chaos-link"
            >
              Follow the ADE build
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default ADESection
