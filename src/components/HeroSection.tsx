import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, ExternalLink } from 'lucide-react';
import souzanaPortrait from '@/assets/souzana-portrait.jpg';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  Souzana Hamza <br /> AI Engineer & Data Scientist
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I turn data into decisions and AI into business value. With a Double Major in Artificial Intelligence and Finance & Banking, I build predictive models, AI agents, automate workflows, and deliver scalable software.
              </p>

              {/* Quick Highlights Badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  AI × Finance Bridge
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  Predictive & Analytics
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  AI Agents
                </div>
                <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  Automation & Data Pipelines
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gradient-button shadow-button animate-pulse-glow" asChild>
                <a href="#projects" className="flex items-center justify-center gap-2">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact" className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1tQaCY5FmV0vgXZCp4C1oxZyoVl9yMItF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;