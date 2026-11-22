import React from 'react';

export default function Skills({ onBack }) {
  return (
    <section id="about" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      <h2 className="section-title">Skills & Core Competencies</h2>
      
      <div className="skills-container">
        {/* Core Competencies */}
        <div className="skill-category">
          <h3>// CORE SOFTWARE COMPETENCIES</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#61dafb', color: '#000' }}>F</span>
              <span className="skill-name">Front-End Development (React, HTML5, CSS3)</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#689f38', color: '#000' }}>B</span>
              <span className="skill-name">Back-End Development (Node.js, Spring Boot)</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#65d070', color: '#000' }}>FS</span>
              <span className="skill-name">Full-Stack Web Applications</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#4a90e2', color: '#000' }}>API</span>
              <span className="skill-name">REST APIs & Database Design (MySQL)</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#f1502f', color: '#000' }}>GIT</span>
              <span className="skill-name">Git, GitHub & PR Review Workflow</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#9b59b6', color: '#000' }}>SEC</span>
              <span className="skill-name">Authentication & Role-Based Access</span>
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
              <span className="skill-name">Node.js / Express.js</span>
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
              <span className="skill-badge" style={{ backgroundColor: '#FFA611', color: '#000' }}>FB</span>
              <span className="skill-name">Firebase</span>
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
{`## Software Engineering Focus
Hands-on software development experience
in Java, Python, JavaScript, C# and Dart.

Building robust full-stack applications,
designing REST APIs, and debugging
features end to end with clean Git workflows.`}
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
                <h4>Back-End & API Development</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                </div>
              </div>
              <p>Scalable RESTful services, JWT authentication, and database design with Spring Boot, Node.js/Express, MySQL, and Prisma.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Front-End & UI Engineering</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Responsive, dynamic web apps crafted with React, Vite, HTML5, CSS3, Chart.js, and smooth UI animations.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Mobile & On-Device ML</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Cross-platform apps built with Flutter and Dart, platform channels, and on-device machine learning with TensorFlow Lite.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Git Collaboration & Team Leadership</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                </div>
              </div>
              <p>Branching strategies, pull request reviews, feature debugging, and leading university technical support teams.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}