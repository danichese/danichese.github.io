import Image from "next/image";
import Link from "next/link";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
