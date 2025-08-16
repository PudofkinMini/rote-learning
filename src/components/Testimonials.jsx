import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Rob helped me jump from a 68 to an 86 in AP Calc in six weeks.",
      author: "A. Singh",
      role: "Parent",
      subject: "AP Calculus",
      improvement: "68 → 86",
      weeks: "6 weeks",
      case: "4.1"
    },
    {
      quote: "I finally understood integrals—and stopped memorizing.",
      author: "J. Lee", 
      role: "Student",
      subject: "Calculus",
      improvement: "Conceptual mastery",
      weeks: "4 weeks",
      case: "4.2"
    },
    {
      quote: "Clear plan, clear results. Worth it.",
      author: "M. Rossi",
      role: "Parent",
      subject: "AP Physics",
      improvement: "B+ average",
      weeks: "8 weeks",
      case: "4.3"
    }
  ];

  const metrics = [
    { label: "Students Helped", value: "50+", description: "Across AP and university courses" },
    { label: "Average Rating", value: "4.9/5", description: "Based on post-session surveys" },
    { label: "Grade Improvement", value: "+18pts", description: "Average increase per student" },
    { label: "Retention Rate", value: "92%", description: "Concept retention after 4 weeks" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-20">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-red-500 pl-3 mb-4">
            Section 4
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Student
            <span className="block font-normal">
              <span className="text-red-600">Success</span>
              <span className="text-gray-900">/</span>
              <span className="text-blue-600">Outcomes</span>
            </span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Case Studies
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Documented academic improvements demonstrating the effectiveness of our 
              <span className="font-medium">systematic tutoring methodology</span>. Each case represents 
              measurable progress achieved through structured intervention.
            </p>
          </div>
        </div>

        {/* Testimonials Grid - Mixed Layout */}
        <div className="space-y-8">
          {/* Featured testimonial - full width */}
          <div className="bg-gray-50 border border-gray-200 p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-8 h-8 border border-black flex items-center justify-center bg-white">
                    <span className="text-xs font-mono font-bold">{testimonials[0].case}</span>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-xl text-black leading-relaxed mb-4">
                      "{testimonials[0].quote}"
                    </blockquote>
                    <div className="flex items-center space-x-6 text-sm">
                      <div>
                        <span className="font-mono text-gray-500">Subject:</span>
                        <span className="ml-2 text-gray-700">{testimonials[0].subject}</span>
                      </div>
                      <div>
                        <span className="font-mono text-gray-500">Duration:</span>
                        <span className="ml-2 text-gray-700">{testimonials[0].weeks}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 border border-gray-400 flex items-center justify-center bg-white">
                        <span className="text-sm font-mono">{testimonials[0].author.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-black">{testimonials[0].author}</div>
                        <div className="text-xs text-gray-500">{testimonials[0].role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Outcome</div>
                      <div className="text-sm font-medium text-black">{testimonials[0].improvement}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data visualization */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-gray-200 p-6">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                    Performance Data
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Initial Score</span>
                      <span className="text-lg font-light text-black">68</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700">Final Score</span>
                      <span className="text-lg font-light text-black">86</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-black">Improvement</span>
                        <span className="text-xl font-medium text-red-600">+18 pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining testimonials - two column */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-6 h-6 border border-black flex items-center justify-center bg-white">
                    <span className="text-xs font-mono font-bold">{testimonial.case}</span>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                      <div>
                        <span className="font-mono text-gray-400">Subject:</span>
                        <div className="text-gray-700">{testimonial.subject}</div>
                      </div>
                      <div>
                        <span className="font-mono text-gray-400">Outcome:</span>
                        <div className="text-gray-700">{testimonial.improvement}</div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 border border-gray-400 flex items-center justify-center bg-white">
                            <span className="text-xs font-mono">{testimonial.author.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-xs font-medium text-black">{testimonial.author}</div>
                            <div className="text-xs text-gray-500">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="text-xs font-mono text-gray-500">{testimonial.weeks}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Section */}
        <div className="mt-20">
          <div className="bg-gray-50 border border-gray-200 p-8">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">
              Aggregate Statistics
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-black mb-2">{metric.value}</div>
                  <div className="text-sm font-medium text-black mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-xl font-light text-black mb-4">
                Begin Your Academic Improvement
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto font-light">
                Join the students who have achieved measurable academic progress through our 
                structured tutoring methodology. Schedule an initial assessment to begin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-8 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
                >
                  <span className="font-mono text-xs mr-2">→</span>
                  Schedule Assessment
                  <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#programs" 
                  className="inline-flex items-center px-8 py-3 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
                >
                  <span className="font-mono text-xs mr-2">↑</span>
                  View Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;