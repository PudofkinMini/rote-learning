import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    course: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log form data to console as specified in requirements
    console.log('Form submission data:', formData);
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      role: '',
      course: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>Get Started</h2>
          <div className="contact-intro">
            <p className="text-lg">
              Tell me about your goals and timeline. I'll reply with next steps.
            </p>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="role">Role *</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Select your role</option>
                <option value="Student">Student</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="e.g., AP Calculus BC, Uni Physics I"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your goals, timeline, and any specific challenges you're facing..."
              />
            </div>
            
            <button type="submit" className="btn btn--lg" style={{ width: '100%' }}>
              Send Inquiry
            </button>
            
            {showSuccess && (
              <div className="success-message">
                Thanks—message received! I'll get back to you within 24 hours.
              </div>
            )}
          </form>
          
          <div className="contact-email">
            <p>Prefer email?</p>
            <a href="mailto:hello@rotelearning.ca" className="btn btn--secondary">
              hello@rotelearning.ca
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;