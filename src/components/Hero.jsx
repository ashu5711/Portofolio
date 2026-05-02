import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
      </div>
      
      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <span className="greeting text-gradient">Hello, I'm</span>
          <h1 className="title">
            Ashutosh Shankar
          </h1>
          <h2 className="subtitle">
            Lead Data Scientist & AI/ML Engineering Leader
          </h2>
          <p className="description">
            Results-driven Data Scientist and AI/ML Engineering Leader with 15 years of experience. Passionate about innovation across NLP, GenAI, LLMs, Agentic AI, and full-stack AI product development.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={18} className="inline-icon" />
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="profile-image-container glass">
            <img src={profileImg} alt="Ashutosh Shankar" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
