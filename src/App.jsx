import React, { useRef } from 'react';
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

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col text-white scroll-smooth overflow-x-hidden overflow-y-auto">
     <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">

  <div className="absolute top-[-120px] left-[40%] w-[500px] h-[500px] bg-purple-500 opacity-40 blur-[120px] rounded-full" />


  <div className="absolute top-[65%] right-[15%] w-[400px] h-[400px] bg-purple-700 opacity-30 blur-[100px] rounded-full" />
</div>


      
      <div
        className="absolute -z-10 w-2/3 h-2/3 rounded-full blur-3xl 
                   bg-gradient-to-r from-purple-500/30 via-violet-500/25 to-fuchsia-500/20 
                   bottom-0 left-1/2 transform -translate-x-1/2 animate-pulse">
      </div>

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
      <MusicButton src="/your-music.mp3" />
    </div>
  );
}

export default App;