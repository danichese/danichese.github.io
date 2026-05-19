import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";
import { Github, Linkedin, MonitorCheck, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="profile" className="grid min-h-[calc(100vh-6rem)] w-full max-w-6xl items-center gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
      <div
        className="flex w-full min-w-0 flex-col items-start"
      >
        <p className="section-kicker">DexRoboKnix / Founder-builder of ADE</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-7xl md:leading-none">
          Dan
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-tight text-muted sm:text-2xl md:text-3xl">
          Building trustworthy desktops for AI agents, with humans in the loop.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          ADE is a native Windows workspace that gives agents a real operating surface and gives humans permission control, live observability, and replayable audit history.
        </p>
        <div className="mt-8 flex w-full flex-col flex-wrap gap-3 sm:w-auto sm:flex-row">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="#ade"
              className="chaos-button chaos-button--solid w-full sm:w-auto"
            >
              View the ADE build
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/assets/Dan-Cheeseman-CV-INC-2024.pdf"
              target="_blank"
              className="chaos-button w-full sm:w-auto"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
        <div className="mt-8 flex gap-5 text-muted">
          <motion.div whileHover={{ scale: 1.1, color: "rgb(var(--chaos-blue))" }}>
            <Link href="https://www.linkedin.com/in/dan-cheeseman-b1968052/" target="_blank" aria-label="LinkedIn">
              <Linkedin size={32} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, color: "rgb(var(--chaos-green))" }}>
            <Link href="https://github.com/danichese" target="_blank" aria-label="GitHub">
              <Github size={32} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        className="glass-panel hero-visual w-full min-w-0 p-5 md:p-6"
      >
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-lg border border-[var(--glass-border)] md:h-72 md:w-72">
          <Image
            src="/assets/profile-pic-new.jpg"
            alt="Dan"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="mt-6 grid gap-3">
          <div className="rounded-lg border border-[var(--glass-border)] bg-[var(--surface-soft)] p-4">
            <div className="flex items-center gap-3">
              <MonitorCheck className="text-blue" size={20} />
              <div>
                <p className="font-medium text-foreground">ADE workspace</p>
                <p className="text-sm text-muted">Native Windows surface for supervised agents</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-[var(--glass-border)] bg-[var(--surface-soft)] p-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-emerald" size={20} />
              <div>
                <p className="font-medium text-foreground">Human in the loop</p>
                <p className="text-sm text-muted">Approvals, snapshots, event trails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
