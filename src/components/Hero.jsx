import React from 'react';

const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Coordinate system in corner */}
      <div className="absolute top-8 right-8 w-16 h-16 opacity-10">
        <svg viewBox="0 0 64 64" className="w-full h-full text-black">
          <line x1="0" y1="32" x2="64" y2="32" stroke="currentColor" strokeWidth="1"/>
          <line x1="32" y1="0" x2="32" y2="64" stroke="currentColor" strokeWidth="1"/>
          <polygon points="64,32 60,30 60,34" fill="currentColor"/>
          <polygon points="32,0 30,4 34,4" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Content - takes up 3 columns */}
          <div className="lg:col-span-3 space-y-12">
            {/* Small theorem-style header */}
            <div className="inline-block">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider border-l-2 border-red-500 pl-3">
                Theorem 1.1
              </div>
              <div className="text-sm text-gray-600 mt-1 pl-3">
                Expert tutoring available
              </div>
            </div>
            
            {/* Main heading - LaTeX style */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-black leading-[1.1] tracking-tight">
                <span className="block">Ace AP & First-Year</span>
                <span className="block font-normal">
                  <span className="text-red-600">Math</span>
                  <span className="text-gray-900">/</span>
                  <span className="text-blue-600">Physics</span>
                </span>
                <span className="block text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light mt-4">
                  without spinning your wheels
                </span>
              </h1>
            </div>
            
            {/* Abstract-style description */}
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                Abstract
              </div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
                Focused 1:1 tutoring from a 5th-year actuarial science specialist. 
                <span className="font-medium">iPad-powered notes</span>, exam-style drills, 
                and calm, clear explanations.
              </p>
            </div>
            
            {/* Clean buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200 border border-black"
              >
                Book a 15-min consultation
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#programs" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-white hover:bg-gray-50 transition-colors duration-200 border border-gray-300"
              >
                View programs
              </a>
            </div>
            
            {/* Data points - academic style */}
            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-gray-200">
              <div>
                <div className="text-2xl font-light text-black">50+</div>
                <div className="text-sm text-gray-600 font-mono">Students</div>
              </div>
              <div>
                <div className="text-2xl font-light text-black">4.9/5</div>
                <div className="text-sm text-gray-600 font-mono">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Mathematical diagram area - takes up 2 columns */}
          <div className="lg:col-span-2 relative">
            {/* Main content box */}
            <div className="relative bg-white border border-gray-200 p-8">
              {/* Top corner labels */}
              <div className="absolute top-0 left-0 text-xs font-mono text-gray-400 -translate-y-5">
                Figure 1
              </div>
              
              {/* Grid overlay for math feel */}
              <div 
                className="absolute inset-4 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '10px 10px'
                }}
              ></div>
              
              {/* Image placeholder */}
              <div className="aspect-[4/3] border border-dashed border-gray-300 flex items-center justify-center text-gray-500 bg-gray-50 relative">
                <div className="text-center space-y-3 z-10">
                  <div className="w-16 h-16 mx-auto border border-gray-300 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-sm text-gray-500 font-mono">
                    <div>Hero Image Placeholder</div>
                    <div className="text-xs mt-1">Tutor explaining calculus</div>
                  </div>
                </div>
                
                {/* Mathematical annotations */}
                <div className="absolute top-2 right-2 text-xs font-mono text-gray-400">
                  ∫ f(x)dx
                </div>
                <div className="absolute bottom-2 left-2 text-xs font-mono text-gray-400">
                  lim[x→∞]
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-4 text-xs text-gray-500 font-mono text-center">
                One-on-one tutoring methodology
              </div>
              
              {/* Corner indicators */}
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-red-500"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
            </div>
            
            {/* Side mathematical notation */}
            <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-xs font-mono text-gray-300 writing-mode-vertical">
              y = mx + b
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;