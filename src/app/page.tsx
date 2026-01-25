import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const projects = [
    {
      title: "PSP-Lab",
      description: "A comprehensive laboratory for Payment Service Provider integrations and testing.",
      aiNarrative: "Used AI to architect the service decomposition and rapidly generate complex payment state machine logic, reducing development time by 60%.",
      techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/danichese/PSP-Lab",
      imageUrl: "/assets/project-1.png",
    },
    {
      title: "Security Service Decomposition",
      description: "Microservices architectural overhaul focused on security and service isolation.",
      aiNarrative: "Leveraged AI to analyze legacy monolithic code and propose clean microservice boundaries, ensuring robust security protocols across services.",
      techStack: ["React", "Express", "Docker", "AWS"],
      githubUrl: "https://github.com/danichese/Security-Service-Decomposition-",
      imageUrl: "/assets/project-2.png",
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
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
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
            <p className="mt-2 text-zinc-400">5+ Years <br /> ITIL Service Management</p>
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
            Tech-savvy professional with 5+ years' experience in Fintech and SaaS, pivoting into AI-Assisted Full Stack Development. 
            I leverage advanced AI tools to accelerate the software development lifecycle, transforming complex requirements into 
            scalable technical solutions. My background in Service Management and Technical Writing provides a unique foundation 
            for building user-centric interfaces with production-grade reliability.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex w-full max-w-5xl flex-col items-center py-24">
        <p className="text-human">Explore My Latest</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground">Featured Projects</h2>
        <div className="mt-16 grid w-full grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex w-full max-w-5xl flex-col items-center py-24 mb-20">
        <p className="text-human">Get In Touch</p>
        <h2 className="mt-2 text-4xl font-bold text-foreground">Contact Me</h2>
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-zinc-900/30 px-12 py-8 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/assets/email.png" alt="Email" width={24} height={24} className="opacity-70" />
            <Link href="mailto:example@gmail.com" className="text-lg hover:text-tech hover:underline decoration-tech underline-offset-4 transition-all">
              example@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-3 border-white/10 md:border-l md:pl-6">
            <Image src="/assets/linkedin.png" alt="LinkedIn" width={24} height={24} className="opacity-70" />
            <Link href="https://linkedin.com" target="_blank" className="text-lg hover:text-tech hover:underline decoration-tech underline-offset-4 transition-all">
              LinkedIn
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full max-w-5xl border-t border-white/5 py-12 text-center text-zinc-500">
        <p>© {new Date().getFullYear()} Dan Cheeseman. Built with AI Assistance.</p>
      </footer>
    </main>
  );
}