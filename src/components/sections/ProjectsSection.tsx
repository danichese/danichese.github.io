import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Agent Desktop Environment",
      status: "Foundation build in progress",
      description: "A native Windows workspace where AI agents can work under human supervision.",
      aiNarrative: "ADE is the flagship DexRoboKnix project: supervised agent runtime, observable workspace state, permission gates, and an audit trail that humans can review.",
      techStack: ["Tauri 2.x", "Rust", "SolidJS", "MCP", "Codex CLI"],
      githubUrl: "https://github.com/danichese",
      visual: "ade" as const,
      linkLabel: "Follow build",
    },
    {
      title: "Portfolio Site Migration",
      status: "Live on GitHub Pages",
      description: "This profile site migrated from static HTML to a modern Next.js stack.",
      aiNarrative: "Built with a spec-driven agent workflow, keeping human review around architecture, copy, visual direction, and verification.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Jest"],
      githubUrl: "https://github.com/danichese/danichese.github.io",
      imageUrl: "/assets/portfolio-site.png",
      linkLabel: "View repo",
    },
    {
      title: "PSP-Lab",
      status: "Work in progress",
      description: "A laboratory for Payment Service Provider integrations, state transitions, and support workflows.",
      aiNarrative: "Explores how agent-assisted planning can decompose complex payment flows into testable service behaviour.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/danichese/PSP-Lab",
      imageUrl: "/assets/psp-logo.jpg",
      linkLabel: "View repo",
    },
  ];

  return (
    <section id="projects" className="flex w-full max-w-6xl flex-col py-24">
      <p className="section-kicker">Selected Work</p>
      <h2 className="mt-2 text-4xl font-semibold text-foreground md:text-5xl">Proof of work, led by ADE.</h2>
      <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
