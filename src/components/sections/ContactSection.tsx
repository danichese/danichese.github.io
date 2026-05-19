import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="mb-20 flex w-full max-w-6xl flex-col py-24">
      <p className="section-kicker">Contact / Follow</p>
      <h2 className="mt-2 max-w-3xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">
        Follow the ADE build or get in touch.
      </h2>
      <div className="glass-panel mt-10 grid gap-4 p-5 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-soft)] p-4 text-muted transition-colors hover:text-blue">
          <Mail size={24} />
          <Link href="mailto:daniel.cheeseman6@gmail.com" className="overflow-wrap-anywhere text-base font-medium">
            daniel.cheeseman6@gmail.com
          </Link>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-soft)] p-4 text-muted transition-colors hover:text-blue">
          <Linkedin size={24} />
          <Link href="https://www.linkedin.com/in/dan-cheeseman-b1968052/" target="_blank" className="text-base font-medium">
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center gap-3 rounded-lg bg-[var(--surface-soft)] p-4 text-muted transition-colors hover:text-emerald">
          <Github size={24} />
          <Link href="https://github.com/danichese" target="_blank" className="text-base font-medium">
            @danichese
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
