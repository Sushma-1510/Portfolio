import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectGrid from './components/ProjectGrid';
import GlassCard from './components/GlassCard';
import NeonButton from './components/NeonButton';
import SocialSidebar from './components/SocialSidebar';
import profileImg from './assets/Profile.jpg';
import EducationSection from './components/EducationSection';

import { useEffect } from 'react';

function App() {

  // Scroll Animation Logic
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          // optional: remove active to re-animate 
          // reveals[i].classList.remove('active'); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="app-container">
      {/* THEME BACKGROUNDS */}
      <div className="cyber-sun"></div>
      <div className="grid-bg"></div>

      <SocialSidebar />

      {/* HERO SECTION (Split Layout) */}
      <section id="home" className="section full-height">
        <div className="hero-wrapper">

          {/* LEFT COLUMN */}
          <div className="hero-left">
            <p style={{ fontFamily: 'var(--font-heading)', color: 'var(--neon-blue)', fontSize: '1.2rem' }}>// SYSTEM.INIT</p>
            <h1 className="hero-name glitch" data-text="SUSHMA">SUSHMA</h1>
            <div style={{ marginTop: '20px' }}>
              <a href="mailto:sushmaperla15@gmail.com" style={{ textDecoration: 'none' }}>
                <NeonButton style={{
                  background: 'rgba(0, 243, 255, 0.1)',
                  border: '1px solid var(--neon-blue)',
                  color: 'var(--neon-blue)',
                  boxShadow: '0 0 10px var(--neon-blue)'
                }}>
                  Let's Connect
                </NeonButton>
              </a>
            </div>
          </div>

          {/* CENTER COLUMN: Portrait */}
          <div className="hero-center">
            <div className="portrait-frame cyber-border">
              <div className="portrait-img" style={{ backgroundImage: `url(${profileImg})` }}></div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="hero-right">
            <h2 className="hero-title">
              <span style={{ color: 'var(--neon-purple)', fontSize: '1.5rem', display: 'block' }}>FULL STACK</span>
              DEVELOPER
            </h2>
            <p style={{ marginTop: '20px', maxWidth: '300px', color: '#ccc' }}>
              Building the future with intelligent web systems.
            </p>
            <div style={{ marginTop: '30px' }}>
              <a href="./resume_2.pdf" target="_blank" style={{ color: 'var(--neon-blue)', fontSize: '0.9rem', letterSpacing: '2px', textDecoration: 'underline' }}>
                &gt; ACCESS RESUME
              </a>
            </div>
          </div>

        </div>
      </section>



      {/* ABOUT SECTION */}
      <section id="about" className="section center-content">
        <AboutSection />
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section center-content">
        <EducationSection />
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section center-content">
        <ProjectGrid />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section center-content">
        <div style={{
          width: '100%',
          maxWidth: '600px',
          padding: '40px',
          background: 'rgba(5, 10, 20, 0.8)',
          border: '1px solid var(--neon-blue)',
          boxShadow: '0 0 40px rgba(0, 243, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Corner Accents */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--neon-pink)', borderLeft: '2px solid var(--neon-pink)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--neon-pink)', borderRight: '2px solid var(--neon-pink)' }}></div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '3px',
              marginBottom: '10px',
              textShadow: '0 0 10px var(--neon-blue)',
              textTransform: 'uppercase'
            }}>
              Get In Touch
            </h2>

            <div style={{
              display: 'inline-block',
              padding: '5px 15px',
              background: 'rgba(0, 255, 0, 0.1)',
              border: '1px solid #0f0',
              color: '#0f0',
              fontSize: '0.8rem',
              fontFamily: 'monospace',
              marginBottom: '30px',
              boxShadow: '0 0 5px #0f0'
            }}>
              ● STATUS: AVAILABLE
            </div>

            <p style={{ color: '#a0a0b0', marginBottom: '40px', fontSize: '1.1rem' }}>
              Ready to collaborate on the next big thing? <br />
              Open a communication channel below.
            </p>

            <a href="mailto:sushmaperla15@gmail.com" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'transparent',
                border: '2px solid var(--neon-blue)',
                padding: '15px 40px',
                color: '#fff',
                fontSize: '1.2rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '2px',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase'
              }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--neon-blue)';
                  e.target.style.color = '#000';
                  e.target.style.boxShadow = '0 0 30px var(--neon-blue)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#fff';
                  e.target.style.boxShadow = 'none';
                }}
              >
                [ CLICK_TO_CONNECT ]
              </button>
            </a>

            <p style={{ marginTop: '20px', fontFamily: 'monospace', color: '#555', fontSize: '0.9rem' }}>
              ID: sushmaperla15@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Navbar />
    </div>
  );
}

export default App;
