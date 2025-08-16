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

  const contactMethods = [
    {
      method: "Initial Consultation",
      description: "15-minute assessment call to discuss academic objectives and program alignment",
      availability: "Monday - Friday, 9 AM - 6 PM EST"
    },
    {
      method: "Email Correspondence", 
      description: "Detailed inquiry submission with comprehensive response within 24 hours",
      availability: "hello@rotelearning.ca"
    },
    {
      method: "Program Information",
      description: "Structured program details and methodology overview upon request",
      availability: "Available immediately"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.008]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header */}
        <div className="mb-20">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-blue-500 pl-3 mb-4">
            Section 7
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-black mb-6 tracking-tight">
            Initial
            <span className="block font-normal">
              <span className="text-red-600">Contact</span>
              <span className="text-gray-900">/</span>
              <span className="text-blue-600">Assessment</span>
            </span>
          </h2>
          <div className="max-w-3xl">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Program Inquiry Form
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Submit comprehensive academic background and objectives for 
              <span className="font-medium"> personalized program recommendation</span> and 
              initial consultation scheduling.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 border-l-2 border-red-500 pl-3">
                Contact Methods
              </div>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-6 h-6 border border-black flex items-center justify-center bg-white mt-0.5">
                        <span className="text-xs font-mono">{index + 1}</span>
                      </div>
                      <h4 className="text-sm font-medium text-black">{method.method}</h4>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed mb-2 ml-9">
                      {method.description}
                    </p>
                    <div className="text-xs font-mono text-gray-500 ml-9">
                      {method.availability}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  Response Timeline
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Initial Response</span>
                    <span className="font-mono text-gray-500">&lt; 24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Program Recommendation</span>
                    <span className="font-mono text-gray-500">&lt; 48h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Session Scheduling</span>
                    <span className="font-mono text-gray-500">&lt; 72h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-black">Academic Inquiry Submission</h3>
                <div className="text-xs font-mono text-gray-400">Form 7.1</div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Role and Course Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Role *
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-sm bg-white"
                    >
                      <option value="">Select role</option>
                      <option value="Student">Student</option>
                      <option value="Parent">Parent</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      Course/Subject
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-sm"
                      placeholder="e.g., AP Calculus BC, University Physics I"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                    Academic Objectives & Timeline *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 text-sm resize-none"
                    placeholder="Please describe your current academic standing, specific challenges, target outcomes, and preferred timeline for tutoring sessions..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black min-w-48"
                  >
                    <span className="font-mono text-xs mr-2">→</span>
                    Submit Academic Inquiry
                    <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>

                {/* Success Message */}
                {showSuccess && (
                  <div className="border border-green-500 bg-green-50 p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 border border-green-500 flex items-center justify-center bg-white mt-0.5">
                        <span className="text-xs font-mono text-green-700">✓</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-800 mb-1">Inquiry Received</div>
                        <div className="text-xs text-green-700">
                          Your academic inquiry has been submitted successfully. Response within 24 hours during business days.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
            
            {/* Alternative Contact */}
            <div className="mt-8 bg-white border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="text-base font-medium text-black mb-1">Direct Email Contact</h4>
                  <p className="text-sm text-gray-700">
                    Prefer email communication? Send detailed inquiry directly.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <a 
                    href="mailto:hello@rotelearning.ca" 
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
                  >
                    <span className="font-mono text-xs mr-2">@</span>
                    hello@rotelearning.ca
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;