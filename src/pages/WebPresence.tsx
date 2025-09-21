import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Globe, Share2, Wifi, LineChart, MessageCircle, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const WebPresence = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Digitale Web-Präsenz - Zen Style Studio</title>
        <meta name="description" content="Stärken Sie Ihre Online-Identität mit einer umfassenden digitalen Präsenz." />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Digitale <span className="text-primary">Web-Präsenz</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Stärken Sie Ihre Online-Identität mit einer umfassenden digitalen Präsenz, die über eine einfache Website hinausgeht.
            </p>
            <a href="#contact" className="btn-zen">Strategie entwickeln</a>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Omnichannel Strategie
                </h3>
                <p className="text-muted-foreground">
                  Koordinierte Präsenz über Website, Social Media, Business-Profile und Branchenverzeichnisse für maximale Sichtbarkeit.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Share2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Social Media Management
                </h3>
                <p className="text-muted-foreground">
                  Professionelle Betreuung Ihrer Social-Media-Kanäle mit strategischen Inhalten und Community-Management.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Wifi className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Online Reputation
                </h3>
                <p className="text-muted-foreground">
                  Aktives Management Ihres digitalen Rufs mit Bewertungsstrategien und Monitoring Ihres Online-Images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Web Presence Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
              Komponenten einer starken <span className="text-primary">Web-Präsenz</span>
            </h2>
            
            <div className="space-y-16">
              {/* Component 1: Content Strategy */}
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-8 rounded-3xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-4">Content-Strategie</h3>
                    <p className="text-muted-foreground mb-6">
                      Entwicklung einer kohärenten Content-Strategie, die Ihre Markenidentität stärkt und Mehrwert für Ihre Zielgruppe bietet. Von Blogartikeln über Videos bis hin zu Infografiken.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">SEO-optimierte Blogartikel</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Video-Content für soziale Medien</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Lead-Magnets und downloadbare Ressourcen</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-card rounded-3xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <MessageCircle className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Component 2: Analytics & Monitoring */}
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-8 rounded-3xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-4">Analytics & Monitoring</h3>
                    <p className="text-muted-foreground mb-6">
                      Umfassende Überwachung und Analyse Ihrer Online-Präsenz mit detaillierten Berichten und Einblicken in die Performance Ihrer digitalen Kanäle.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Website-Analyse mit Google Analytics 4</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Social Media Performance-Tracking</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Wettbewerbsanalyse und Markt-Monitoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-card rounded-3xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <LineChart className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Component 3: Brand Amplification */}
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-8 rounded-3xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-4">Marken-Verstärkung</h3>
                    <p className="text-muted-foreground mb-6">
                      Stärkung Ihrer Markenidentität durch koordinierte Kommunikation und strategische Partnerschaften, um Ihre Reichweite zu vergrößern.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Influencer-Kooperationen</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">PR und Medienpräsenz</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">Community-Building und Engagement</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 h-64 bg-card rounded-3xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Megaphone className="w-16 h-16 text-primary" />
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
              Stärken Sie Ihre <span className="text-primary">Online-Präsenz</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Kontaktieren Sie uns für eine umfassende Analyse Ihrer aktuellen Web-Präsenz und maßgeschneiderte Strategien für Ihr Wachstum.
            </p>
            <a href="#contact" className="btn-zen">Kostenloses Beratungsgespräch</a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebPresence;