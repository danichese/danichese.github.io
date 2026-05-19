import HeroSection from "@/components/sections/HeroSection";
import ADESection from "@/components/sections/ADESection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CVSection from "@/components/sections/CVSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden px-5 pt-24 md:px-8">
      <HeroSection />
      <ADESection />
      <AboutSection />
      <ProjectsSection />
      <CVSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
