import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Lead Engineer (AI/ML)",
      company: "JCPenney",
      period: "July 2020 – Present",
      description: [
        "Architected and built Sty-Lyst — a full-stack AI personal stylist chatbot powered by Amazon Bedrock (Claude Sonnet 4) with intelligent recommendation modes.",
        "Designed a multi-modal full-stack architecture utilizing React 18, FastAPI, ChromaDB, and Amazon S3.",
        "Implemented CLIP-powered visual inspiration search across 1.6M+ catalog images.",
        "Enhanced search result relevance by 15% using ML and NLP techniques."
      ]
    },
    {
      title: "Senior Engineer 2",
      company: "JCPenney",
      period: "September 2016 – June 2020",
      description: [
        "Designed, developed, and deployed machine learning models end-to-end for customer complaints and card fraud detection.",
        "Built Divisional Propensity Models using Light GBM and Logistic Regression to predict customer affinity.",
        "Developed Churn Prediction Models to identify high-risk segments for targeted retention marketing."
      ]
    },
    {
      title: "Senior Engineer",
      company: "Blue Yonder",
      period: "June 2014 – August 2016",
      description: [
        "Managed end-to-end project delivery, mentored team members, and contributed value-added improvements.",
        "Developed automation testing framework from scratch for warehouse labour management."
      ]
    },
    {
      title: "Senior Engineer",
      company: "Capgemini",
      period: "December 2010 – May 2014",
      description: [
        "Orchestrated a team focused on software development, product releases, and engineering tasks.",
        "Hired and trained staff, and collaborated across teams to resolve complex technical issues."
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Professional Experience</span>
        </h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot glass">
                <Briefcase size={20} className="icon" />
              </div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3>{exp.title} <span className="company">@ {exp.company}</span></h3>
                  <span className="period">{exp.period}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
