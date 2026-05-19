import { FileText, Network, SearchCheck } from 'lucide-react'

const traits = [
  {
    title: 'First-principles builder',
    body: 'Works from clear specs, explicit handoffs, and small verifiable build steps.',
    icon: SearchCheck,
  },
  {
    title: 'Trust-focused operator',
    body: 'Cares about local-first tools, permission boundaries, incident learning, and auditability.',
    icon: Network,
  },
  {
    title: 'Documentation-led',
    body: 'Turns messy systems into short, usable process documents and reviewable operating models.',
    icon: FileText,
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="flex w-full max-w-6xl flex-col py-24">
      <p className="section-kicker">Builder Profile</p>
      <h2 className="mt-2 text-4xl font-semibold text-foreground md:text-5xl">Calm systems, visible work.</h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {traits.map(({ title, body, icon: Icon }) => (
          <article key={title} className="glass-panel p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[rgb(var(--chaos-blue)/0.12)] text-blue">
              <Icon size={22} strokeWidth={1.8} />
            </div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 max-w-4xl text-lg leading-relaxed text-muted">
        <p>
          Dan is building DexRoboKnix, starting with ADE: a native Windows desktop environment that gives AI agents a real workspace and gives humans live supervision, permission control, and an audit trail.
        </p>
        <p className="mt-5">
          The through-line is practical service ownership: find the pattern underneath the noise, make the process observable, and leave behind evidence that someone else can verify.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
