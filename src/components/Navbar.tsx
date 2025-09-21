import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', isDropdown: false },
    { 
      href: '#services', 
      label: 'Services', 
      isDropdown: true,
      dropdownItems: [
        { href: '/services/webdesign', label: 'Webdesign' },
        { href: '/services/seo', label: 'SEO & GEO' },
      ]
    },
    { href: '#blog', label: 'Blog', isDropdown: false },
    { href: '#faq', label: 'FAQ', isDropdown: false },
    { href: '#contact', label: 'Contact', isDropdown: false },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-primary/20' 
        : 'bg-background/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">Otterino.com</Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center relative text-foreground font-medium transition-colors duration-300 hover:text-primary group">
                      {link.label} <ChevronDown className="h-4 w-4 ml-1" />
                      <span className="absolute bottom-[-6px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-background border-primary/20">
                      {link.dropdownItems?.map((item) => (
                        <DropdownMenuItem key={item.href} className="hover:bg-accent/50 focus:bg-accent/50">
                          <Link 
                            to={item.href} 
                            className="w-full text-foreground hover:text-primary transition-colors"
                          >
                            {item.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={link.href}
                    className="relative text-foreground font-medium transition-colors duration-300 hover:text-primary group"
                  >
                    {link.label}
                    <span className="absolute bottom-[-6px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-zen ml-4"
              >
                Get Started
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <ul className="flex flex-col space-y-4 pt-4 border-t border-primary/20">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.isDropdown ? (
                  <div className="space-y-2">
                    <div className="block text-foreground font-medium mb-2">
                      {link.label}
                    </div>
                    <ul className="pl-4 space-y-2 border-l border-primary/20">
                      {link.dropdownItems?.map((item) => (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            className="block text-foreground font-medium transition-colors duration-300 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block text-foreground font-medium transition-colors duration-300 hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-zen inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;