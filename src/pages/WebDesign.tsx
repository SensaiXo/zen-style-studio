import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Globe, Laptop, Smartphone, Paintbrush, Code } from 'lucide-react';

const WebDesign = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Web Design</span> &amp; Development
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Responsive Websites mit modernen Frameworks wie Next.js, die schnell laden und auf allen Geräten perfekt aussehen.
            </p>
            <a href="#contact" className="btn-zen">Projekt starten</a>
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
                  <Laptop className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Responsive Design
                </h3>
                <p className="text-muted-foreground">
                  Websites die auf allen Geräten perfekt aussehen - vom Smartphone bis zum Desktop. Mit flüssigen Layouts und optimierten Elementen.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Mobile First
                </h3>
                <p className="text-muted-foreground">
                  Design und Entwicklung mit Fokus auf mobile Nutzer. Optimiert für Touch-Interfaces und schnelle Ladezeiten auch bei langsameren Verbindungen.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Paintbrush className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  UX/UI Design
                </h3>
                <p className="text-muted-foreground">
                  Nutzerfreundliche Interfaces mit intuitivem Design. Wir kombinieren Ästhetik mit Funktionalität für die beste User Experience.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-3xl card-glow">
                <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Modern Frameworks
                </h3>
                <p className="text-muted-foreground">
                  Entwicklung mit Next.js, React und anderen modernen Technologien für schnelle, dynamische und wartbare Webanwendungen.
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
              Unser Design-<span className="text-primary">Prozess</span>
            </h2>
            
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">01</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">Konzeption & Wireframing</h4>
                    <p className="text-muted-foreground">
                      Wir beginnen mit der Planung der Struktur und des Inhalts Ihrer Website. Durch Wireframes und Prototypen visualisieren wir die Benutzerführung und Informationsarchitektur.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Globe className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">02</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">Design & Entwicklung</h4>
                    <p className="text-muted-foreground">
                      Nach Ihrer Freigabe des Konzepts erstellen wir detaillierte Designs und setzen diese in Code um. Wir entwickeln mit responsivem Design und optimierter Performance.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Code className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <div className="bg-card p-6 rounded-2xl card-glow">
                    <h3 className="text-3xl font-semibold text-primary mb-2">03</h3>
                    <h4 className="text-2xl font-semibold text-foreground mb-4">Testing & Launch</h4>
                    <p className="text-muted-foreground">
                      Vor dem Launch testen wir gründlich auf allen Geräten und Browsern. Nach Ihrer finalen Abnahme veröffentlichen wir die Website und sorgen für einen reibungslosen Start.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 bg-card h-64 rounded-2xl flex items-center justify-center card-glow">
                  <div className="p-8 bg-background/50 rounded-xl">
                    <Laptop className="w-16 h-16 text-primary" />
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
              Bereit für Ihre neue Website?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Kontaktieren Sie uns für ein unverbindliches Erstgespräch und lassen Sie uns Ihr Projekt besprechen.
            </p>
            <a href="#contact" className="btn-zen">Jetzt anfragen</a>
          </div>
        </div>
      </section>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebDesign;