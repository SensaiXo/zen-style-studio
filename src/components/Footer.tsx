import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Webdesign', href: '#' },
      { label: 'SEO Optimierung', href: '#' },
      { label: 'AEO - Answer Engine', href: '#' },
      { label: 'Performance Monitoring', href: '#' },
      { label: 'Content Strategie', href: '#' },
      { label: 'Workflow Automation', href: '#' }
    ],
    company: [
      { label: 'Über uns', href: '#' },
      { label: 'Unser Team', href: '#' },
      { label: 'Referenzen', href: '#' },
      { label: 'Blog', href: '#blog' },
      { label: 'Kontakt', href: '#contact' },
      { label: 'FAQ', href: '#faq' }
    ],
    resources: [
      { label: 'SEO Guides', href: '#' },
      { label: 'Digital Tips', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Workshops', href: '#' },
      { label: 'Newsletter', href: '#' },
      { label: 'Support', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-background text-foreground border-t border-primary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Otterino.com
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Schweizer Studio für Web- und Digitalprojekte. Wir verbinden kreatives 
              Webdesign mit moderner Sichtbarkeits-Technik für Websites, die gefunden werden.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-black transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">
              Unsere Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">
              Ressourcen
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary/20 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 text-primary">
              Bleiben Sie informiert
            </h4>
            <p className="text-muted-foreground mb-6">
              Abonnieren Sie unseren Newsletter für Digital-Tipps und Updates.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Ihre E-Mail eingeben"
                className="flex-1 px-4 py-3 bg-input border border-primary/20 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
              />
              <button className="btn-zen whitespace-nowrap">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground flex items-center gap-2">
              © {currentYear} Otterino.com. Made with 
              <Heart size={16} className="text-primary" />
              für Ihren digitalen Erfolg.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Datenschutz
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                AGB
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;