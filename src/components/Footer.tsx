import { Facebook, Instagram, Twitter, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Mindfulness Training', href: '#' },
      { label: 'Emotional Wellness', href: '#' },
      { label: 'Nature Therapy', href: '#' },
      { label: 'Group Sessions', href: '#' },
      { label: 'Personal Coaching', href: '#' },
      { label: 'Energy Healing', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Team', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQ', href: '#faq' }
    ],
    resources: [
      { label: 'Meditation Guides', href: '#' },
      { label: 'Wellness Tips', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Events', href: '#' },
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
    <footer className="bg-zen-dark text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 text-zen-mint">
              Zen Studio
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Guiding you on a transformative journey toward inner peace, 
              mindfulness, and holistic well-being through ancient wisdom 
              and modern techniques.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-zen-soft hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zen-mint">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-zen-mint transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zen-mint">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-zen-mint transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-zen-mint">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-zen-mint transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 text-zen-mint">
              Stay Connected
            </h4>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for wellness tips and updates.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-zen-mint transition-colors duration-300"
              />
              <button className="btn-zen whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 flex items-center gap-2">
              © {currentYear} Zen Studio. Made with 
              <Heart size={16} className="text-zen-mint" />
              for your well-being.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-zen-mint transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-zen-mint transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-zen-mint transition-colors duration-300">
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