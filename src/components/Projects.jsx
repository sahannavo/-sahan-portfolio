import React from 'react';

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ImagePlaceholder = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const SquareIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
  </svg>
);

const CircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

export default function Projects({ onBack }) {
  return (
    <section id="projects" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Selected Projects</h2>
      </div>

      <div className="projects-library-grid">
        
        {/* Featured Project */}
        <div className="lib-card featured">
          <div className="lib-featured-image">
            <div className="lib-featured-badge">
              ★ Featured
            </div>
            <img src="/inklink.jpg" alt="InkLink" />
          </div>
          <h3 className="lib-title">InkLink</h3>
          <p className="lib-desc">
            A modern, highly interactive story-sharing platform designed to connect users through real-time dynamic feeds and immersive live-story formats. It features robust creator profiles, secure authentication, and scalable data management. This full-stack application was meticulously built from the ground up, utilizing Spring Boot for a high-performance backend, MySQL for reliable data storage, and a polished HTML/CSS/JS interface to deliver a seamless, native-like user experience.
          </p>
          <div className="lib-tall-badge">HTML · CSS · JS · MySQL · Spring Boot</div>
          <div className="lib-links">
            <a href="https://github.com/sahannavo/InkLink" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
            {/* <a href="#" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Live</a> */}
          </div>
        </div>

        
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/findexpression.jpg" alt="Find Expression" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">Find Expression</h4>
            <div className="lib-small-tech">Python · face-api.js</div>
            <div className="lib-links">
              <a href="https://github.com/sahannavo/findExpression" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
              {/* <a href="#" className="lib-link cursor-target"><ArrowUpRight /> Live</a> */}
            </div>
          </div>
        </div>

        {/* Small Project 2
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/rollaball.jpg" alt="RollABall" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">RollABall</h4>
            <div className="lib-small-tech">Unity · C#</div>
            <div className="lib-links">
              <a href="#" className="lib-link cursor-target"><ArrowUpRight /> Code</a>
              <a href="#" className="lib-link cursor-target"><ArrowUpRight /> Live</a>
            </div>
          </div>
        </div>

        {/* Tall Project 1*/}
        <div className="lib-card-tall">
          <div className="lib-tall-image has-photo">
            <img src="/recrute_ai.jpg" alt="recruteAI" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">recruteAI</h4>
            <div className="lib-tall-desc">AI-enhanced recruitment platform that bridges the gap between top talent and recruiters. It features intelligent candidate matching, automated skill assessments, and a seamless dashboard for tracking application pipelines. Built with a robust C# backend architecture for complex data processing, paired with a sleek, responsive vanilla HTML/CSS/JS frontend for optimal user experience.</div>
            <div className="lib-tall-badge">C# · HTML/CSS/JS</div>
            <div className="lib-tall-links">
              <a href="https://github.com/sahannavo/recruitment-platform" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
              {/* <a href="#" className="lib-link cursor-target"><ArrowUpRight /> Live</a> */}
            </div>
          </div>
        </div>

        {/* Tall Project 2: Placeholder */}
        <div className="lib-card-tall">
          <div className="lib-tall-image has-photo">
            <img src="/sprite_flight.png" alt="Sprite-Flight" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">Sprite-Flight</h4>
            <div className="lib-tall-desc">A 2D arcade survival game built with Unity and C#. Steer a ship, dodge flying obstacles, and survive to get a high score! 🚀🛸</div>
            <div className="lib-tall-badge">Unity · C#</div>
            <div className="lib-tall-links">
              <a href="https://github.com/sahannavo/Sprite-Flight" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
              <a href=" https://play.unity.com/en/games/3f34482b-cc27-444b-ba9a-395d1cba5915/sprite-flight-build" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Live</a>
            </div>
          </div>
        </div>

        {/* Tall Project 3: Placeholder */}
        <div className="lib-card-tall">
          <div className="lib-tall-image">
            <img src="/findexpression.jpg" alt="Find Expression" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">Find Expression</h4>
            <div className="lib-tall-desc">Find ExpressionReal-time face detection and emotion recognition web app using face-api.js. Detects faces, recognizes 7 emotions (happy, sad, angry, surprised), and draws 68-point face landmarks.</div>
            <div className="lib-tall-badge">Python · face-api.js</div>
            <div className="lib-tall-links">
              <a href="https://github.com/sahannavo/findExpression" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
              {/* <a href="#" className="lib-link cursor-target"><ArrowUpRight /> Live</a> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
