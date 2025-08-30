import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-otter-text mb-6 fade-in-up">
              Schweizer Studio für
              <span className="block text-primary">Web- & Digitalprojekte</span>
            </h1>
            <p className="text-xl text-otter-text mb-8 max-w-lg mx-auto lg:mx-0 fade-in-up opacity-0" style={{animationDelay: '0.2s'}}>
              Websites die gefunden werden. Wir verbinden Design, Entwicklung und 
              intelligente Sichtbarkeits-Optimierung (SEO, GEO, AEO) in einer Lösung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up opacity-0" style={{animationDelay: '0.4s'}}>
              <a href="#services" className="btn-zen inline-flex items-center gap-2">
                Projekt starten
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-zen-outline inline-flex items-center gap-2">
                <Play size={18} />
                Unsere Lösungen
              </a>
            </div>
          </div>

          {/* Hero Content - Full Width */}
          <div className="flex justify-center lg:justify-end fade-in-right opacity-0" style={{animationDelay: '0.6s'}}>
            <div className="text-center lg:text-right">
              <h3 className="text-2xl font-semibold text-otter-text mb-4">
                Digital-Architekten für Ihren Erfolg
              </h3>
              <p className="text-lg text-muted-foreground">
                Websites, die nicht nur schön aussehen, sondern von Anfang an gefunden werden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;