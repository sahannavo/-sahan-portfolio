import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import './index.css';
import TargetCursor from './TargetCursor';
import Lanyard from './Lanyard';
import GradientWaves from './GradientWaves';
import FolderFloat from './FolderFloat';
import profilePhoto from './assets/profile_photo.png';

// Lazy load section components so initial bundle is fast & lightweight
const Skills = lazy(() => import('./components/Skills'));
const AcademicBackground = lazy(() => import('./components/AcademicBackground'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

const SECTIONS = [
  { id: 'home', label: 'Home', transition: '> home' },
  { id: 'skills', label: 'Skills', transition: '> skills' },
  { id: 'academic', label: 'Education', transition: '> background' },
  { id: 'projects', label: 'Projects', transition: '> projects' },
  { id: 'contact', label: 'Contact', transition: '> contact' },
];

function App() {
  const [loading, setLoading] = useState(true);
  
  // Navigation State
  const [activeSection, setActiveSection] = useState('home');
  const [transitioning, setTransitioning] = useState(false);
  const [transitionText, setTransitionText] = useState('');

  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const transitioningRef = useRef(transitioning);
  transitioningRef.current = transitioning;

  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  const lastScrollTimeRef = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (section, text) => {
    if (section === activeSectionRef.current) return;
    setTransitionText(text);
    setTransitioning(true);
    
    // Switch to the new section while the screen is black
    setTimeout(() => {
      setActiveSection(section);
      window.scrollTo(0, 0); // Reset scroll to top
    }, 500); // 500ms allows the black screen to fade in fully
    
    // Remove the transition overlay
    setTimeout(() => {
      setTransitioning(false);
    }, 1800); 
  };

  // Scroll down -> next section; Scroll up -> previous section
  useEffect(() => {
    const handleWheel = (e) => {
      if (loadingRef.current || transitioningRef.current) return;

      const now = Date.now();
      if (now - lastScrollTimeRef.current < 1200) return; // cooldown debounce

      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = scrollY + windowHeight >= docHeight - 15;
      const atTop = scrollY <= 15;

      const currentIndex = SECTIONS.findIndex((s) => s.id === activeSectionRef.current);
      if (currentIndex === -1) return;

      if (e.deltaY > 30) {
        // Scrolling down
        if (atBottom && currentIndex < SECTIONS.length - 1) {
          lastScrollTimeRef.current = now;
          const next = SECTIONS[currentIndex + 1];
          handleNavigate(next.id, next.transition);
        }
      } else if (e.deltaY < -30) {
        // Scrolling up
        if (atTop && currentIndex > 0) {
          lastScrollTimeRef.current = now;
          const prev = SECTIONS[currentIndex - 1];
          handleNavigate(prev.id, prev.transition);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <div className="portfolio-container">
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      {/* Persistent Navigation Header */}
      <header className="navbar">
        <button 
          className="logo cursor-target"
          onClick={() => handleNavigate('home', '> home')}
        >
          SW.
        </button>
        <nav className="nav-links">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              className={`cursor-target ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => handleNavigate(sec.id, sec.transition)}
            >
              {sec.label}
            </button>
          ))}
        </nav>
      </header>

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
              <h2 className="hero-subtitle" style={{ pointerEvents: 'auto' }}>Project Manager Intern & Developer</h2>
              <p className="hero-description" style={{ pointerEvents: 'auto' }}>
                Computer Science undergraduate at NSBM Green University with hands-on experience leading team projects and managing client web platforms from requirements to delivery. Skilled in project planning, task delegation, and full-stack development.
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
                  <div><span className="code-keyword">const</span> <span className="code-variable">candidate</span> = {'{'}</div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">name</span>: <span className="code-string">'Sahan Weerasingha'</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">targetRole</span>: <span className="code-string">'Project Manager Intern'</span>,
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">stack</span>: [<span className="code-string">'React'</span>, <span className="code-string">'Node.js'</span>, <span className="code-string">'Java'</span>, <span className="code-string">'MySQL'</span>],
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">leadership</span>: [<span className="code-string">'Planning'</span>, <span className="code-string">'Task Delegation'</span>, <span className="code-string">'Client Comms'</span>],
                  </div>
                  <div style={{ paddingLeft: '1.5rem' }}>
                    <span className="code-property">status</span>: <span className="code-string">'seeking PM internship'</span>
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

        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          {activeSection === 'skills' && <Skills onBack={() => handleNavigate('home', '> home')} />}
          {activeSection === 'academic' && <AcademicBackground onBack={() => handleNavigate('home', '> home')} />}
          {activeSection === 'projects' && <Projects onBack={() => handleNavigate('home', '> home')} />}
          {activeSection === 'contact' && <Contact onBack={() => handleNavigate('home', '> home')} />}
        </Suspense>

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
