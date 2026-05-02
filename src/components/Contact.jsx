import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle form submission here
    console.log("Form submitted:", formData);
    alert("Thanks for your message! This is a demo form.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        
        <div className="contact-container glass">
          <div className="contact-info">
            <h3>Let's talk about everything!</h3>
            <p className="contact-desc">
              Don't like forms? Send me an email directly. I'm currently open for new opportunities and always excited to connect with fellow developers.
            </p>
            
            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:ashutosh.shankar.a@gmail.com">ashutosh.shankar.a@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h4>Location</h4>
                <p>Bangalore – 560037</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Hello, I'd like to talk about..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} className="inline-icon"/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
