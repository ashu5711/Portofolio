import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "NLP, GenAI & LLMs",
      skills: ["LangChain", "LangGraph", "Agentic AI", "CrewAI", "Amazon Bedrock", "Claude Sonnet", "OpenAI GPT", "Fine-Tuning (LoRA)"]
    },
    {
      title: "Machine & Deep Learning",
      skills: ["TensorFlow", "Keras", "Computer Vision (CLIP)", "Light GBM", "Propensity Modeling", "CNN/RNN/LSTM", "MLflow"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Python", "FastAPI", "AWS", "Docker", "Vertex AI (GCP)", "REST APIs", "Airflow ETL"]
    },
    {
      title: "Databases & Vector DBs",
      skills: ["ChromaDB", "Pinecone", "FAISS", "SQL", "MongoDB", "Cassandra"]
    },
    {
      title: "Frontend Development",
      skills: ["React 18", "Vite", "JavaScript", "Framer Motion", "React Router"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Technical Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass">
              <h3>{category.title}</h3>
              <div className="skills-container">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
