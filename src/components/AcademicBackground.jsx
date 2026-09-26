import React from 'react';

export default function AcademicBackground({ onBack }) {
  return (
    <section id="academic" className="academic-section section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>

      <div className="git-timeline">
        
        {/* Node 1 */}
        <div className="git-node">
          <div className="git-line"></div>
          <div className="git-point"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">commit a1b2c3d</span>
            </div>
            
            <h3 className="git-title">Enrolled — BSc (Hons) Computer Science</h3>
            <p className="git-desc">
              Core CS principles, software engineering methodologies, and advanced problem-solving techniques. NSBM Green University, 2024–2028.
            </p>
            
            <div className="git-card">
              <div className="gpa-header">
                <span className="gpa-label">GPA</span>
                <span className="gpa-value"><span style={{color: '#65d070'}}>3.49</span> / 4.00</span>
              </div>
              <div className="gpa-bar-bg">
                <div className="gpa-bar-fill" style={{ width: '87.25%' }}></div>
              </div>
              
              <div className="git-tags">
                <span className="git-tag">Data Structures</span>
                <span className="git-tag">Software Eng.</span>
                <span className="git-tag">Algorithms</span>
                <span className="git-tag">Databases</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node 2 */}
        <div className="git-node">
          <div className="git-line last"></div>
          <div className="git-point empty"></div>
          
          <div className="git-content">
            <div className="git-meta">
              <span className="git-ref">HEAD &rarr; status</span>
            </div>
            
            <h3 className="git-title">Third Year Undergraduate</h3>
            <p className="git-desc">
              Actively seeking an internship to apply academic knowledge in a professional environment and gain industry experience.
            </p>
            
            <div className="git-card">
              <div className="status-badge">
                <span className="status-dot"></span> Open to Internships
              </div>
              
              <div className="git-card-footer">
                <span className="git-footer-text">YEAR 03 OF 04</span>
                <span className="git-footer-text">NSBM GREEN UNIVERSITY</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
