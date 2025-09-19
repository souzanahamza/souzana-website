import { Card } from '@/components/ui/card';
import { Mail, Linkedin, Github, Send, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email Me',
      value: 'souzana.hamza@email.com',
      href: 'mailto:souzana.hamza@email.com',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'Connect on LinkedIn',
      value: 'linkedin.com/in/souzana-hamza',
      href: 'https://linkedin.com/in/souzana-hamza',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub Profile',
      value: 'github.com/souzana-hamza',
      href: 'https://github.com/souzana-hamza',
      color: 'text-foreground'
    },
    {
      icon: Phone,
      label: 'Call Me',
      value: '+963932852762',
      href: 'tel:+963932852762',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">Contact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you're looking for someone who can speak both the language of engineers and decision-makers, you're in the right place.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8 justify-center">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold">Get In Touch</h3>
                  <p className="text-muted-foreground">Ready for new opportunities and collaborations</p>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <Card 
                      key={index}
                      className="p-6 shadow-card gradient-card border-border/50 hover:shadow-glow transition-smooth animate-fade-in-up group cursor-pointer"
                      style={{ animationDelay: `${index * 150}ms` }}
                      onClick={() => window.open(method.href, '_blank')}
                    >
                      <div className="text-center space-y-4">
                        <div className={`p-4 bg-background/10 rounded-xl mx-auto w-fit ${method.color}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                            {method.label}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="p-6 shadow-card gradient-card border-border/50 max-w-md mx-auto">
              <div className="flex items-center gap-4 justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground">Available for opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Open to remote roles and relocation
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;