import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Zen Style Studio - Webdesign & SEO</title>
        <meta name="description" content="Kreatives Webdesign und professionelle SEO-Optimierung für eine starke digitale Präsenz. Kontaktieren Sie uns für eine kostenlose Beratung." />
      </Helmet>
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
