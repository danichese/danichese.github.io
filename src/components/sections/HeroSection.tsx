import Image from "next/image";
import Link from "next/link";
import * as motion from "framer-motion/client";

const HeroSection = () => {
  return (
    <section id="profile" className="flex min-h-[90vh] flex-col items-center justify-center gap-12 md:flex-row md:gap-20">
      <motion.div 
        className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-tech shadow-[0_0_20px_rgba(0,242,255,0.3)] md:h-80 md:w-80"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/assets/profile-pic-new.jpg"
          alt="Dan Cheeseman"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div 
        className="flex flex-col items-center text-center md:items-start md:text-left"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-xl font-medium text-human">Hello, I'm</p>
        <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Dan Cheeseman
        </h1>
        <p className="mt-4 text-2xl font-semibold text-zinc-400">
          AI-Assisted Full Stack Developer
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/assets/Dan-Cheeseman-CV-INC-2024.pdf"
              target="_blank"
              className="rounded-full border border-tech px-8 py-3 font-semibold text-tech transition-all hover:bg-tech hover:text-black"
            >
              Download CV
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="rounded-full bg-foreground px-8 py-3 font-semibold text-background transition-all hover:bg-zinc-300"
            >
              Contact Info
            </Link>
          </motion.div>
        </div>
        <div className="mt-8 flex gap-6">
          <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
            <Link href="https://www.linkedin.com/in/dan-cheeseman-b1968052/" target="_blank" aria-label="LinkedIn">
              <Image src="/assets/linkedin.png" alt="LinkedIn" width={32} height={32} className="opacity-70 hover:opacity-100" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
            <Link href="https://github.com/danichese" target="_blank" aria-label="GitHub">
              <Image src="/assets/github.png" alt="GitHub" width={32} height={32} className="opacity-70 hover:opacity-100" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;