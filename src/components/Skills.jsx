import React from 'react';

export default function Skills({ onBack }) {
  return (
    <section id="about" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>// LANGUAGES</h3>
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
          </div>
        </div>
        <div className="skill-category">
          <h3>// FRAMEWORKS</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#689f38', color: '#000' }}>S</span>
              <span className="skill-name">Spring Boot</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#eeeeee', color: '#000' }}>U</span>
              <span className="skill-name">Unity</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#e65100', color: '#000' }}>H</span>
              <span className="skill-name">HTML/CSS</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#61dafb', color: '#000' }}>R</span>
              <span className="skill-name">React</span>
            </div>
          </div>
        </div>
        <div className="skill-category">
          <h3>// TOOLS & DATA</h3>
          <div className="skill-list">
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#4a90e2', color: '#000' }}>M</span>
              <span className="skill-name">MySQL</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#f1502f', color: '#000' }}>G</span>
              <span className="skill-name">Git</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#000000', color: '#fff' }}>I</span>
              <span className="skill-name">IntelliJ</span>
            </div>
            <div className="skill-item cursor-target">
              <span className="skill-badge" style={{ backgroundColor: '#a259ff', color: '#000' }}>F</span>
              <span className="skill-name">Figma</span>
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
              <div className="code-title">skills.js</div>
            </div>
            <div className="code-body">
              <div style={{ color: '#888', whiteSpace: 'pre-wrap' }}>
{`/**
 * I build logic-driven digital
 * solutions that are efficient,
 * scalable, clean and user-focused.
 */`}
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
                <h4>Software Development</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Strong foundation in object-oriented programming, algorithms, and clean architecture using Java and Python.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Full-Stack Frameworks</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Experience building secure backends and databases using Spring Boot and MySQL.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-line"></div>
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Game Development</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                  <div className="bar empty"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Interactive 3D environments, physics, and gameplay mechanics built with Unity and C#.</p>
            </div>
          </div>

          <div className="skill-timeline-node">
            <div className="skill-timeline-point"></div>
            <div className="skill-timeline-content">
              <div className="skill-timeline-header">
                <h4>Tools & Design</h4>
                <div className="skill-bars">
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar filled"></div>
                  <div className="bar empty"></div>
                </div>
              </div>
              <p>Proficient with Git, IntelliJ, Figma, and modern development workflows.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
