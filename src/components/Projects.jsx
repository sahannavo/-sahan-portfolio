import React from 'react';

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const PROJECTS = [
  {
    type: 'client',
    tag: 'commit client-2026',
    title: 'New Step Finance Website',
    badge: 'Client Project (Freelance) · 2026',
    description: 'Engaged by an Australian mortgage broker to manage the complete lifecycle from requirements to delivery: a unique, custom-designed multi-page finance platform of 30+ pages covering home loans, refinancing, and guides. Built interactive financial calculators (savings growth & home-loan offset) with Chart.js, an Express backend with APIs for blogs, file uploads, AI-powered web assistant, and an admin dashboard for client content management.',
    image: '/new_step_finance.png',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'Prisma', 'JWT', 'Chart.js', 'GSAP'],
    links: [
      { label: 'Client Handover · Australian Mortgage Broker', url: null }
    ]
  },
  {
    type: 'team-lead',
    tag: 'commit team-lead-ux',
    title: 'BIO POHORA (Team Lead)',
    badge: 'Team Leadership · Agricultural Platform',
    description: 'Agricultural fertilizer subsidy platform designed to improve transparency through digital tokens, QR verification, and allocation tracking. Directed user-centered design workflow, task delegation, biometric login, and offline-capable interactions.',
    image: '/bio_pohora.png',
    stack: ['Team Leadership', 'Human Computer Interaction', 'Mobile UX', 'User-Centered Design', 'Figma'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit recrute-ai',
    title: 'RecruteAI',
    badge: 'AI Recruitment Platform',
    description: 'AI-enhanced recruitment platform featuring intelligent candidate matching, automated skill assessments, and pipeline tracking. Developed C# backend architecture for data processing paired with a responsive frontend.',
    image: '/recrute_ai.jpg',
    stack: ['C#', 'HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', url: 'https://github.com/sahannavo/recruitment-platform' }
    ]
  },
  {
    type: 'project',
    tag: 'commit inklink-fullstack',
    title: 'InkLink',
    badge: 'Full-Stack Creator Platform',
    description: 'Full-stack creative story-sharing platform with real-time feeds, live-story formats, creator profiles, and secure authentication built with Spring Boot and MySQL.',
    image: '/inklink.jpg',
    stack: ['Spring Boot', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', url: 'https://github.com/sahannavo/InkLink' }
    ]
  },
  {
    type: 'project',
    tag: 'commit spotfinder-app',
    title: 'SpotFinder',
    badge: 'Mobile Signal Monitoring',
    description: 'Developed a Flutter app for monitoring cellular signal strength with live dBm readings, peak signal, and an animated radar-style signal-quality indicator using Android platform channels.',
    image: '/spotfinder.png',
    stack: ['Flutter', 'Dart', 'Android Channels'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit botfriend-ai',
    title: 'BotFriend AI',
    badge: 'AI Chatbot Web App',
    description: 'AI chatbot interface with typing indicator, input validation, and server-side conversation history, backed by an Express API that connects to Google Gemma via OpenRouter.',
    image: '/botfriend.png',
    stack: ['Node.js', 'Express', 'OpenRouter API', 'JavaScript'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit qraura-tool',
    title: 'QR Aura',
    badge: 'Customizable QR Generator',
    description: 'Browser-based QR tool that generates codes as users type, with controls for colors, size, margins, and error-correction level, plus PNG/JPG download and locally stored history.',
    image: '/qraura.png',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Client-Side Canvas'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit find-expression',
    title: 'Find Expression',
    badge: 'Real-Time Emotion Recognition',
    description: 'Webcam app that detects faces in real time, recognizes 7 emotions, and overlays face bounding boxes and 68-point facial landmarks on the video feed.',
    image: '/findexpression.jpg',
    stack: ['face-api.js', 'Python', 'JavaScript'],
    links: [
      { label: 'Code', url: 'https://github.com/sahannavo/findExpression' }
    ]
  }
];

export default function Projects({ onBack }) {
  return (
    <section id="projects" className="section-page">
      <button className="back-btn cursor-target" onClick={onBack}>
        &larr; Back to Home
      </button>
      
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Featured & Client Projects</h2>
      </div>

      <div className="project-timeline">
        {PROJECTS.map((project, index) => (
          <div className="project-node" key={index}>
            <div className="project-node-point"></div>

            <div className="project-node-content">
              <div className="project-node-meta">
                <span className="project-node-tag">{project.tag}</span>
              </div>

              <h3 className="project-node-title">{project.title}</h3>
              <p className="project-node-desc">{project.description}</p>

              <div className="project-card">
                <div className="project-card-image-box">
                  <img src={project.image} alt={project.title} />
                  <span className="project-card-badge">{project.badge}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-tags">
                    {project.stack.map((tech, i) => (
                      <span className="project-tag" key={i}>{tech}</span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="project-card-links">
                      {project.links.map((link, i) => (
                        link.url ? (
                          <a 
                            key={i} 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link cursor-target"
                          >
                            <ArrowUpRight /> {link.label}
                          </a>
                        ) : (
                          <span key={i} className="project-link-text">
                            {link.label}
                          </span>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}