import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, MapPin, Phone, 
  Server, Cloud, Brain, Terminal, Code2, 
  Sun, Moon 
} from "lucide-react";

export default function App() {
  // --- STATE ---
  const [theme, setTheme] = useState("dark");

  // --- EFFECT: Update Body Class for CSS ---
  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  // --- ANIMATION HELPER ---
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* =========================================
          1. NAVBAR
          Left: Toggle Button + Initials
          Right: Navigation Links
         ========================================= */}
      <nav className="navbar">
        
        {/* LEFT GROUP: Button & Initials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
              padding: '8px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s'
            }}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <span style={{ 
            fontWeight: '800', 
            fontSize: '1.5rem', 
            color: 'var(--text-primary)',
            fontFamily: 'Fira Code, monospace',
            letterSpacing: '-1px'
          }}>
            SM.
          </span>
        </div>

        {/* RIGHT GROUP: Links */}
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* =========================================
          2. HERO SECTION
         ========================================= */}
      <header id="about" className="hero-section">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="hero-name">Smit Mahajan</h1>
          <div className="hero-role">
            Software Developer | AI/ML Graduate Student
          </div>
          <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Software Developer with 4+ years of experience designing and scaling distributed backend systems, 
            data pipelines, and cloud-native applications. Currently pursuing MS in Computer Science (AI/ML) at SUNY Buffalo.
          </p>
          
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <a href="https://github.com/smitmahajan210" target="_blank" rel="noreferrer" className="nav-link"><Github /></a>
            <a href="https://www.linkedin.com/in/smitmahajan/" target="_blank" rel="noreferrer" className="nav-link"><Linkedin /></a>
            <a href="mailto:smitmahajan@hotmail.com" className="nav-link"><Mail /></a>
          </div>
        </motion.div>
      </header>

      {/* =========================================
          3. EXPERIENCE TIMELINE
         ========================================= */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          
          {/* ITEM 1: Buffalo (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              <span style={{color: 'var(--accent)', fontFamily:'monospace'}}>Aug 2025 – Dec 2026</span>
              <h3 style={{margin: '0.5rem 0'}}>MS Computer Science (AI/ML)</h3>
              <p style={{color:'var(--text-primary)'}}>University at Buffalo – SUNY</p>
              <p style={{fontSize:'0.9rem'}}>Coursework: Deep Learning, Algorithms, Operating Systems.</p>
            </motion.div>
          </div>

          {/* ITEM 2: TCS - ABN AMRO (Left) */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              <span style={{color: 'var(--accent)', fontFamily:'monospace'}}>July 2022 – Aug 2025</span>
              <h3 style={{margin: '0.5rem 0'}}>Software Developer</h3>
              <p style={{color:'var(--text-primary)'}}>Tata Consultancy Services (Client: ABN AMRO)</p>
              <ul style={{fontSize:'0.9rem', paddingLeft: '1rem'}}>
                <li>Designed scalable backend automation frameworks using Python & REST APIs.</li>
                <li>Reduced deployment time by 2 days using Azure DevOps pipelines.</li>
                <li>Improved data delivery throughput by 25% using Databricks optimization.</li>
              </ul>
            </motion.div>
          </div>

          {/* ITEM 3: TCS - Associate (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              <span style={{color: 'var(--accent)', fontFamily:'monospace'}}>Aug 2021 – June 2022</span>
              <h3 style={{margin: '0.5rem 0'}}>Associate Software Developer</h3>
              <p style={{color:'var(--text-primary)'}}>Tata Consultancy Services</p>
              <ul style={{fontSize:'0.9rem', paddingLeft: '1rem'}}>
                <li>Migrated TCS Ultimatix portal to mobile (Android/iOS).</li>
                <li>Increased application processing speed by 1.5x.</li>
              </ul>
            </motion.div>
          </div>

          {/* ITEM 4: Pune (Left) */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              <span style={{color: 'var(--accent)', fontFamily:'monospace'}}>Aug 2017 – Jun 2021</span>
              <h3 style={{margin: '0.5rem 0'}}>Bachelor of Engineering</h3>
              <p style={{color:'var(--text-primary)'}}>University of Pune</p>
              <p style={{fontSize:'0.9rem'}}>Coursework: DBMS, AI & Robotics, Data Structures.</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          4. PROJECTS GRID
         ========================================= */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="grid-container">
          
          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3 style={{marginTop:0}}>Used Car Price Prediction</h3>
            <p>Designed regression-based ML models for automotive price prediction. Deployed via Django with automated notifications.</p>
            <div className="tag-container">
              <span className="tag">Python</span>
              <span className="tag">Django</span>
              <span className="tag">ML</span>
            </div>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3 style={{marginTop:0}}>Resume Skill Verifier</h3>
            <p>Engineered an ML pipeline to parse resumes and verify technical skills against job requirements using NLP.</p>
            <div className="tag-container">
              <span className="tag">NLP</span>
              <span className="tag">Python</span>
              <span className="tag">Automation</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================
          5. SKILLS GRID
         ========================================= */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid-container">
          
          <div className="card">
            <Server size={32} style={{marginBottom:'1rem'}}/>
            <h3>Backend & DB</h3>
            <div className="tag-container">
              {['Python','Java','SQL','Microservices','REST APIs','Redis','PostgreSQL'].map(s=><span key={s} className="tag">{s}</span>)}
            </div>
          </div>

          <div className="card">
            <Cloud size={32} style={{marginBottom:'1rem'}}/>
            <h3>Cloud & DevOps</h3>
            <div className="tag-container">
              {['Azure','Docker','Kubernetes','CI/CD','Git','Kafka','Databricks'].map(s=><span key={s} className="tag">{s}</span>)}
            </div>
          </div>

          <div className="card">
            <Brain size={32} style={{marginBottom:'1rem'}}/>
            <h3>AI & Data</h3>
            <div className="tag-container">
              {['Machine Learning','NLP','PySpark','Power BI','MongoDB'].map(s=><span key={s} className="tag">{s}</span>)}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          6. FOOTER
         ========================================= */}
      <footer id="contact" className="footer">
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
          <h2 style={{color:'var(--text-primary)', margin:0}}>Contact Me</h2>
          <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
            <Mail size={18}/> <span>smitmahajan@hotmail.com</span>
          </div>
          <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
            <Phone size={18}/> <span>(716) 520-8677</span>
          </div>
          <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
            <MapPin size={18}/> <span>Buffalo, New York</span>
          </div>
        </div>
        <p style={{marginTop:'3rem', opacity:0.5}}>© 2026 Smit Mahajan. Built with React.</p>
      </footer>
    </div>
  );
}
