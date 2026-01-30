import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import ContactSection from "@/components/ContactSection";
import ThreeBackground from "@/components/ThreeBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-neon-pink selection:text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      <main>
        <Hero />
        <About />

        <Education />
        <TechStack />
        <Projects />
        <ContactSection />
      </main>

      <footer className="py-12 bg-black/90 backdrop-blur-md border-t border-white/5 text-center">
        <p className="text-gray-400 font-poppins text-base flex items-center justify-center gap-1">
          Designed with <span className="text-pink-600">❤️</span> by <span className="text-pink-600 font-bold ml-1">Puneet Atmanand Iti</span>
        </p>
      </footer>
    </div>
  );
}
