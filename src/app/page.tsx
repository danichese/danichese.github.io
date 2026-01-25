import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CVSection from "@/components/sections/CVSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-20">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CVSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
