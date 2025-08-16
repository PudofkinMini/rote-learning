import React from 'react';

const About = () => {
  const academicBackground = [
    {
      category: "Education",
      items: [
        "5th-year Actuarial Science Specialist",
        "University of Toronto",
        "Mathematical and Computational Finance"
      ]
    },
    {
      category: "Professional Examinations",
      items: [
        "SOA Exam P: Probability",
        "SOA Exam FM: Financial Mathematics", 
        "SOA Exam MAS-I: Modern Actuarial Statistics",
        "SOA Exam MAS-II: Modern Actuarial Statistics"
      ]
    },
    {
      category: "Leadership Experience",
      items: [
        "President Emeritus, Actuarial Students' Association",
        "Academic Mentorship Program Coordinator",
        "Peer Tutoring Initiative Founder"
      ]
    }
  ];

  const teachingApproach = [
    {
      principle: "Systematic Methodology",
      description: "Structured approach to concept development ensuring comprehensive understanding before progression to advanced topics."
    },
    {
      principle: "Evidence-Based Instruction",
      description: "Utilization of proven pedagogical techniques adapted specifically for mathematics and physics education."
    },
    {
      principle: "Technology Integration",
      description: "iPad-powered digital note-taking with immediate PDF distribution for enhanced review and retention."
    },
    {
      principle: "Exam Preparation Focus",
      description: "Targeted practice utilizing authentic examination formats and time-management strategies."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-20">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-red-500 pl-3 mb-4">
            Section 6
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Instructor
            <span className="block font-normal">
              <span className="text-red-600">Profile</span>
              <span className="text-gray-900">/</span>
              <span className="text-blue-600">Background</span>
            </span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Academic Curriculum Vitae
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Comprehensive overview of educational background, professional qualifications, 
              and <span className="font-medium">pedagogical methodology</span> employed in 
              structured tutoring sessions.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Bio Section */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 border border-gray-200 p-8">
              {/* Profile placeholder */}
              <div className="mb-8">
                <div className="w-32 h-32 border-2 border-gray-300 mx-auto flex items-center justify-center text-gray-400 bg-white">
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <div className="text-xs font-mono">Instructor Photo</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-black mb-2">Rob</h3>
                <div className="text-sm text-gray-600 mb-1">Actuarial Science Specialist</div>
                <div className="text-xs font-mono text-gray-500">University of Toronto</div>
              </div>
              
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Teaching Experience
                  </div>
                  <div className="text-gray-700">200+ hours of individualized instruction</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Specialization
                  </div>
                  <div className="text-gray-700">AP & University Mathematics/Physics</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Focus Areas
                  </div>
                  <div className="text-gray-700">Exam preparation, conceptual clarity, confidence building</div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Background Categories */}
              {academicBackground.map((section, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-black">{section.category}</h4>
                    <div className="text-xs font-mono text-gray-400">6.{index + 1}</div>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-sm">
                        <span className="font-mono text-gray-400 mr-3 text-xs mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teaching Philosophy */}
        <div className="mt-20">
          <div className="bg-gray-50 border border-gray-200 p-8">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">
              Pedagogical Approach
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teachingApproach.map((approach, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 border border-black flex items-center justify-center bg-white mt-0.5">
                      <span className="text-xs font-mono">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-base font-medium text-black mb-2">{approach.principle}</h5>
                      <p className="text-sm text-gray-700 leading-relaxed">{approach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-lg font-medium text-black mb-4">
                    Academic Philosophy
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Mathematics and physics education requires systematic development of foundational 
                    concepts coupled with intensive practice. My approach emphasizes 
                    <span className="font-medium"> conceptual understanding</span> over 
                    memorization, ensuring students develop robust problem-solving capabilities 
                    applicable across diverse academic contexts.
                  </p>
                </div>
                
                <div>
                  <div className="bg-white border border-gray-200 p-6">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                      Session Structure
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Concept Review</span>
                        <span className="font-mono text-gray-500">15 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">New Material</span>
                        <span className="font-mono text-gray-500">25 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Practice Problems</span>
                        <span className="font-mono text-gray-500">15 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Next Steps</span>
                        <span className="font-mono text-gray-500">5 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
                >
                  <span className="font-mono text-xs mr-2">→</span>
                  Schedule Initial Consultation
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;