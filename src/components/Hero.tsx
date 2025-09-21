import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-otter-text mb-6">
            Schweizer Studio für
            <span className="block text-primary mt-2">Web- & Digitalprojekte</span>
          </h1>
          <p className="text-xl text-otter-text mb-8 max-w-2xl mx-auto">
            Websites die gefunden werden. Design, Entwicklung und SEO in einer Lösung.
          </p>
          <a href="#services" className="btn-zen inline-flex items-center gap-2">
            Projekt starten
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;