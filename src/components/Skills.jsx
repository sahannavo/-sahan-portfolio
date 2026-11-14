import React from 'react';

export default function Skills({ onBack }) {
  return (
    <section id="about" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      <h2 className="section-title">Skills & Core Competencies</h2>
      
      <div className="skills-container">
        {/* Core PM & Leadership Competencies */}
        <div className="skill-category">
          <h3>// PROJECT MANAGEMENT & LEADERSHIP</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>P</span>
              <span className="skill-name">Project Planning & Task Delegation</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>T</span>
              <span className="skill-name">Team Leadership & Collaboration</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>C</span>
              <span className="skill-name">Client Communication & Requirements Gathering</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>S</span>
              <span className="skill-name">Stakeholder Feedback & Iteration</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>U</span>
              <span className="skill-name">User-Centered Design Workflow</span>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="skill-category">
          <h3>// PROGRAMMING LANGUAGES</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#f89820', color: '#000' }}>J</span>
              <span className="skill-name">Java</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#4a90e2', color: '#000' }}>P</span>
              <span className="skill-name">Python</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#9b59b6', color: '#000' }}>C#</span>
              <span className="skill-name">C#</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#f1c40f', color: '#000' }}>JS</span>
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#02569B', color: '#fff' }}>D</span>
              <span className="skill-name">Dart</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#A8B9CC', color: '#000' }}>C</span>
              <span className="skill-name">C</span>
            </div>
          </div>
        </div>

        {/* Frameworks & Backend */}
        <div className="skill-category">
          <h3>// FRAMEWORKS & BACKEND</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#61dafb', color: '#000' }}>R</span>
              <span className="skill-name">React</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#68a063', color: '#000' }}>N</span>
              <span className="skill-name">Node.js / Express</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#689f38', color: '#000' }}>S</span>
              <span className="skill-name">Spring Boot</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#02569B', color: '#fff' }}>F</span>
              <span className="skill-name">Flutter</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#2D3748', color: '#fff' }}>P</span>
              <span className="skill-name">Prisma</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#e65100', color: '#000' }}>H</span>
              <span className="skill-name">HTML5 / CSS3</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#88ce02', color: '#000' }}>G</span>
              <span className="skill-name">GSAP / Three.js</span>
            </div>
          </div>
        </div>

        {/* Databases & Tools */}
        <div className="skill-category">
          <h3>// DATABASES & TOOLS</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#4a90e2', color: '#000' }}>M</span>
              <span className="skill-name">MySQL</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#003B57', color: '#fff' }}>S</span>
              <span className="skill-name">SQLite</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#f1502f', color: '#000' }}>G</span>
              <span className="skill-name">Git & GitHub</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#a259ff', color: '#000' }}>F</span>
              <span className="skill-name">Figma</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#007ACC', color: '#fff' }}>V</span>
              <span className="skill-name">VS Code / Visual Studio</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#000000', color: '#fff' }}>I</span>
              <span className="skill-name">IntelliJ IDEA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-extended">
        
        {/* Left: Code Window */}
        <div className="skills-quote-card">
          <div className="code-window" style={{ margin: 0, maxWidth: '100%' }}>
            <div className="code-header">
              <div className="code-dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="code-title">summary.md</div>
            </div>
            <div className="code-body">
              <div style={{ color: '#888', whiteSpace: 'pre-wrap' }}>
{`## Professional Profile
Hands-on experience leading team projects
and independently managing client websites
from requirements to delivery.

Skilled in planning, task delegation,
stakeholder communication, and iterating
on feedback with a solid technical foundation.`}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Skills Timeline */}
        <div className="skills-details-timeline">
          
          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Project Management & Leadership</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                </div>
              </div>
              <p>Experience managing full project lifecycles from stakeholder requirements, sprints, delegation, to delivery.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Full-Stack Web Engineering</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Modern applications with React, Node.js, Express, Spring Boot, Prisma, and MySQL.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Mobile & UI/UX Workflow</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>User-centered design in Figma, Flutter app prototyping with native platform channels.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Collaboration & Version Control</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                </div>
              </div>
              <p>Git branching strategies, code reviews, documentation, and leading technical support teams.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}