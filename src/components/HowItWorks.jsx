import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book",
      description: "Pick a time that fits."
    },
    {
      number: "2",
      title: "Diagnostic",
      description: "Find the highest-leverage gaps."
    },
    {
      number: "3",
      title: "Weekly Momentum",
      description: "Targeted practice → confident performance."
    }
  ];

  return (
    <section id="how" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>How It Works</h2>
          <p className="text-lg">
            Simple, focused process to get you from confused to confident.
          </p>
        </div>
        
        <div className="how-it-works-steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-icon">
                {step.number}
              </div>
              <h3>{step.title}</h3>
              <p className="text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;