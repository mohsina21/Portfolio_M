import React, { useRef, useState, useEffect } from 'react';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Squares from './Pages/Squares.jsx';
import Tech from './Pages/Tech.jsx';
import Projects from './Pages/Projects.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import MusicButton from "./Components/MusicButton";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [squareSize, setSquareSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      setSquareSize(window.innerWidth < 640 ? 16 : 24);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col text-white overflow-x-hidden overflow-y-auto scroll-smooth scrollbar-hide">

      {/* Blurred Blobs for Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-500 opacity-40 blur-[100px] rounded-full" />
        <div className="absolute top-[65%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-purple-700 opacity-30 blur-[80px] rounded-full" />
      </div>

      {/* Extra Pulse Blob */}
      <div className="absolute -z-10 w-3/4 sm:w-2/3 h-3/4 sm:h-2/3 rounded-full blur-3xl 
                   bg-gradient-to-r from-purple-500/30 via-violet-500/25 to-fuchsia-500/20 
                   bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse" />

      {/* Navbar */}
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ heroRef, aboutRef, techRef, projectsRef, contactRef }}
      />

      {/* Squares BG */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Squares
          speed={0.5}
          squareSize={squareSize}
          direction="diagonal"
          borderColor="#271e37"
          hoverFillColor="#222222"
        />
      </div>

      {/* Sections */}
      <section
        ref={heroRef}
        id="hero"
        className="min-h-screen px-4 flex items-center justify-center"
      >
        <Hero />
      </section>

      <section
        ref={aboutRef}
        id="about"
        className="min-h-screen px-4 -mt-10 sm:-mt-20 flex items-center justify-center"
      >
        <About />
      </section>

      <section
        ref={techRef}
        id="tech"
        className="min-h-screen px-4 -mt-10 flex items-center justify-center"
      >
        <Tech />
      </section>

      <section
        ref={projectsRef}
        id="projects"
        className="min-h-screen px-4 py-16 sm:py-20 flex items-center justify-center"
      >
        <Projects />
      </section>

      {/* Footer and Music */}
      <Footer />
      <MusicButton src="/your-music.mp3" />
    </div>
  );
}

export default App;
