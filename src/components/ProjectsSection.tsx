import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardAccentBar, CardIcon } from '@/components/ui/card-icon';
import { sectionCardClass } from '@/lib/card-styles';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, TrendingUp, BarChart3, Database, FileText, Type, ShoppingBag, Globe, Printer, ArrowRight, LineChart } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Seluze AI Agent",
      description: "Your personal AI shopping assistant. Just describe what you're looking for — or snap a photo — and Seluze finds the perfect products and chats with you like a real sales expert. It understands intent, answers follow-up questions, and even speaks your language, turning browsing into a fast, friendly conversation.",
      technologies: ["Agentic RAG", "FastAPI", "Qdrant", "CLIP ViT", "Gemini", "Supabase"],
      icon: ShoppingBag,
      category: "AI/GenAI & E-commerce",
      demoLink: "https://seluze.vercel.app/",
      caseStudySlug: "seluze-ai-agent"
    },
    {
      title: "FinMCP",
      description: "Financial AI backend exposing Yahoo Finance market data through a FastMCP stdio server (15 tools) and a Gemini-powered REST chat API. A shared yfinance service layer delivers stock quotes, financials, risk metrics, news sentiment, and SEC filings — consumable by MCP clients like Cursor and Claude Desktop, or any frontend via REST.",
      technologies: ["Python", "FastAPI", "FastMCP", "Gemini", "yfinance"],
      icon: LineChart,
      category: "AI/Finance",
      githubLink: "https://github.com/souzanahamza/finMCP",
      caseStudySlug: "finmcp"
    },
    {
      title: "Printava | Print Shop SaaS ERP (Beta)",
      description: "Engineered a comprehensive SaaS solution orchestrating the entire print order lifecycle. Implemented a complex state-machine workflow connecting Sales, Design, and Production. Features include a robust multi-currency financial system, exchange rate snapshots, and strict Row-Level Security (RLS). Current version demonstrates the core workflow architecture.",
      technologies: ["React", "TypeScript", "Supabase", "TanStack Query", "Tailwind CSS"],
      icon: Printer,
      category: "SaaS/Full-Stack",
      demoLink: "https://print-flow-ten.vercel.app/",
      caseStudySlug: "printava-order-flow"
    },
    {
      title: "Information Extraction from Arabic Invoices",
      description: "AI system that converts Arabic invoices into clean, structured business data (JSON/CSV). Classifies mobile vs. scanned, fixes perspective, extracts key fields via an interactive UI. Business impact: cuts manual entry, reduces errors, and speeds finance operations.",
      technologies: ["Python", "AI", "OCR", "Arabic NLP"],
      icon: FileText,
      category: "AI/Business",
      githubLink: "https://github.com/souzanahamza/information-extraction-from-arabic-invoice",
      caseStudySlug: "invoice-processing-pipeline"
    },
    {
      title: "Comprehensive Financial Analysis & Bankruptcy Risk Prediction",
      description: "Decision-support tool blending AI with finance to flag bankruptcy risk and explain drivers. Parses 10-Q PDFs, computes ratios, applies expert scores, ML prediction, and sentiment analysis. Business impact: prioritizes reviews, standardizes assessments, and improves transparency.",
      technologies: ["Python", "ML", "Finance", "NLP"],
      icon: TrendingUp,
      category: "AI/Finance",
      githubLink: "https://github.com/souzana-hamza/Comprehensive-Financial-Analysis-and-Bankruptcy-Risk-Prediction",
      caseStudySlug: "financial-analysis-bankruptcy-prediction"
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
      githubLink: "https://github.com/souzana-hamza/Arabic-Spelling-Correction",
      caseStudySlug: "arabic-spelling-correction"
    },
    {
      title: "NYC 311 Service Requests Analysis & Modeling",
      description: "AI project predicting wait times for resolving public service requests in NYC. Used preprocessing, feature engineering, boosting, and stacking ensemble models. Business impact: helps agencies forecast delays, allocate resources, and enhance services.",
      technologies: ["Python", "ML", "Ensemble", "Public Service"],
      icon: Database,
      category: "AI/Public",
      githubLink: "https://github.com/souzana-hamza/NYC-311-Service-Requests",
      caseStudySlug: "nyc-311-service-requests"
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
            // Determine if it's a demo link or github link to adjust button style/icon
            const hasDemo = !!project.demoLink;
            const linkUrl = project.demoLink || project.githubLink;

            return (
              <Card
                key={index}
                className={cn(sectionCardClass, "flex h-full flex-col animate-fade-in-up")}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardAccentBar />

                {/* Ambient glow on hover */}
                <span className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-smooth group-hover:opacity-100" />

                <div className="relative flex h-full flex-col space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <CardIcon icon={IconComponent} />
                      <Badge variant="secondary" className="text-xs font-medium">
                        {project.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold leading-snug text-foreground transition-smooth group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-border/60 bg-background/40 text-xs transition-smooth hover:border-primary/40 hover:text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex flex-col gap-2 border-t border-border/50 pt-5">
                    {project.caseStudySlug && (
                      <Button
                        variant="default"
                        size="sm"
                        className="group/btn w-full"
                        asChild
                      >
                        <Link to={`/projects/${project.caseStudySlug}`}>
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 transition-smooth group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/40 text-primary transition-smooth hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      onClick={() => window.open(linkUrl, '_blank')}
                    >
                      {hasDemo ? (
                        <>
                          <Globe className="mr-2 h-4 w-4" />
                          View Live Demo
                        </>
                      ) : (
                        <>
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </>
                      )}
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