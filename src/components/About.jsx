import React from 'react';
import { Code, Server, Cpu, Dumbbell, Trophy } from 'lucide-react';
import './About.css';

const About = () => {
  const highlightCards = [
    {
      icon: <Code size={32} />,
      title: "NLP & GenAI",
      desc: "Architecting applications using LLMs, LangChain, CrewAI, and fine-tuning techniques."
    },
    {
      icon: <Server size={32} />,
      title: "Machine Learning",
      desc: "Building and deploying end-to-end models for propensity, churn, and recommendation systems."
    },
    {
      icon: <Cpu size={32} />,
      title: "Full-Stack AI Architecture",
      desc: "Integrating FastAPI, React, and Vector DBs with advanced AI capabilities."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a results-driven Data Scientist and AI/ML Engineering Leader with 15 years of experience defining, leading, and evangelizing analytics solutions across retail e-commerce.
            </p>
            <p>
              My expertise spans the entire model development and deployment lifecycle. I am passionate about thought leadership and innovation, specifically focusing on search optimization, AI Stylists, GenAI, LLMs, and multi-modal vector search systems.
            </p>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number text-gradient">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number text-gradient">Expert</span>
                <span className="stat-label">in GenAI & NLP</span>
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            {highlightCards.map((card, idx) => (
              <div key={idx} className="highlight-card glass">
                <div className="card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hobbies-container">
          <h3 className="hobbies-title text-gradient">Interests & Hobbies</h3>
          <div className="hobbies-grid">
            <div className="hobby-card glass">
              <div className="hobby-icon"><Dumbbell size={28} /></div>
              <div className="hobby-content">
                <h4>Fitness Enthusiast</h4>
                <p>Passionate about strength training and maintaining peak physical and mental health. Strong believer that discipline in fitness builds the same resilience and consistency needed in high-performance engineering roles.</p>
              </div>
            </div>
            <div className="hobby-card glass">
              <div className="hobby-icon"><Trophy size={28} /></div>
              <div className="hobby-content">
                <h4>Passionate Cricketer</h4>
                <p>Avid cricket player with a deep appreciation for team strategy, adaptability, and performing under pressure — values that translate directly into leading data science teams and delivering mission-critical AI solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
