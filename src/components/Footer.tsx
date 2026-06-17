import { Mail, Linkedin, Github, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const navItems = [
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Mail, href: 'mailto:souzana.hamze@email.com', label: 'Email' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/souzana-hamza-508a30225/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/souzana-hamza', label: 'GitHub' },
    { icon: Phone, href: 'tel:+963932852762', label: 'Phone' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute inset-x-0 top-0 h-px gradient-hero opacity-60" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[40rem] h-48 gradient-hero opacity-[0.07] blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 py-14 relative">
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="font-serif text-2xl font-bold gradient-hero bg-clip-text text-transparent hover:scale-105 transition-bounce inline-block"
            >
              SOUZANA
            </button>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Bridging the gap between engineers and decision-makers — turning complex ideas into clear outcomes.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm relative group inline-block"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + back to top */}
          <div className="md:justify-self-end space-y-5">
            <h4 className="font-semibold text-foreground">Let's connect</h4>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-background/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 transition-smooth"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth group"
            >
              <span className="p-2 rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/50 transition-smooth">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <p>© {year} Souzana Hamza — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
