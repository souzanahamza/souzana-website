import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-card' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-2xl font-bold gradient-hero bg-clip-text text-transparent hover:scale-105 transition-bounce"
          >
            SOUZANA
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-3 ml-4">
              <ThemeToggle />
              <Button variant="outline" size="sm" asChild>
                <a href="https://drive.google.com/file/d/1tQaCY5FmV0vgXZCp4C1oxZyoVl9yMItF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-card">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-smooth py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" size="sm" className="mt-4 w-fit" asChild>
                <a href="https://drive.google.com/file/d/1tQaCY5FmV0vgXZCp4C1oxZyoVl9yMItF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;