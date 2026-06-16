const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Emoji Mascots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="absolute top-24 left-[12%] text-4xl animate-float-around select-none">🤖</span>
        <span className="absolute top-1/3 right-[10%] text-5xl animate-float-around select-none" style={{ animationDelay: '1.5s', animationDuration: '14s' }}>📊</span>
        <span className="absolute bottom-28 left-[18%] text-4xl animate-float-around select-none" style={{ animationDelay: '3s', animationDuration: '10s' }}>☕</span>
        <span className="absolute bottom-1/3 right-[16%] text-3xl animate-float-around select-none" style={{ animationDelay: '0.8s', animationDuration: '13s' }}>✨</span>
        <span className="absolute top-1/2 left-[6%] text-3xl animate-float-around select-none" style={{ animationDelay: '2.2s', animationDuration: '11s' }}>💸</span>
      </div>

      <div className="container mx-auto px-6 pt-20 flex-1 flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  Souzana Hamza
                </span>
                <span className="animate-wave ml-2">👋</span>
                <span className="gradient-hero bg-clip-text text-transparent">
                  <br /> AI Engineer & Data Scientist
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I build AI solutions that turn data into real business value. With a double major in Artificial Intelligence and Finance & Banking, I can both develop the model <em>and</em> explain its impact on the bottom line. I ship predictive models, AI agents, automated workflows, and software built to scale.
              </p>

              {/* Quick Highlights Badges */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <div className="hover-wiggle cursor-default px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  🧠 Fluent in AI × Finance
                </div>
                <div className="hover-wiggle cursor-default px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  🔮 Predicts the future (statistically)
                </div>
                <div className="hover-wiggle cursor-default px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  🤖 Trains AI agents to behave
                </div>
                <div className="hover-wiggle cursor-default px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                  😴 Automates the boring stuff
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#projects" className="group relative z-10 flex flex-col items-center gap-2 pt-12 pb-8 text-muted-foreground hover:text-primary transition-smooth">
        <span className="text-xs font-medium opacity-70 group-hover:opacity-100">scroll, I worked hard on this 👇</span>
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-current rounded-full p-1">
            <div className="w-1 h-3 bg-current rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </a>
    </section>
  );
};

export default HeroSection;