import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Target, MapPin, Store, Globe, MessageSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const LocalSEO = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Lokales SEO - Zen Style Studio</title>
        <meta name="description" content="Erreichen Sie mehr Kunden in Ihrer Region mit unserer lokalen SEO-Optimierung." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-2">
              <Link 
                to="/services/seo" 
                className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-300"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Zurück zu SEO Services
              </Link>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Lokales</span> SEO
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Lassen Sie Ihr Unternehmen in lokalen Suchergebnissen glänzen und erreichen Sie mehr Kunden in Ihrer Region.
            </p>
            <a href="#contact" className="btn-zen">Lokale Strategie starten</a>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Unsere <span className="text-primary">Lokalen</span> SEO Leistungen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Store className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Google Business Profile
                </h3>
                <p className="text-muted-foreground">
                  Optimierung Ihres Google Business Profils mit vollständigen Informationen, Fotos und regelmäßigen Posts für maximale lokale Sichtbarkeit.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Local Citations
                </h3>
                <p className="text-muted-foreground">
                  Konsistente Einträge in lokalen Branchenverzeichnissen und Karten-Diensten für verbesserte lokale Rankings und Glaubwürdigkeit.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Bewertungsmanagement
                </h3>
                <p className="text-muted-foreground">
                  Strategien für mehr positive Kundenbewertungen und professioneller Umgang mit Feedback für einen starken lokalen Ruf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Local SEO Matters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Warum <span className="text-primary">lokales SEO</span> wichtig ist
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                In der heutigen mobilen Welt sind lokale Suchanfragen entscheidend für Geschäfte mit physischen Standorten.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-card p-8 rounded-3xl card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">46% der Suchanfragen sind lokal</h3>
                </div>
                <p className="text-muted-foreground">
                  Fast die Hälfte aller Google-Suchanfragen haben einen lokalen Bezug. Ohne lokale SEO-Optimierung entgehen Ihnen wertvolle potenzielle Kunden.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-3xl card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">76% besuchen den Standort</h3>
                </div>
                <p className="text-muted-foreground">
                  76% der Personen, die eine lokale Suche auf ihrem Smartphone durchführen, besuchen innerhalb eines Tages ein entsprechendes Geschäft.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-3xl card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">28% führt zu Kauf</h3>
                </div>
                <p className="text-muted-foreground">
                  28% der lokalen Suchanfragen führen zu einem Kauf. Lokales SEO hat einen direkten Einfluss auf Ihre Umsätze und Konversionen.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-3xl card-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Top 3 entscheiden</h3>
                </div>
                <p className="text-muted-foreground">
                  Die meisten Nutzer wählen eines der Top 3 Ergebnisse in der lokalen Suche. Eine gute Platzierung ist daher entscheidend für Ihren Erfolg.
                </p>
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
              Stärken Sie Ihre <span className="text-primary">lokale Präsenz</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Kontaktieren Sie uns für eine kostenlose Analyse Ihrer aktuellen lokalen Suchpräsenz und erfahren Sie, wie wir Ihnen helfen können.
            </p>
            <a href="#contact" className="btn-zen">Kostenlose Analyse erhalten</a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default LocalSEO;