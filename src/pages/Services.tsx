import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Globe, Search, Paintbrush, Target, Code, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Services - Zen Style Studio</title>
        <meta name="description" content="Entdecken Sie unsere Services: Webdesign, SEO, lokale SEO und Web-Präsenz-Optimierung." />
      </Helmet>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Unsere <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Von modernem Webdesign bis zur professionellen SEO-Optimierung - wir bieten umfassende digitale Lösungen für Ihr Unternehmen.
            </p>
            <a href="#services" className="btn-zen">Services entdecken</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Web Design Service */}
              <div className="bg-background p-10 rounded-3xl card-glow group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-otter rounded-3xl flex items-center justify-center text-white mb-8">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  Web Design & Development
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Responsive Websites mit modernen Frameworks wie Next.js. Schnelle Ladezeiten, perfekte Darstellung auf allen Geräten und nutzerfreundliche Interfaces.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Paintbrush className="w-5 h-5 text-primary" />
                    <span className="text-foreground">UX/UI Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Modern Frameworks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Responsive Design</span>
                  </div>
                </div>

                <Link
                  to="/services/webdesign"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Mehr erfahren →
                </Link>
              </div>

              {/* SEO Service */}
              <div className="bg-background p-10 rounded-3xl card-glow group hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-gradient-otter rounded-3xl flex items-center justify-center text-white mb-8">
                  <Search className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  SEO & GEO Optimierung
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Keyword-Strategien, Metadaten und lokale Suchoptimierung für bessere Sichtbarkeit in Google und anderen Suchmaschinen.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Keyword-Recherche</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Lokales SEO</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Performance Tracking</span>
                  </div>
                </div>

                <Link
                  to="/services/seo"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Mehr erfahren →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Warum <span className="text-primary">Otterino.com</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Moderne Technologien</h3>
                <p className="text-muted-foreground">
                  Wir arbeiten mit den neuesten Frameworks und Tools für zukunftssichere Lösungen.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Individuelle Beratung</h3>
                <p className="text-muted-foreground">
                  Jedes Projekt ist einzigartig. Wir entwickeln maßgeschneiderte Lösungen für Ihre Ziele.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  <BarChart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Messbare Erfolge</h3>
                <p className="text-muted-foreground">
                  Transparente Reportings und kontinuierliche Optimierung für nachhaltigen Erfolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Kontaktieren Sie uns für eine kostenlose Erstberatung und lassen Sie uns gemeinsam Ihre digitale Präsenz optimieren.
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

export default Services;