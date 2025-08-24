import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import useAOS from '@/hooks/useAOS';

const Index = () => {
  // Initialize AOS animations
  useAOS();

  // Add fade-in-up animation class to elements on mount
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('aos-animate');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
