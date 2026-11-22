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
    description: 'Designed and built a custom 30+ page finance website for an Australian mortgage broker from requirements to delivery. Built a responsive React front end, an Express.js backend with JWT authentication and REST APIs, interactive Chart.js financial calculators (savings growth and home-loan offset), and a full admin dashboard for client content management.',
    image: '/new_step_finance.png',
    stack: ['React', 'Node.js', 'Express.js', 'Prisma', 'JWT', 'Chart.js', 'REST APIs'],
    links: [
      { label: 'Client Project · Australian Mortgage Broker', url: null }
    ]
  },
  {
    type: 'project',
    tag: 'commit agrovision-ml',
    title: 'AgroVision — AI Crop Disease Detection App',
    badge: 'Group Project · 2026 (Ongoing)',
    description: 'Part of an 8-member team building an intelligent mobile application for farmers featuring on-device AI leaf disease diagnosis. Responsible for training, optimizing, and integrating the machine learning model using TensorFlow Lite with Flutter.',
    image: '/bio_pohora.png',
    stack: ['Flutter', 'Dart', 'TensorFlow Lite', 'Python', 'Firebase'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit inklink-fullstack',
    title: 'InkLink — Creative Storytelling Platform',
    badge: 'Full-Stack Web Platform',
    description: 'Built a full-stack story-sharing platform with creator profiles, secure authentication, role-based access control, real-time dynamic feeds, and scalable MySQL data management backed by Spring Boot.',
    image: '/inklink.jpg',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'REST APIs', 'JavaScript'],
    links: [
      { label: 'Code', url: 'https://github.com/sahannavo/InkLink' }
    ]
  },
  {
    type: 'project',
    tag: 'commit recrute-ai',
    title: 'RecruteAI — AI-Enhanced Recruitment Platform',
    badge: 'C# & Web Application',
    description: 'Built an AI-enhanced recruitment platform with intelligent candidate matching, automated skill assessments, and an application pipeline dashboard with a robust C# backend for complex data processing.',
    image: '/recrute_ai.jpg',
    stack: ['C#', 'HTML5', 'CSS3', 'JavaScript'],
    links: [
      { label: 'Code', url: 'https://github.com/sahannavo/recruitment-platform' }
    ]
  },
  {
    type: 'project',
    tag: 'commit botfriend-ai',
    title: 'BotFriend — AI Chatbot Web App',
    badge: 'Node & OpenRouter AI',
    description: 'Built an AI chatbot web app featuring a typing indicator, input validation, and server-side conversation history, backed by an Express API communicating with Google Gemma via OpenRouter.',
    image: '/botfriend.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'OpenRouter API'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit spotfinder-app',
    title: 'SpotFinder — Signal Monitoring Prototype',
    badge: 'Flutter & Android Channels',
    description: 'Developed a Flutter mobile application for monitoring cellular signal strength with live dBm readings, peak signal tracking, and an animated radar-style indicator connected to Android telephony platform channels.',
    image: '/spotfinder.png',
    stack: ['Flutter', 'Dart', 'Android Telephony Channels'],
    links: []
  },
  {
    type: 'team-lead',
    tag: 'commit bio-pohora',
    title: 'BIO Pohora — Fertilizer Subsidy Platform',
    badge: 'Mobile UX & Team Lead',
    description: 'Led a student team designing a mobile solution to improve transparency and efficiency in fertilizer subsidy distribution through digital tokens, QR verification, and allocation tracking.',
    image: '/bio_pohora.png',
    stack: ['Mobile UX', 'User-Centered Design', 'Team Leadership'],
    links: []
  },
  {
    type: 'project',
    tag: 'commit find-expression',
    title: 'Find Expression — Emotion Recognition',
    badge: 'Computer Vision & face-api.js',
    description: 'Built a webcam web application that detects faces in real time, recognizes 7 facial expressions, and overlays 68-point facial landmarks onto live video streams.',
    image: '/findexpression.jpg',
    stack: ['HTML', 'CSS', 'JavaScript', 'face-api.js'],
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