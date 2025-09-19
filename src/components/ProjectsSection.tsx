import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, TrendingUp, BarChart3, Database, FileText, Type } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Information Extraction from Arabic Invoices",
      description: "AI system that converts Arabic invoices into clean, structured business data (JSON/CSV). Classifies mobile vs. scanned, fixes perspective, extracts key fields via an interactive UI. Business impact: cuts manual entry, reduces errors, and speeds finance operations.",
      technologies: ["Python", "AI", "OCR", "Arabic NLP"],
      icon: FileText,
      category: "AI/Business",
      githubLink: "https://github.com/khaled-rashwani/infromation-extraction-from-arabic-invoice"
    },
    {
      title: "Comprehensive Financial Analysis & Bankruptcy Risk Prediction",
      description: "Decision-support tool blending AI with finance to flag bankruptcy risk and explain drivers. Parses 10-Q PDFs, computes ratios, applies expert scores, ML prediction, and sentiment analysis. Business impact: prioritizes reviews, standardizes assessments, and improves transparency.",
      technologies: ["Python", "ML", "Finance", "NLP"],
      icon: TrendingUp,
      category: "AI/Finance",
      githubLink: "https://github.com/souzana-hamza/Comprehensive-Financial-Analysis-and-Bankruptcy-Risk-Prediction"
    },
    {
      title: "Washington DC Bike Share Analysis 2024",
      description: "Data-to-decisions project turning mobility data into revenue and operations insights. Analyzes trips, weather, and locations; clusters users; forecasts daily revenue. Business impact: informs pricing, fleet distribution, and seasonal/night strategies.",
      technologies: ["Python", "Data Analysis", "ML", "Forecasting"],
      icon: BarChart3,
      category: "Analytics",
      githubLink: "https://github.com/souzana-hamza/Washington-DC-Bike-Share-Analysis-2024"
    },
    {
      title: "Arabic Spelling Correction",
      description: "AI project improving Arabic text quality by fixing spelling and grammatical errors. Combines AraBART fine-tuning, LSTM prediction, and Levenshtein distance correction. Business impact: enables cleaner NLP pipelines, automated proofreading, and better UX.",
      technologies: ["Python", "NLP", "Arabic", "Deep Learning"],
      icon: Type,
      category: "NLP",
      githubLink: "https://github.com/souzana-hamza/Arabic-Spelling-Correction"
    },
    {
      title: "NYC 311 Service Requests Analysis & Modeling",
      description: "AI project predicting wait times for resolving public service requests in NYC. Used preprocessing, feature engineering, boosting, and stacking ensemble models. Business impact: helps agencies forecast delays, allocate resources, and enhance services.",
      technologies: ["Python", "ML", "Ensemble", "Public Service"],
      icon: Database,
      category: "AI/Public",
      githubLink: "https://github.com/souzana-hamza/NYC-311-Service-Requests"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-driven solutions bridging technology and business with measurable impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index} 
                className="p-8 shadow-card gradient-card border-border/50 hover:shadow-glow transition-smooth group animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex pt-4 border-t border-border/50">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="group"
            onClick={() => window.open('https://github.com/souzana-hamza', '_blank')}
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;