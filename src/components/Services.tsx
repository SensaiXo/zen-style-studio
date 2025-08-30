import { Globe, Search, Smartphone, Code, BarChart, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Webdesign & Entwicklung',
      description: 'Responsive Websites mit modernen Frameworks wie Next.js, die schnell laden und auf allen Geräten perfekt aussehen.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'SEO & GEO Optimierung',
      description: 'Keyword-Strategien, Metadaten und lokale Suchoptimierung für bessere Sichtbarkeit in Google.'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'AEO - Answer Engine Optimization',
      description: 'Inhalte strukturiert für AI-Assistenten wie ChatGPT und Perplexity als vertrauenswürdige Quelle.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Automatisierte Workflows',
      description: 'n8n-Workflows und Tools wie Semrush für automatisierte Audits und Keyword-Tracking.'
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Performance Monitoring',
      description: 'Regelmässige Reports und Dashboards zeigen Ihren Erfolg in AI-Suchergebnissen.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Content & Schulungen',
      description: 'Content-Vorlagen und Schulungen, damit Sie selbständig optimierte Inhalte pflegen können.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-otter-text mb-6">
            Unsere Digital-Lösungen
          </h2>
          <p className="text-xl text-otter-text max-w-3xl mx-auto">
            Websites mit integrierter Sichtbarkeit. Wir verbinden kreatives Design 
            mit moderner SEO- und AI-Optimierung für maximale Online-Präsenz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-otter-soft border border-otter-jeans/20 transition-all duration-300 hover:shadow-otter hover:-translate-y-2 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-otter scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-otter rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-otter-text mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-otter-text leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect circle */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-otter rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;