import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Search, BarChart, Zap, Globe, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEO = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">SEO</span> &amp; GEO Optimierung
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Keyword-Strategien, Metadaten und lokale Suchoptimierung für bessere Sichtbarkeit in Google und anderen Suchmaschinen.
            </p>
            <a href="#contact" className="btn-zen">Beratung vereinbaren</a>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Keyword-Recherche
                </h3>
                <p className="text-muted-foreground">
                  Umfassende Analyse relevanter Keywords mit hohem Suchvolumen und passender Wettbewerbsdichte für Ihre Branche und Zielgruppe.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Lokales SEO
                </h3>
                <p className="text-muted-foreground mb-4">
                  Optimierung für lokale Suchanfragen mit Google My Business, lokalen Backlinks und ortsbezogenen Keywords für mehr regionale Sichtbarkeit.
                </p>
                <Link 
                  to="/services/seo/local" 
                  className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors duration-300"
                >
                  Mehr erfahren
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Nutzerverhalten
                </h3>
                <p className="text-muted-foreground">
                  Analyse des Nutzerverhaltens für bessere User Experience, reduzierte Absprungraten und optimierte Conversion-Pfade auf Ihrer Website.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <BarChart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Performance Tracking
                </h3>
                <p className="text-muted-foreground">
                  Kontinuierliches Monitoring von Rankings, Traffic und Conversions mit ausführlichen Reports für transparente Erfolgsmessung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Unser SEO-<span className="text-primary">Prozess</span>
            </h2>
            
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">01</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">SEO Audit</h4>
                    <p className="text-muted-foreground">
                      Wir analysieren Ihre aktuelle Website auf technische SEO-Faktoren, Inhaltsqualität und Backlink-Profil, um Stärken und Schwächen zu identifizieren.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Search className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">02</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">Strategie & Optimierung</h4>
                    <p className="text-muted-foreground">
                      Basierend auf unserem Audit entwickeln wir eine maßgeschneiderte SEO-Strategie und setzen technische sowie On-Page-Optimierungen um.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Zap className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">03</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">Monitoring & Anpassung</h4>
                    <p className="text-muted-foreground">
                      Wir überwachen kontinuierlich die Performance Ihrer Website und passen unsere Strategie basierend auf Daten und Algorithmus-Updates an.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <BarChart className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Verbessern Sie Ihre Sichtbarkeit
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Kontaktieren Sie uns für eine kostenlose SEO-Erstberatung und erfahren Sie, wie wir Ihre Rankings verbessern können.
            </p>
            <a href="#contact" className="btn-zen">Jetzt beraten lassen</a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default SEO;