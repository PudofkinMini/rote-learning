import React from 'react';

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1>Ace AP & First-Year Math/Physics — without spinning your wheels</h1>
            <p className="text-lg mb-xl">
              Focused 1:1 tutoring from a 5th-year actuarial science specialist. 
              iPad-powered notes, exam-style drills, and calm, clear explanations.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn--lg">
                Book a 15-min Fit Call
              </a>
              <a href="#programs" className="btn btn--secondary btn--lg">
                View Programs
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/placeholder-hero.jpg" 
              alt="Tutor explaining calculus on an iPad"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: 'inherit',
                display: 'none' // Hide until real image is added
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = 'Hero Image Placeholder';
              }}
            />
            Hero Image Placeholder
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;