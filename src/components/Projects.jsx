import React from 'react';

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function Projects({ onBack }) {
  return (
    <section id="projects" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Featured & Client Projects</h2>
      </div>

      <div className="projects-library-grid">
        
        {/* Featured Project: New Step Finance (Client Freelance) */}
        <div className="lib-card featured">
          <div className="lib-featured-image">
            <div className="lib-featured-badge">
              ★ Client Project (Freelance) · 2026
            </div>
            <img src="/new_step_finance.png" alt="New Step Finance Website" />
          </div>
          <h3 className="lib-title">New Step Finance Website</h3>
          <p className="lib-desc">
            Engaged by an Australian mortgage broker to manage the complete lifecycle from requirements to delivery: a unique, custom-designed multi-page finance platform of 30+ pages covering home loans, refinancing, and guides. Built interactive financial calculators (savings growth & home-loan offset) with Chart.js, an Express backend with APIs for blogs, file uploads, AI-powered web assistant, and an admin dashboard for client content management.
          </p>
          <div className="lib-tall-badge">React · Vite · Node.js · Express · Prisma · JWT · Chart.js · GSAP</div>
          <div className="lib-links">
            <span className="lib-link" style={{ color: '#888' }}>Australian Mortgage Broker Client</span>
          </div>
        </div>

        {/* Team Lead Project: BIO POHORA */}
        <div className="lib-card-tall">
          <div className="lib-tall-image has-photo">
            <img src="/bio_pohora.png" alt="BIO POHORA" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">BIO POHORA (Team Lead)</h4>
            <div className="lib-tall-desc">
              Agricultural fertilizer subsidy platform designed to improve transparency through digital tokens, QR verification, and allocation tracking. Directed user-centered design workflow, task delegation, biometric login, and offline-capable interactions.
            </div>
            <div className="lib-tall-badge">Team Leadership · HCI · Mobile UX</div>
          </div>
        </div>

        {/* Project: RecruteAI */}
        <div className="lib-card-tall">
          <div className="lib-tall-image has-photo">
            <img src="/recrute_ai.jpg" alt="RecruteAI" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">RecruteAI</h4>
            <div className="lib-tall-desc">
              AI-enhanced recruitment platform featuring intelligent candidate matching, automated skill assessments, and pipeline tracking. Developed C# backend architecture for data processing.
            </div>
            <div className="lib-tall-badge">C# · HTML5 · CSS3 · JavaScript</div>
            <div className="lib-tall-links">
              <a href="https://github.com/sahannavo/recruitment-platform" target="_blank" rel="noreferrer" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
            </div>
          </div>
        </div>

        {/* Project: InkLink */}
        <div className="lib-card-tall">
          <div className="lib-tall-image has-photo">
            <img src="/inklink.jpg" alt="InkLink" />
          </div>
          <div className="lib-tall-content">
            <h4 className="lib-tall-title">InkLink</h4>
            <div className="lib-tall-desc">
              Full-stack creative story-sharing platform with real-time feeds, live-story formats, creator profiles, and secure authentication built with Spring Boot and MySQL.
            </div>
            <div className="lib-tall-badge">Spring Boot · MySQL · HTML/CSS/JS</div>
            <div className="lib-tall-links">
              <a href="https://github.com/sahannavo/InkLink" target="_blank" rel="noreferrer" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
            </div>
          </div>
        </div>

        {/* Project: SpotFinder */}
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/spotfinder.png" alt="SpotFinder" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">SpotFinder</h4>
            <div className="lib-small-tech">Flutter · Dart · Android Channels</div>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>
              Mobile signal-monitoring app with live dBm readings and animated radar-style indicator.
            </p>
          </div>
        </div>

        {/* Project: BotFriend */}
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/botfriend.png" alt="BotFriend" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">BotFriend AI</h4>
            <div className="lib-small-tech">Node.js · Express · OpenRouter API</div>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>
              AI chatbot web app powered by Google Gemma model with server-side history.
            </p>
          </div>
        </div>

        {/* Project: QR Aura */}
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/qraura.png" alt="QR Aura" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">QR Aura</h4>
            <div className="lib-small-tech">HTML5 · CSS3 · JavaScript</div>
            <p style={{ fontSize: '0.8rem', color: '#888', marginBottom: '0.5rem' }}>
              Customizable offline QR code generator with live styling, colors, and download.
            </p>
          </div>
        </div>

        {/* Project: Find Expression */}
        <div className="lib-card lib-card-small">
          <div className="lib-icon-box">
            <img src="/findexpression.jpg" alt="Find Expression" />
          </div>
          <div className="lib-small-content">
            <h4 className="lib-small-title">Find Expression</h4>
            <div className="lib-small-tech">face-api.js · JavaScript</div>
            <div className="lib-links">
              <a href="https://github.com/sahannavo/findExpression" target="_blank" rel="noreferrer" className="lib-link lib-link-blue cursor-target"><ArrowUpRight /> Code</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}