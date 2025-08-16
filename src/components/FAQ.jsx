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

  const faqItems = [
    {
      question: "Do you teach AP Calc AB/BC and Physics?",
      answer: "Yes—plus Uni Calc I/II, Linear Algebra, Probability/Stats, and Mechanics."
    },
    {
      question: "How are lessons delivered?",
      answer: "Zoom with shared iPad notes. You get the PDF after each session."
    },
    {
      question: "Can parents join?",
      answer: "Welcome for the first 10 minutes; weekly parent summary available."
    },
    {
      question: "What if I only need help before an exam?",
      answer: "Grab the Uni Rescue Pack for focused prep."
    },
    {
      question: "What's your reschedule policy?",
      answer: "24h notice for changes; no-shows are charged."
    },
    {
      question: "Do you offer packages?",
      answer: "Yes. Packages reduce the per-session price."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>Frequently Asked Questions</h2>
          <p className="text-lg">
            Everything you need to know about getting started.
          </p>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqItems.map((item, index) => {
            const isExpanded = expandedItems.has(index);
            return (
              <div 
                key={index} 
                className="faq-item"
                data-expanded={isExpanded}
              >
                <button
                  className="faq-button"
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  aria-expanded={isExpanded}
                  aria-controls={`faq-content-${index}`}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </button>
                
                {isExpanded && (
                  <div 
                    className="faq-content"
                    id={`faq-content-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;