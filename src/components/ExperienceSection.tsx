import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Data Scientist – Financial Market Algorithms',
      company: 'beIN Media / Nmo AI',
      location: 'Remote · Kuwait',
      period: 'Apr 2025 – Jul 2025 · 3 months',
      description: 'Specialized in AI-driven financial market analysis, building predictive models and enhancing algorithmic trading strategies.',
      achievements: [
        'Built predictive models for financial markets using historical data and advanced analytics.',
        'Improved algorithmic trading strategies through statistical modeling and backtesting.',
        'Developed time-series forecasts using Python (pandas, scikit-learn, statsmodels, Prophet).',
        'Extracted actionable insights to optimize trading engine performance and decision-making.'
      ]
    },
    {
      title: 'Web Scraping Specialist (Python & Scrapy)',
      company: 'Freelance',
      location: 'Remote',
      period: 'Nov 2024 – Apr 2025 · 6 months',
      description: 'Delivered end-to-end web scraping solutions and high-quality structured datasets for clients.',
      achievements: [
        'Developed custom Scrapy spiders to extract data from diverse sources.',
        'Cleaned, processed, and organized large datasets for analysis and reuse.',
        'Ensured data accuracy and efficiency, reducing delivery time and manual workload.'
      ]
    },
    {
      title: 'Mobile Applications Developer (Flutter)',
      company: 'Brain Socket',
      location: 'Part-Time · Damascus, Syria',
      period: 'Jan 2023 – Jun 2025 · 2 yrs 6 mos',
      description: 'Developed and maintained cross-platform mobile apps with focus on performance, scalability, and clean architecture.',
      achievements: [
        'Built and maintained Flutter apps ensuring smooth performance on Android and iOS.',
        'Implemented scalable architectures using Bloc, Provider, and GetX state management.',
        'Integrated cloud services and local storage (Firebase, RESTful APIs, SQLite).',
        'Improved UI/UX through performance tuning and robust bug resolution.',
        'Collaborated in agile teams using Git, Android Studio, Xcode, and Figma to deliver production-ready apps.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building AI solutions across finance, automation, and mobile development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="ml-0 md:ml-16 p-8 shadow-card gradient-card border-border/50 hover:shadow-glow transition-smooth">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;