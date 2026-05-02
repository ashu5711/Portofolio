import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "MSc in AI & Machine Learning",
      school: "Liverpool John Moores University, London",
      year: "2019 – 2021"
    },
    {
      degree: "Post Graduate Diploma in Machine Learning",
      school: "IIIT Bangalore",
      year: "2019 – 2020"
    },
    {
      degree: "BE in Electronics & Communication Eng.",
      school: "Dayananda Sagar College of Engineering, Bangalore",
      year: "2006 – 2010"
    }
  ];

  const certifications = [
    {
      category: "Agentic AI",
      items: [
        "Designing Agentic AI Systems on AWS (AWS, 2025)",
        "Microsoft Certified: Agentic AI Business Solutions Architect (2025)",
        "AI Agents in LangGraph (DeepLearning.AI + LangChain, 2025)",
        "Multi AI Agent Systems with crewAI (DeepLearning.AI, 2025)",
        "The Complete Agentic AI Engineering Course (Udemy, 2025)"
      ]
    },
    {
      category: "LangChain",
      items: [
        "LangChain for LLM Application Development (DeepLearning.AI / Coursera, 2025)",
        "Functions, Tools and Agents with LangChain (DeepLearning.AI, 2025)",
        "Introduction to LangGraph (LangChain Academy, 2025)",
        "AWS Generative AI Learning Plan for Developers (AWS, 2025)",
        "IBM Generative AI Engineering Professional Certificate (IBM / Coursera, 2026)"
      ]
    },
    {
      category: "Vibe Coding",
      items: [
        "Vibe Coding with GitHub Copilot (Scrimba / GitHub, 2025)",
        "GitHub Copilot Fundamentals (Microsoft / GitHub, 2025)",
        "Vibe Coding Essentials – Build Apps with AI Specialization (Scrimba / Coursera, 2026)",
        "Vibe Coding Camp: GitHub Copilot, Cursor, Lovable, Windsurf (Udemy, 2025)",
        "Complete Prompt Engineering for AI Bootcamp (Udemy, 2025)"
      ]
    },
    {
      category: "Earlier Certifications",
      items: [
        "Google Cloud – Generative AI (Google Cloud, 2023)",
        "DeepLearning.AI – Generative AI with LLMs (DeepLearning.AI, 2023)",
        "GCP – Cloud Digital Leader (Google Cloud, 2022)",
        "Neural Networks and Deep Learning (Coursera, 2019)",
        "Machine Learning – Stanford University (Coursera / Stanford, 2019)"
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Education & Certifications</span>
        </h2>
        
        <div className="education-container">
          <div className="education-col">
            <h3 className="sub-title"><GraduationCap size={24} className="inline-icon"/> Education</h3>
            <div className="edu-list">
              {education.map((edu, index) => (
                <div key={index} className="edu-card glass">
                  <h4>{edu.degree}</h4>
                  <p className="school">{edu.school}</p>
                  <span className="year">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="cert-col">
            <h3 className="sub-title"><Award size={24} className="inline-icon"/> Certifications</h3>
            <div className="cert-list">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-category">
                  <h4 className="text-gradient">{cert.category}</h4>
                  <ul>
                    {cert.items.map((item, idx) => (
                      <li key={idx} className="glass cert-item">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
