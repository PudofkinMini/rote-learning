import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: '#top', label: 'Home' },
    { href: '#programs', label: 'Programs' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { href: '#', label: 'Instagram', icon: '📷' },
    { href: '#', label: 'TikTok', icon: '🎵' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {quickLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href}
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="text-sm text-muted mt-lg">
            © {currentYear} Rote Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;