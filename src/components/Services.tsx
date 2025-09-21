import { Globe, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: 'Web Design & Development',
      description: 'Moderne, responsive Websites, die auf allen Geräten überzeugen und Ihre Marke perfekt repräsentieren.',
      aos: 'fade-right',
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO & Web-Präsenz',
      description: 'Steigern Sie Ihre Sichtbarkeit in Suchmaschinen und etablieren Sie eine starke digitale Präsenz.',
      aos: 'fade-left',
    },
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Unsere <span className="text-primary">Kernkompetenzen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wir verwandeln Ihre Vision in eine digitale Realität. Entdecken Sie unsere Services, die auf Wachstum und Erfolg ausgelegt sind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background p-10 rounded-3xl card-glow flex flex-col"
              data-aos={service.aos}
            >
              <div className="w-20 h-20 bg-gradient-otter rounded-3xl flex items-center justify-center text-white mb-8 flex-shrink-0">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16" data-aos="fade-up">
          <Link
            to="/services"
            className="btn-zen"
          >
            Alle Services entdecken
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;