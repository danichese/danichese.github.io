import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import MarkdownCV from "@/components/MarkdownCV";

export default function Home() {
  const projects = [
    {
      title: "Portfolio Site Migration",
      description: "A complete migration of this portfolio from static HTML to a modern Next.js 15+ stack. (Current Project)",
      aiNarrative: "Built entirely using the Gemini CLI and Conductor methodology. Showcases how an AI agent can autonomously scaffold, implement, and verify a full-stack project from start to finish.",
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Conductor"],
      githubUrl: "https://github.com/danichese/portfolio-site",
      imageUrl: "/assets/profile-pic-2.png",
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
    <main className="flex min-h-screen flex-col items-center px-6 pt-20">
      {/* Hero Section */}
      <section id="profile" className="flex min-h-[90vh] flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-tech shadow-[0_0_20px_rgba(0,242,255,0.3)] md:h-80 md:w-80">
          <Image
            src="/assets/profile-pic.png"
            alt="Dan Cheeseman"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-xl font-medium text-human">Hello, I'm</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Dan Cheeseman
          </h1>
          <p className="mt-4 text-2xl font-semibold text-zinc-400">
            AI-Assisted Full Stack Developer
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/assets/Dan-Cheeseman-CV-INC-2024.pdf"
              target="_blank"
              className="rounded-full border border-tech px-8 py-3 font-semibold text-tech transition-all hover:bg-tech hover:text-black"
            >
              Download CV
            </Link>
            <Link
              href="#contact"
              className="rounded-full bg-foreground px-8 py-3 font-semibold text-background transition-all hover:bg-zinc-300"
            >
              Contact Info
            </Link>
          </div>
          <div className="mt-8 flex gap-6">
            <Link href="https://www.linkedin.com/in/dan-cheeseman-b1968052/" target="_blank" aria-label="LinkedIn">
              <Image src="/assets/linkedin.png" alt="LinkedIn" width={32} height={32} className="opacity-70 hover:opacity-100" />
            </Link>
            <Link href="https://github.com/danichese" target="_blank" aria-label="GitHub">
              <Image src="/assets/github.png" alt="GitHub" width={32} height={32} className="opacity-70 hover:opacity-100" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex w-full max-w-5xl flex-col items-center py-24">
        <p className="text-human">Get To Know More</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground">About Me</h2>
        <div className="mt-12 flex flex-col gap-10 md:flex-row">
          <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-zinc-900/30 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tech/10 text-tech">
              <Image src="/assets/experience.png" alt="Experience" width={24} height={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold">Experience</h3>
            <p className="mt-2 text-zinc-400">8+ Years <br /> App Support & ITIL Management</p>
          </div>
          <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-zinc-900/30 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tech/10 text-tech">
              <Image src="/assets/education.png" alt="Education" width={24} height={24} />
            </div>
            <h3 className="mt-4 text-xl font-bold">Education</h3>
            <p className="mt-2 text-zinc-400">BTEC National Diploma <br /> Information Technology</p>
          </div>
        </div>
        <div className="mt-12 max-w-3xl text-center text-lg leading-relaxed text-zinc-300">
          <p>
            Tech-savvy professional with 8+ years' experience in Application Support, FinTech and SaaS. I am now 
            pivoting into AI-Assisted Full Stack Development to demonstrate how high-level project management 
            tools like <strong>Conductor</strong> and the <strong>Gemini CLI</strong> empower anyone to build 
            complex technical products with speed and precision. This portfolio itself is an example of that 
            workflow—scaffolded, built, and verified using AI agents.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex w-full max-w-5xl flex-col items-center py-24">
        <p className="text-human">Explore My Latest</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground">Featured Products</h2>
        <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="flex w-full max-w-5xl flex-col items-center py-24">
        <p className="text-human">My Professional Record</p>
        <h2 className="mt-2 mb-16 text-4xl font-bold text-foreground text-center">Curriculum Vitae</h2>
        <MarkdownCV />
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex w-full max-w-5xl flex-col items-center py-24 mb-20">
        <p className="text-human">Get In Touch</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground">Contact Me</h2>
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-zinc-900/30 px-12 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/assets/email.png" alt="Email" width={24} height={24} className="opacity-70" />
            <Link href="mailto:daniel.cheeseman6@gmail.com" className="text-lg hover:text-tech hover:underline decoration-tech underline-offset-4 transition-all">
              daniel.cheeseman6@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3 border-white/10 md:border-l md:pl-6">
            <Image src="/assets/linkedin.png" alt="LinkedIn" width={24} height={24} className="opacity-70" />
            <Link href="https://www.linkedin.com/in/dan-cheeseman-b1968052/" target="_blank" className="text-lg hover:text-tech hover:underline decoration-tech underline-offset-4 transition-all">
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl border-t border-white/5 py-12 text-center text-zinc-500">
        <p>© {new Date().getFullYear()} Dan Cheeseman. Built with Gemini CLI & Conductor.</p>
      </footer>
    </main>
  );
}
