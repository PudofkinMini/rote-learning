import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Rob helped me jump from a 68 to an 86 in AP Calc in six weeks.",
      author: "A. Singh",
      role: "Parent",
      avatar: "/placeholder-avatar.png"
    },
    {
      quote: "I finally understood integrals—and stopped memorizing.",
      author: "J. Lee",
      role: "Student",
      avatar: "/placeholder-avatar.png"
    },
    {
      quote: "Clear plan, clear results. Worth it.",
      author: "M. Rossi",
      role: "Parent",
      avatar: "/placeholder-avatar.png"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2>What Students & Parents Say</h2>
          <p className="text-lg">
            Real results from real students.
          </p>
        </div>
        
        <div className="grid grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card testimonial">
              <div className="testimonial-avatar">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.author} avatar`}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    borderRadius: '50%',
                    display: 'none' // Hide until real image is added
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '👤';
                  }}
                />
                👤
              </div>
              
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
              
              <div className="testimonial-author">
                {testimonial.author} ({testimonial.role})
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;