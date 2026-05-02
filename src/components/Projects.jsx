import React from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Sty-Lyst AI Personal Stylist",
      description: "A full-stack AI personal stylist chatbot powered by Amazon Bedrock (Claude Sonnet 4). Features Comp-Lyst for outfit building and Sty-Seek for CLIP-based visual vector search across 1.6M+ items.",
      tags: ["React", "FastAPI", "ChromaDB", "Amazon Bedrock", "CLIP"],
      github: "https://github.com/ashu5711",
      live: "#"
    },
    {
      title: "Customer Propensity & Churn Models",
      description: "Developed Divisional Propensity Models and Churn Prediction Models using Light GBM and Logistic Regression to predict customer affinity and drive targeted marketing campaigns.",
      tags: ["Python", "Light GBM", "Machine Learning", "Data Science"],
      github: "https://github.com/ashu5711",
      live: "#"
    },
    {
      title: "RASA Restaurant Chatbot",
      description: "An intelligent conversational agent built using RASA to handle restaurant queries and bookings effectively.",
      tags: ["RASA", "NLP", "Python", "Chatbot"],
      github: "https://github.com/ashu5711",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} className="project-link" aria-label="GitHub Repository">
                  <Globe size={20} />
                </a>
                <a href={project.live} className="project-link" aria-label="Live Demo">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
