import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navigationSections = [
    {
      title: "Academic Programs",
      reference: "Sections 2-3",
      links: [
        { href: '#programs', label: 'Available Programs', section: '2' },
        { href: '#how', label: 'Methodology', section: '3' }
      ]
    },
    {
      title: "Assessment & Results",
      reference: "Sections 4-5", 
      links: [
        { href: '#testimonials', label: 'Student Outcomes', section: '4' },
        { href: '#faq', label: 'Reference Guide', section: '5' }
      ]
    },
    {
      title: "Contact & Information",
      reference: "Sections 6-7",
      links: [
        { href: '#about', label: 'Instructor Profile', section: '6' },
        { href: '#contact', label: 'Initial Contact', section: '7' }
      ]
    }
  ];

  const institutionalInfo = [
    {
      category: "Affiliations",
      items: [
        "University of Toronto",
        "Society of Actuaries (SOA)",
        "Actuarial Students' Association"
      ]
    },
    {
      category: "Credentials", 
      items: [
        "SOA Exam P, FM, MAS-I, MAS-II",
        "5th-year Actuarial Science Specialist",
        "200+ hours teaching experience"
      ]
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 border border-black flex items-center justify-center bg-white">
                  <span className="text-sm font-mono font-bold">∫</span>
                </div>
                <div>
                  <div className="text-lg font-light text-black">Rote Learning</div>
                  <div className="text-xs font-mono text-gray-500">Academic Tutoring</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Systematic mathematics and physics tutoring utilizing evidence-based 
                pedagogical methodologies for measurable academic improvement.
              </p>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                  Primary Contact
                </div>
                <a 
                  href="mailto:hello@rotelearning.ca" 
                  className="text-sm text-black hover:text-gray-700 transition-colors duration-200"
                >
                  hello@rotelearning.ca
                </a>
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                  Response Time
                </div>
                <div className="text-sm text-gray-700">&lt; 24 hours</div>
              </div>
            </div>
          </div>

          {/* Navigation Sections */}
          {navigationSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <div className="mb-4">
                <h4 className="text-base font-medium text-black mb-1">{section.title}</h4>
                <div className="text-xs font-mono text-gray-500">{section.reference}</div>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="group flex items-center text-sm text-gray-700 hover:text-black transition-colors duration-200"
                    >
                      <span className="font-mono text-xs text-gray-400 mr-3">{link.section}.</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Institutional Information */}
        <div className="border-t border-gray-200 pt-12 mb-12">
          <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-6 border-l-2 border-blue-500 pl-3">
            Institutional Information
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {institutionalInfo.map((info, index) => (
              <div key={index}>
                <h5 className="text-sm font-medium text-black mb-3">{info.category}</h5>
                <ul className="space-y-2">
                  {info.items.map((item, itemIndex) => (
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

        {/* Academic Citation */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-8">
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                  Publication
                </div>
                <div className="text-sm text-gray-700">
                  Rote Learning Academic Tutoring Services
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                  Version
                </div>
                <div className="text-sm text-gray-700">
                  {currentYear}.1
                </div>
              </div>
              <div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">
                  Updated
                </div>
                <div className="text-sm text-gray-700">
                  {new Date().toLocaleDateString('en-CA')}
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#top" 
                className="inline-flex items-center text-sm text-gray-700 hover:text-black transition-colors duration-200"
              >
                <span className="font-mono text-xs mr-2">↑</span>
                Return to Top
              </a>
              <div className="text-sm text-gray-500">
                © {currentYear} All rights reserved
              </div>
            </div>
          </div>
        </div>

        {/* Academic Footer Note */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="bg-gray-50 border border-gray-200 p-6">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
              Academic Disclaimer
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Individual results may vary based on student engagement, current proficiency level, 
              and commitment to structured practice. All academic outcomes referenced represent 
              documented improvements from specific case studies and should not be considered 
              guaranteed results for future students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;