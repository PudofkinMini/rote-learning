import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#top', label: 'Home', section: '1' },
    { href: '#programs', label: 'Programs', section: '2' },
    { href: '#how', label: 'Methodology', section: '3' },
    { href: '#testimonials', label: 'Results', section: '4' },
    { href: '#faq', label: 'FAQ', section: '5' },
    { href: '#about', label: 'About', section: '6' },
    { href: '#contact', label: 'Contact', section: '7' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand - Academic style */}
          <a 
            href="#top" 
            className="flex items-center space-x-3 group" 
            onClick={closeMenu}
          >
            {/* Mathematical symbol logo */}
            <div className="w-8 h-8 border border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors duration-200">
              <span className="text-sm font-family: 'Times New Roman' font-bold">&real;</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-light text-black tracking-tight">
                Rote Learning
              </span>
              <span className="text-xs font-mono text-gray-500 -mt-1">
                Academic Tutoring
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation - Clean academic style */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
                onClick={closeMenu}
              >
                <span className="font-mono text-xs text-gray-400 mr-2">
                  {item.section}.
                </span>
                {item.label}
                {/* Subtle underline - academic style */}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) - Clean academic button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
            >
              <span className="font-mono text-xs mr-2">§</span>
              Contact
              <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Mobile menu button - Clean lines */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Academic paper style */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white border-t border-gray-200">
          <div className="px-4 py-6">
            {/* Section header */}
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-4 border-l-2 border-red-500 pl-3">
              Table of Contents
            </div>
            
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                  onClick={closeMenu}
                >
                  <span className="font-mono text-xs text-gray-400 mr-3 w-4">
                    {item.section}.
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a
                href="#contact"
                className="flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
                onClick={closeMenu}
              >
                <span className="font-mono text-xs mr-2">§</span>
                Contact
                <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;