import React from 'react';

export default function AcademicBackground({ onBack }) {
  return (
    <section id="academic" className="academic-section section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Academic Background</h2>
      </div>

      <div className="git-timeline">
        
        {/* Node 1: Degree */}
        <div className="git-node">
          <div className="git-line"></div>
          <div className="git-point"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">commit ed1b2c3</span>
            </div>
            
            <h3 className="git-title">BSc (Hons) Computer Science — UGC Approved</h3>
            <p className="git-desc">
              NSBM Green University, Sri Lanka (2024 – Present). Rigorous foundation in software engineering, algorithms, full-stack systems, and project development.
            </p>
            
            <div className="git-card">
              <div className="status-badge" style={{ marginBottom: '1rem' }}>
                <span className="status-dot"></span> Active Undergraduate
              </div>
              
              <div className="git-tags">
                <span className="git-tag">Software Engineering</span>
                <span className="git-tag">Full-Stack Development</span>
                <span className="git-tag">Algorithms & Data Structures</span>
                <span className="git-tag">Database Systems</span>
                <span className="git-tag">Human Computer Interaction</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 2: Leadership & Activities */}
        <div className="git-node">
          <div className="git-line"></div>
          <div className="git-point"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">commit lead404</span>
            </div>
            
            <h3 className="git-title">Head of Technical Support Team (Team Lead)</h3>
            <p className="git-desc">
              Compuvate Association, NSBM Green University. Led and coordinated technical support team members across university workshops and competitions.
            </p>
            
            <div className="git-card">
              <div className="git-tags">
                <span className="git-tag">Ideathon 2.0 (Workshop & Competition)</span>
                <span className="git-tag">AzureX 1.0</span>
                <span className="git-tag">ProblemLab 1.0</span>
                <span className="git-tag">Event Coordination & Delegation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 3: Research */}
        <div className="git-node">
          <div className="git-line"></div>
          <div className="git-point"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">commit res789a</span>
            </div>
            
            <h3 className="git-title">Research Experience: Post-Quantum Cryptography for IoT</h3>
            <p className="git-desc">
              Researched post-quantum cryptographic approaches tailored for securing resource-constrained IoT devices against future quantum threats.
            </p>
          </div>
        </div>

        {/* Node 4: Status */}
        <div className="git-node">
          <div className="git-line last"></div>
          <div className="git-point empty"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">HEAD &rarr; status</span>
            </div>
            
            <h3 className="git-title">Seeking Project Manager Internship</h3>
            <p className="git-desc">
              Eager to contribute technical foundations, task delegation skills, and stakeholder management to real-world software and cross-functional teams.
            </p>
            
            <div className="git-card">
              <div className="status-badge">
                <span className="status-dot"></span> Open to PM / Technical Internships
              </div>
              
              <div className="git-card-footer">
                <span className="git-footer-text">NSBM GREEN UNIVERSITY</span>
                <span className="git-footer-text">SRI LANKA</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}