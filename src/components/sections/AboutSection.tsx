import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="flex w-full max-w-5xl flex-col items-center py-24">
      <p className="text-human">Get To Know More</p>
      <h2 className="mt-2 text-4xl font-bold text-foreground">About Me</h2>
      <div className="mt-12 flex flex-col gap-10 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-2xl border border-white/10 bg-zinc-900/30 p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-tech/10 text-tech">
            <Image src="/assets/experience.png" alt="Experience" width={24} height={24} />
          </div>
          <h3 className="mt-4 text-xl font-bold">Experience</h3>
          <p className="mt-2 text-zinc-400">8+ Years <br /> App Support & Service Management</p>
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
  );
};

export default AboutSection;
