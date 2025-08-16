import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "AP Accelerator",
      duration: "6 weeks",
      bullets: [
        "Weekly 60-min 1:1",
        "Homework feedback",
        "Exam-style drills"
      ],
      price: "From $99/session"
    },
    {
      title: "Uni Rescue Pack",
      duration: "4 × 75 min",
      bullets: [
        "Midterm/assignment triage",
        "Focused problem sets",
        "Office-hours support"
      ],
      price: "From $499/package"
    },
    {
      title: "Diagnostic + Study Plan",
      duration: "45 min",
      bullets: [
        "Skill map",
        "Priority topics",
        "Personalized plan"
      ],
      price: "$49 (credited if you enroll in 72h)"
    }
  ];

  return (
    <section id="programs" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>Choose Your Program</h2>
          <p className="text-lg">
            Tailored tutoring packages designed to get you results fast.
          </p>
        </div>
        
        <div className="grid grid-cols-3">
          {programs.map((program, index) => (
            <div key={index} className="card">
              <h3>{program.title}</h3>
              <div className="pill mb-lg">{program.duration}</div>
              
              <ul className="mb-lg" style={{ listStyle: 'none', padding: 0 }}>
                {program.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="mb-sm text-muted">
                    • {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="text-xl mb-lg" style={{ fontWeight: 600, color: 'var(--fg)' }}>
                {program.price}
              </div>
              
              <div className="flex flex-col gap-sm">
                <a href="#faq" className="btn">
                  Learn more
                </a>
                <a href="#contact" className="btn btn--secondary">
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;