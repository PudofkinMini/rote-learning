import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Programs from './components/Programs.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Programs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;