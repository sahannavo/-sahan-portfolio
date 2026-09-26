import React from 'react';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

export default function Contact({ onBack }) {
  return (
    <section id="contact" className="contact-section section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      <h2 className="section-title">Let's Create <span style={{ color: '#555' }}>Something Great</span></h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', marginBottom: '3rem' }}>
        Have a project in mind, or an internship opportunity? Let's connect and build something that makes an impact.
      </p>

      <div className="code-window" style={{ margin: '0 auto', maxWidth: '700px', backgroundColor: '#141414' }}>
        <div className="code-header">
          <div className="code-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="code-title">contact.sh</div>
        </div>
        <div className="code-body" style={{ padding: '0' }}>
          <div className="contact-info">
            <a href="mailto:navodyaweersingha@gmail.com" className="contact-row cursor-target">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <span className="contact-label">EMAIL</span>
              <span className="contact-value">navodyaweersingha@gmail.com</span>
              <span className="contact-arrow"><ArrowIcon /></span>
            </a>

            <a href="tel:0711863648" className="contact-row cursor-target">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <span className="contact-label">PHONE</span>
              <span className="contact-value">0711 863 648</span>
              <span className="contact-arrow"><ArrowIcon /></span>
            </a>

            <a href="https://github.com/sahannavo" target="_blank" rel="noreferrer" className="contact-row cursor-target">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <span className="contact-label">GITHUB</span>
              <span className="contact-value">github.com/sahannavo</span>
              <span className="contact-arrow"><ArrowIcon /></span>
            </a>

            <a href="https://www.linkedin.com/in/sahan-weerasingha-a13728434" target="_blank" rel="noreferrer" className="contact-row cursor-target">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <span className="contact-label">LINKEDIN</span>
              <span className="contact-value">linkedin.com/in/sahan-weerasingha</span>
              <span className="contact-arrow"><ArrowIcon /></span>
            </a>

            <div className="contact-row no-link">
              <div className="contact-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <span className="contact-label">LOCATION</span>
              <span className="contact-value">Kegalle, Sri Lanka</span>
              <span className="contact-arrow"><ArrowIcon /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
