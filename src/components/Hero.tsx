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

          {/* Hero Graphic */}
          <div className="flex justify-center lg:justify-end fade-in-right opacity-0" style={{animationDelay: '0.6s'}}>
            <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-otter shadow-otter-glow relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <img src="/src/assets/otter-logo.png" alt="Otterino Mascot" className="w-32 h-32 lg:w-40 lg:h-40" />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-4 h-4 bg-otter-mint rounded-full animate-pulse"></div>
                  <div className="absolute bottom-12 left-8 w-6 h-6 bg-otter-soft rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Decorative rings */}
                <div className="absolute -inset-8 border-2 border-otter-jeans/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute -inset-16 border border-otter-warm/10 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;