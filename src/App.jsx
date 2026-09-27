import React, { useState, useEffect } from 'react';
import './index.css';
import TargetCursor from './TargetCursor';
import Lanyard from './Lanyard';
import GradientWaves from './GradientWaves';
import FolderFloat from './FolderFloat';
import profilePhoto from './assets/profile_photo.png';

// Import new section components
import Skills from './components/Skills';
import AcademicBackground from './components/AcademicBackground';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  
  // Navigation State
  const [activeSection, setActiveSection] = useState('home');
  const [transitioning, setTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section, text) => {
    setTransitionText(text);
    setTransitioning(true);
    
    // Switch to the new section while the screen is black
    setTimeout(() => {
      setActiveSection(section);
      window.scrollTo(0, 0); // Reset scroll to top
    }, 500); // 500ms allows the black screen to fade in fully
    
    // Remove the transition overlay after 2.5s
    setTimeout(() => {
      setTransitioning(false);
    }, 2500); 
  };

  return (
    <div className="portfolio-container">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      {loading && (
        <div className="loader-overlay">
          <div className="text-hello">
            <span>&gt; hello</span>
            <span>&nbsp;world</span>
            <span className="cursor">_</span>
          </div>
          <div className="text-sahan">
            <span>i am</span>
            <span>sahan.</span>
          </div>
        </div>
      )}

      {transitioning && (
        <div className="transition-overlay">
          <div className="transition-text">
            <span>{transitionText}</span>
            <span className="cursor">_</span>
          </div>
        </div>
      )}

      <div className={`portfolio-content ${!loading && !transitioning ? 'animate-in' : ''}`}>
        
        {activeSection === 'home' && (
          <section id="home" className="hero-section" style={{ position: 'relative' }}>
            <Lanyard 
              position={[0, 0, 20]} 
              gravity={[0, -40, 0]} 
              fov={14}
              frontImage={profilePhoto} 
              backImage={profilePhoto}
              transparent={true} 
            />
            <div className="hero-content" style={{ zIndex: 11, pointerEvents: 'none' }}>
              <h1 className="hero-title cursor-target" style={{ pointerEvents: 'auto' }}>Sahan Weerasingha</h1>
              <h2 className="hero-subtitle" style={{ pointerEvents: 'auto' }}>Software Developer</h2>
              <p className="hero-description" style={{ pointerEvents: 'auto' }}>
                A Computer Science undergraduate at NSBM Green University passionate about software
                development, web technologies, and problem-solving. I craft clean, logic-driven applications
                and games that deliver seamless digital experiences.
              </p>
              <div className="code-window cursor-target" style={{ pointerEvents: 'auto' }}>
                <div className="code-header">
                  <div className="code-dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <div className="code-title">developer.js</div>
                </div>
                <div className="code-body">
                  <div><span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}</div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">name</span>: <span className="code-string">'Sahan Weerasingha'</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">role</span>: <span className="code-string">'Software Developer'</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">stack</span>: [<span className="code-string">'Java'</span>, <span className="code-string">'Python'</span>, <span className="code-string">'Spring Boot'</span>],
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">available</span>: <span className="code-boolean">true</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">status</span>: <span className="code-string">'looking for an internship'</span>
                  </div>
                  <div>{'}'};</div>
                </div>
              </div>
              
              <div style={{ margin: '4rem 0 6rem 0', display: 'flex', justifyContent: 'center', pointerEvents: 'auto' }}>
                <FolderFloat
                  items={['Skills & Expertise', 'Academic Background', 'Selected Projects', 'Let\'s Connect']}
                  label="Portfolio"
                  sublabel="4 sections"
                  trigger="hover"
                  closeOnSelect
                  physics
                  drift={0.5}
                  onSelect={(value, index) => {
                    const routeMap = ['skills', 'academic', 'projects', 'contact'];
                    const transitionText = ['> skills', '> background', '> projects', '> contact'];
                    handleNavigate(routeMap[index], transitionText[index]);
                  }}
                  folderColor="#1a1a1a"
                  frontColor="#2a2a2a"
                  paperColor="#e5e5e5"
                  itemColor="#111111"
                  itemTextColor="#65d070"
                  labelColor="#ffffff"
                  width={220}
                  height={150}
                  radius={12}
                  spread={180}
                  lift={30}
                  tilt={10}
                  flapAngle={34}
                  restAngle={16}
                  openDuration={500}
                  stagger={40}
                  bounce={0.3}
                />
              </div>

            </div>
          </section>
        )}

        {activeSection === 'skills' && <Skills onBack={() => handleNavigate('home', '> home')} />}
        {activeSection === 'academic' && <AcademicBackground onBack={() => handleNavigate('home', '> home')} />}
        {activeSection === 'projects' && <Projects onBack={() => handleNavigate('home', '> home')} />}
        {activeSection === 'contact' && <Contact onBack={() => handleNavigate('home', '> home')} />}

        {activeSection === 'home' && (
          <footer>
            <p>&copy; 2026 Sahan Weerasingha. Built with React & Vite.</p>
          </footer>
        )}
      </div>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <GradientWaves 
          horizonColor="#000000"
          waveColor="#555555"
          crestColor="#ffffff"
          speed={0.2}
          amplitude={2.5}
          waveScale={0.8}
        />
      </div>
    </div>
  );
}

export default App;
