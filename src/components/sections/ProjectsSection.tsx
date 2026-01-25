import ProjectCard from "@/components/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Site Migration",
      description: "A complete migration of this portfolio from static HTML to a modern Next.js 15+ stack. (Current Project)",
      aiNarrative: "Built entirely using the Gemini CLI and Conductor methodology. Showcases how an AI agent can autonomously scaffold, implement, and verify a full-stack project from start to finish.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Conductor"],
      githubUrl: "https://github.com/danichese/danichese.github.io",
      imageUrl: "/assets/portfolio-site.png",
    },
    {
      title: "PSP-Lab",
      description: "A comprehensive laboratory for Payment Service Provider integrations and testing. (Work in Progress)",
      aiNarrative: "Leveraging the Gemini CLI to architect service decomposition and generate complex payment state machine logic, drastically reducing manual coding effort.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/danichese/PSP-Lab",
      imageUrl: "/assets/psp-logo.jpg",
    },
    {
      title: "Security Service Decomposition",
      description: "Microservices architectural overhaul focused on security and service isolation. (Work in Progress)",
      aiNarrative: "Using Conductor to manage the transition from monolithic to microservice architecture, allowing for high-level technical decisions to be implemented through AI-driven tasks.",
      techStack: ["React", "Express", "Docker", "AWS"],
      githubUrl: "https://github.com/danichese/Security-Service-Decomposition-",
      imageUrl: "/assets/security-logo.jpg",
    },
  ];

  return (
    <section id="projects" className="flex w-full max-w-5xl flex-col items-center py-24">
      <p className="text-human">Explore My Latest</p>
      <h2 className="mt-2 text-4xl font-bold text-foreground">Featured Products</h2>
      <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
