const Footer = () => {
  return (
    <footer className="w-full max-w-5xl border-t border-white/5 py-12 text-center text-zinc-500">
      <p>© {new Date().getFullYear()} Dan Cheeseman. Built with Gemini CLI & Conductor.</p>
    </footer>
  );
};

export default Footer;
