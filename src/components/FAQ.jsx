import React, { useState } from 'react';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  const faqCategories = [
    {
      category: "Academic Coverage",
      reference: "5.1",
      items: [
        {
          question: "Do you teach AP Calc AB/BC and Physics?",
          answer: "Yes. Comprehensive coverage includes AP Calculus AB/BC, AP Physics 1/2/C, University Calculus I/II, Linear Algebra, Probability/Statistics, and Classical Mechanics."
        },
        {
          question: "What subjects are available for university-level tutoring?",
          answer: "First-year mathematics and physics courses including Calculus I/II, Vector Calculus, Linear Algebra, Differential Equations, and Introductory Physics sequences."
        }
      ]
    },
    {
      category: "Session Logistics",
      reference: "5.2", 
      items: [
        {
          question: "How are tutoring sessions conducted?",
          answer: "All sessions utilize video conferencing with real-time iPad note-taking. Digital notes are provided in PDF format following each session for review purposes."
        },
        {
          question: "Can parents observe sessions?",
          answer: "Parents are welcome during the initial 10 minutes of each session. Weekly progress summaries are provided to maintain transparency in academic development."
        }
      ]
    },
    {
      category: "Scheduling & Policies", 
      reference: "5.3",
      items: [
        {
          question: "What is the rescheduling policy?",
          answer: "Minimum 24-hour advance notice required for session modifications. Sessions cancelled without adequate notice incur standard charges."
        },
        {
          question: "What if I only need exam preparation?",
          answer: "The University Rescue program provides intensive, focused preparation for upcoming examinations and assignments within compressed timeframes."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Minimal grid background */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-20">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-blue-500 pl-3 mb-4">
            Section 5
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            <span className="text-red-600">Frequently</span>
            <span className="text-gray-900">/</span>
            <span className="text-blue-600">Asked</span>
            <span className="block font-normal text-black">Questions</span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Reference Guide
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Comprehensive information addressing common inquiries regarding 
              <span className="font-medium">academic coverage</span>, 
              <span className="font-medium">session logistics</span>, and 
              <span className="font-medium">operational policies</span>.
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white border border-gray-200">
              {/* Category Header */}
              <div className="border-b border-gray-200 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-black mb-1">{category.category}</h3>
                    <div className="text-xs font-mono text-gray-500">Reference {category.reference}</div>
                  </div>
                  <div className="text-xs font-mono text-gray-400">
                    {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                  </div>
                </div>
              </div>

              {/* FAQ Items */}
              <div className="divide-y divide-gray-200">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isExpanded = expandedItems.has(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="px-8 py-6">
                      <button
                        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 group"
                        onClick={() => toggleItem(globalIndex)}
                        onKeyDown={(e) => handleKeyDown(e, globalIndex)}
                        aria-expanded={isExpanded}
                        aria-controls={`faq-content-${globalIndex}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="w-6 h-6 border border-gray-400 flex items-center justify-center bg-white mt-0.5">
                              <span className="text-xs font-mono">
                                {category.reference}.{itemIndex + 1}
                              </span>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base font-medium text-black group-hover:text-gray-700 transition-colors duration-200 pr-4">
                                {item.question}
                              </h4>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            <div className="w-6 h-6 border border-black flex items-center justify-center bg-white">
                              <svg 
                                className={`w-3 h-3 text-black transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div 
                          className="mt-4 ml-10 pr-10"
                          id={`faq-content-${globalIndex}`}
                          role="region"
                          aria-labelledby={`faq-button-${globalIndex}`}
                        >
                          <div className="border-l-2 border-gray-200 pl-6 py-2">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-20">
          <div className="bg-white border border-gray-200 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-3">
                  Contact Information
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-black mb-1">Questions not addressed?</div>
                    <p className="text-sm text-gray-700">
                      Schedule a brief consultation to discuss specific requirements and program alignment.
                    </p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-black mb-1">Response time</div>
                    <p className="text-sm text-gray-700">
                      All inquiries receive responses within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4">
                  Getting Started
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Ready to begin? The diagnostic assessment provides program recommendations 
                    based on your current academic standing and objectives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
                    >
                      <span className="font-mono text-xs mr-2">→</span>
                      Schedule Assessment
                    </a>
                    <a 
                      href="#programs" 
                      className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
                    >
                      <span className="font-mono text-xs mr-2">↑</span>
                      View Programs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;