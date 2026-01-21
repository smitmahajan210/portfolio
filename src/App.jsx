import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, MapPin, Phone, 
  Server, Cloud, Brain, Code2, 
  Sun, Moon, ExternalLink
} from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : "";
  }, [theme]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            style={{
              background: 'transparent', border: '1px solid var(--border)',
              color: 'var(--text-primary)', padding: '8px', borderRadius: '50%',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <span style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--text-primary)', fontFamily: 'Fira Code', letterSpacing: '-1px' }}>SM.</span>
        </div>

        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header id="about" className="hero-section">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="hero-name">Smit Mahajan</h1>
          <div className="hero-role">Software Developer | AI/ML Graduate Student</div>
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

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          
          {/* 1. UB (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              {/* Header: Logo + Date */}
              <div className="timeline-header">
                <a href="https://www.buffalo.edu/" target="_blank" rel="noreferrer" className="timeline-logo-link">
                  <img src="/portfolio/ub.png" alt="UB" className="timeline-logo" onError={(e) => e.target.style.display = 'none'} />
                </a>
                <span style={{color: 'var(--accent)', fontFamily:'monospace', fontSize: '0.9rem'}}>Aug 2025 – Dec 2026</span>
              </div>
              
              <h3 style={{margin: '0.5rem 0'}}>MS Computer Science (AI/ML)</h3>
              <p style={{color:'var(--text-primary)'}}>University at Buffalo – SUNY</p>
            </motion.div>
          </div>

          {/* 2. TCS (Left) */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              {/* Header: Logo + Date */}
              <div className="timeline-header">
                <a href="https://www.tcs.com/" target="_blank" rel="noreferrer" className="timeline-logo-link">
                  <img src="/portfolio/tcs.png" alt="TCS" className="timeline-logo" onError={(e) => e.target.style.display = 'none'} />
                </a>
                <span style={{color: 'var(--accent)', fontFamily:'monospace', fontSize: '0.9rem'}}>July 2022 – Aug 2025</span>
              </div>

              <h3 style={{margin: '0.5rem 0'}}>Software Developer</h3>
              <p style={{color:'var(--text-primary)'}}>Tata Consultancy Services (Client: ABN AMRO)</p>
              <ul style={{fontSize:'0.9rem', paddingLeft: '1rem'}}>
                <li>Designed scalable backend automation frameworks using Python & REST APIs.</li>
                <li>Reduced deployment time by 2 days using Azure DevOps pipelines.</li>
              </ul>
            </motion.div>
          </div>

          {/* 3. TCS Associate (Right) */}
          <div className="timeline-item right">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
              {/* Header: Logo + Date */}
              <div className="timeline-header">
                <a href="https://www.tcs.com/" target="_blank" rel="noreferrer" className="timeline-logo-link">
                  <img src="/portfolio/tcs.png" alt="TCS" className="timeline-logo" onError={(e) => e.target.style.display = 'none'} />
                </a>
                <span style={{color: 'var(--accent)', fontFamily:'monospace', fontSize: '0.9rem'}}>Aug 2021 – June 2022</span>
              </div>

              <h3 style={{margin: '0.5rem 0'}}>Associate Software Developer</h3>
              <p style={{color:'var(--text-primary)'}}>Tata Consultancy Services</p>
            </motion.div>
          </div>

          {/* 4. Pune (Left) */}
          <div className="timeline-item left">
            <div className="timeline-dot"></div>
            <motion.div className="timeline-content" initial="hidden" whileInView="visible" variants={fadeIn}>
               {/* Header: Logo + Date */}
               <div className="timeline-header">
                <a href="http://www.unipune.ac.in/" target="_blank" rel="noreferrer" className="timeline-logo-link">
                  <img src="/portfolio/pune.png" alt="Pune University" className="timeline-logo" onError={(e) => e.target.style.display = 'none'} />
                </a>
                <span style={{color: 'var(--accent)', fontFamily:'monospace', fontSize: '0.9rem'}}>Aug 2017 – Jun 2021</span>
              </div>

              <h3 style={{margin: '0.5rem 0'}}>Bachelor of Engineering</h3>
              <p style={{color:'var(--text-primary)'}}>University of Pune</p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="section-container">
        <h2 className="section-title">Academic Projects</h2>
        <div className="grid-container">
          
          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3>Resume Skill Verifier</h3>
            <p>Engineered an ML pipeline to parse resumes and verify technical skills against job requirements using NLP.</p>
            <div className="tag-container"><span className="tag">NLP</span><span className="tag">Python</span><span className="tag">Automation</span></div>
            <a href="https://github.com/smitmahajan210/resume-skill-verifier" target="_blank" rel="noreferrer" className="project-link-btn">
              View Code <ExternalLink size={16}/>
            </a>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3>MediTriage Live</h3>
            <p>AI-driven medical triage system designed to assess patient symptoms and recommend appropriate care pathways.</p>
            <div className="tag-container"><span className="tag">AI</span><span className="tag">Healthcare</span><span className="tag">Full Stack</span></div>
            <a href="https://github.com/smitmahajan210/meditriage-live" target="_blank" rel="noreferrer" className="project-link-btn">
              View Code <ExternalLink size={16}/>
            </a>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3>Brain Tumor Classification</h3>
            <p>Deep learning model utilizing CNNs to classify MRI scans for early tumor detection with high accuracy.</p>
            <div className="tag-container"><span className="tag">Deep Learning</span><span className="tag">CNN</span><span className="tag">Medical Imaging</span></div>
            <a href="https://github.com/smitmahajan210/Brain-Tumor-Classification" target="_blank" rel="noreferrer" className="project-link-btn">
              View Code <ExternalLink size={16}/>
            </a>
          </motion.div>

          <motion.div className="card" whileHover={{ y: -5 }}>
            <Code2 size={40} color="var(--accent)" style={{marginBottom:'1rem'}}/>
            <h3>Used Car Price Prediction</h3>
            <p>Designed regression-based ML models for automotive price prediction. Deployed via Django with automated notifications.</p>
            <div className="tag-container"><span className="tag">Python</span><span className="tag">Django</span><span className="tag">ML</span></div>
            <a href="https://github.com/smitmahajan210/resume-skill-verifier" target="_blank" rel="noreferrer" className="project-link-btn">
              View Code <ExternalLink size={16}/>
            </a>
          </motion.div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid-container">
          <div className="card">
            <Server size={32} style={{marginBottom:'1rem'}}/>
            <h3>Backend & DB</h3>
            <div className="tag-container">{['Python','Java','SQL','Microservices','Redis'].map(s=><span key={s} className="tag">{s}</span>)}</div>
          </div>
          <div className="card">
            <Cloud size={32} style={{marginBottom:'1rem'}}/>
            <h3>Cloud & DevOps</h3>
            <div className="tag-container">{['Azure','Docker','Kubernetes','CI/CD','Kafka'].map(s=><span key={s} className="tag">{s}</span>)}</div>
          </div>
          <div className="card">
            <Brain size={32} style={{marginBottom:'1rem'}}/>
            <h3>AI & Data</h3>
            <div className="tag-container">{['ML','NLP','PySpark','Power BI'].map(s=><span key={s} className="tag">{s}</span>)}</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem'}}>
          <h2 style={{color:'var(--text-primary)', margin:0}}>Contact Me</h2>
          <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}><Mail size={18}/> <span>smitmahajan@hotmail.com</span></div>
          <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}><Phone size={18}/> <span>(716) 520-8677</span></div>
        </div>
        <p style={{marginTop:'3rem', opacity:0.5}}>© 2026 Smit Mahajan. Built with React.</p>
      </footer>
    </div>
  );
}