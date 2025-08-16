import React from 'react';

const Programs = () => {
  const programs = [
    {
      title: "AP Accelerator",
      subtitle: "Advanced Placement Preparation",
      duration: "6 weeks",
      sessions: "6 × 60min",
      bullets: [
        "Weekly 1:1 sessions",
        "Homework feedback", 
        "Exam-style practice drills"
      ],
      price: "$99",
      priceUnit: "per session",
      theorem: "2.1",
      popular: false
    },
    {
      title: "University Rescue",
      subtitle: "Intensive Course Recovery",
      duration: "4 weeks", 
      sessions: "4 × 75min",
      bullets: [
        "Midterm/assignment triage",
        "Focused problem sets",
        "Office hours support"
      ],
      price: "$499",
      priceUnit: "complete package",
      theorem: "2.2",
      popular: true
    },
    {
      title: "Diagnostic Assessment",
      subtitle: "Personalized Study Planning",
      duration: "45 min",
      sessions: "1 × 45min",
      bullets: [
        "Comprehensive skill mapping",
        "Priority topic identification",
        "Custom study plan creation"
      ],
      price: "$49",
      priceUnit: "credited if enrolled",
      theorem: "2.3",
      popular: false
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-20">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-red-500 pl-3 mb-4">
            Section 2
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Available
            <span className="block font-normal">
              <span className="text-red-600">Academic</span>
              <span className="text-gray-900">/</span>
              <span className="text-blue-600">Programs</span>
            </span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Overview
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Structured tutoring methodologies designed for measurable academic improvement. 
              Each program follows <span className="font-medium">evidence-based pedagogical approaches</span> with 
              documented learning outcomes.
            </p>
          </div>
        </div>
        
        {/* Programs Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`relative bg-white border border-gray-200 transition-all duration-300 hover:border-gray-400 ${
                program.popular ? 'border-black' : ''
              }`}
            >
              {/* Theorem header */}
              <div className="border-b border-gray-200 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-gray-500">
                    Theorem {program.theorem}
                  </div>
                  {program.popular && (
                    <div className="text-xs font-mono text-black border border-black px-2 py-1">
                      OPTIMAL
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                {/* Title */}
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-black mb-1">{program.title}</h3>
                  <p className="text-sm text-gray-600 font-light">{program.subtitle}</p>
                  
                  {/* Parameters */}
                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-mono text-gray-400">Duration:</span>
                      <span className="ml-2 text-gray-700">{program.duration}</span>
                    </div>
                    <div>
                      <span className="font-mono text-gray-400">Sessions:</span>
                      <span className="ml-2 text-gray-700">{program.sessions}</span>
                    </div>
                  </div>
                </div>
                
                {/* Features - Academic list */}
                <div className="mb-8">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                    Methodology
                  </div>
                  <ul className="space-y-2">
                    {program.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start text-sm">
                        <span className="font-mono text-gray-400 mr-3 text-xs">•</span>
                        <span className="text-gray-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Pricing */}
                <div className="mb-8 pb-6 border-b border-gray-200">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Investment
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-2xl font-light text-black">{program.price}</span>
                    <span className="text-sm text-gray-600 ml-2">{program.priceUnit}</span>
                  </div>
                  {program.title === "Diagnostic Assessment" && (
                    <p className="text-xs text-gray-500 mt-2">
                      * Full credit applied within 72h of enrollment
                    </p>
                  )}
                </div>
                
                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a 
                    href="#contact" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
                  >
                    <span className="font-mono text-xs mr-2">→</span>
                    Enroll
                  </a>
                  <a 
                    href="#faq" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
                  >
                    <span className="font-mono text-xs mr-2">?</span>
                    Details
                  </a>
                </div>
              </div>
              
              {/* Corner indicators for popular */}
              {program.popular && (
                <>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Consultation CTA */}
        <div className="mt-20">
          <div className="bg-gray-50 border border-gray-200 p-8 max-w-4xl mx-auto">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 border-l-2 border-blue-500 pl-3">
              Consultation
            </div>
            <h3 className="text-2xl font-light text-black mb-4">
              Program Selection Assistance
            </h3>
            <p className="text-gray-700 mb-8 font-light leading-relaxed">
              Uncertain which methodology aligns with your academic objectives? 
              Schedule a brief consultation to determine the optimal program structure 
              based on your current proficiency level and target outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
              >
                <span className="font-mono text-xs mr-2">§</span>
                Schedule Consultation
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#faq" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
              >
                <span className="font-mono text-xs mr-2">i</span>
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;