import React, { useRef } from 'react';
import Hero from './Components/Hero.jsx'; 
import About from './Components/About.jsx';
import Squares from './Pages/Squares.jsx';
import Tech from './Pages/Tech.jsx';
import Projects from './Pages/Projects.jsx';
import Navbar from './Components/Navbar.jsx'; 
import Footer from './Components/Footer.jsx';

function App() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth scroll handler
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full text-white scroll-smooth overflow-x-hidden">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, techRef, projectsRef, contactRef }}
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={30}
          direction="diagonal"
          borderColor="#271e37"
          hoverFillColor="#222222"
        />
      </div>

      <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

    
      <section ref={aboutRef} id="about" className="min-h-screen flex items-center justify-center -mt-20">
        <About />
      </section>

      <section ref={techRef} id="tech" className="min-h-screen -mt-13 flex items-center justify-center">
        <Tech />
      </section>

      <section ref={projectsRef} id="projects" className="min-h-screen py-20 flex items-center justify-center">
        <Projects />
      </section>
        <Footer />


    </div>
  );
}

export default App;
