import React from 'react';

const About = () => {
  const credentials = [
    "Actuarial background",
    "President Emeritus, Actuarial Students' Association",
    "iPad notes after every session"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/placeholder-avatar.png" 
              alt="Rob's headshot"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                borderRadius: '50%',
                display: 'none' // Hide until real image is added
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '👨‍🏫';
              }}
            />
            👨‍🏫
          </div>
          
          <div>
            <h2>Specialist help, delivered simply</h2>
            <p className="text-lg mb-lg">
              I'm Rob, a 5th-year actuarial science student who's passed P, FM, MAS-I, and MAS-II. 
              I've taught 200+ hours of math/physics with a focus on clarity, confidence, and exam-day readiness.
            </p>
            
            <ul className="about-bullets">
              {credentials.map((credential, index) => (
                <li key={index}>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;