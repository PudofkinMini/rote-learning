import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "3.1",
      title: "Initial Assessment",
      process: "Diagnostic Evaluation",
      description: "Comprehensive evaluation of current proficiency levels and identification of knowledge gaps.",
      duration: "45 minutes",
      outcome: "Personalized learning pathway"
    },
    {
      number: "3.2", 
      title: "Structured Sessions",
      process: "Active Learning Implementation",
      description: "Regular tutoring sessions utilizing evidence-based pedagogical methods and adaptive instruction.",
      duration: "60-75 minutes",
      outcome: "Progressive skill development"
    },
    {
      number: "3.3",
      title: "Progress Evaluation",
      process: "Continuous Assessment",
      description: "Ongoing monitoring of academic improvement with adjustments to methodology as required.",
      duration: "Integrated",
      outcome: "Documented achievement"
    }
  ];

  return (
    <section id="how" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle grid background - different pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-16">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-blue-500 pl-3 mb-4">
            Section 3
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            <span className="text-red-600">Methodology</span>
            <span className="text-gray-900">/</span>
            <span className="text-blue-600">Process</span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Framework
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              A systematic three-phase approach designed to maximize learning efficiency 
              through <span className="font-medium">structured assessment</span>, 
              <span className="font-medium">targeted instruction</span>, and 
              <span className="font-medium">continuous evaluation</span>.
            </p>
          </div>
        </div>
        
        {/* Process Timeline */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-20 w-px h-16 bg-gray-300 hidden lg:block"></div>
              )}
              
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step indicator */}
                <div className="lg:col-span-2 flex flex-col items-start lg:items-center">
                  <div className="w-8 h-8 border-2 border-black flex items-center justify-center bg-white mb-3">
                    <span className="text-xs font-mono font-bold">{step.number}</span>
                  </div>
                  <div className="text-xs font-mono text-gray-500 text-center hidden lg:block">
                    Phase {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="bg-white border border-gray-200 p-8">
                    {/* Header */}
                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h3 className="text-xl font-medium text-black mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 font-light italic">{step.process}</p>
                      </div>
                      <div className="md:text-right">
                        <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                          Duration
                        </div>
                        <div className="text-sm text-gray-700">{step.duration}</div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="mb-6 pb-6 border-b border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                    
                    {/* Outcome */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                          Expected Outcome
                        </div>
                        <div className="text-sm font-medium text-black">{step.outcome}</div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className="flex items-center space-x-2">
                        <div className="text-xs font-mono text-gray-400">Progress:</div>
                        <div className="w-12 h-2 bg-gray-200 relative">
                          <div 
                            className="h-full bg-black transition-all duration-500"
                            style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Implementation Notes */}
        <div className="mt-20">
          <div className="bg-white border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-3">
                  Implementation Notes
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="font-mono text-gray-400 mr-3">•</span>
                    All sessions conducted via video conferencing platform
                  </li>
                  <li className="flex items-start">
                    <span className="font-mono text-gray-400 mr-3">•</span>
                    Digital notes and materials provided post-session
                  </li>
                  <li className="flex items-start">
                    <span className="font-mono text-gray-400 mr-3">•</span>
                    Progress tracking through quantitative assessments
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                  Success Metrics
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Grade improvement</span>
                    <span className="text-sm font-medium text-black">Average +18 points</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Concept retention</span>
                    <span className="text-sm font-medium text-black">92% after 4 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">Student satisfaction</span>
                    <span className="text-sm font-medium text-black">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
              >
                <span className="font-mono text-xs mr-2">→</span>
                Begin Assessment
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#programs" 
                className="inline-flex items-center px-8 py-3 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
              >
                <span className="font-mono text-xs mr-2">↑</span>
                Return to Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;