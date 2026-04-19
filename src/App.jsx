import React, { useRef, useCallback } from 'react';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Squares from './Pages/Squares.jsx';
import Tech from './Pages/Tech.jsx';
import Projects from './Pages/Projects.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import MusicButton from "./Components/MusicButton";
import { useResponsiveSquareSize } from './hooks/useCustomHooks';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);

  const squareSize = useResponsiveSquareSize();
  const scrollToSection = useCallback((ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const refs = { heroRef, aboutRef, techRef, projectsRef };

  return (
    <div className="relative min-h-screen w-full flex flex-col text-white overflow-x-hidden overflow-y-auto scroll-smooth scrollbar-hide">
      <Navbar
        scrollToSection={scrollToSection}
        refs={refs}
      />

      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={squareSize}
          direction="diagonal"
          borderColor="#271e37"
          hoverFillColor="#222222"
        />
      </div>

      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen px-4 sm:px-6 flex items-center justify-center"
      >
        <Hero projectRef={projectsRef} scrollToSection={scrollToSection} />
      </section>


      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen px-4 sm:px-6 flex items-center justify-center"
      >
        <About />
      </section>

      <section
        ref={techRef}
        id="tech"
        className="min-h-screen px-4 sm:px-6 flex items-center justify-center"
      >
        <Tech />
      </section>

    
      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 flex items-center justify-center"
      >
        <Projects />
      </section>

      <Footer />

      <MusicButton src="/your-music.mp3" />
    </div>
  );
}

export default App;
