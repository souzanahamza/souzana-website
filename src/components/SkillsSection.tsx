import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, Code, BarChart3, Cog, Eye, Settings, Smartphone } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python (Advanced)", "Dart (Advanced)", "HTML/CSS & JavaScript (Intermediate)", "C++, Java (Basic)"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Predictive Modeling & Time-Series Analysis",
        "Machine Learning & Feature Engineering", 
        "Ensemble & Deep Learning Methods",
        "Natural Language Processing (NLP)",
        "Generative AI & Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Model Evaluation"
      ]
    },
    {
      title: "Data Analysis & Processing",
      icon: BarChart3,
      skills: [
        "Data Cleaning & Transformation, Exploratory Data Analysis (EDA)",
        "Data Visualization & Storytelling",
        "Excel-based analysis & financial modeling",
        "Jupyter Notebook, Google Colab"
      ]
    },
    {
      title: "Automation & Data Engineering", 
      icon: Cog,
      skills: [
        "Web Scraping (Python, Scrapy)",
        "Workflow Automation (n8n, Python pipelines)",
        "SQL Databases",
        "APIs Integration (REST APIs, LLM APIs, JSON/CSV/Parquet export)"
      ]
    },
    {
      title: "Computer Vision",
      icon: Eye,
      skills: ["OpenCV for preprocessing, feature extraction & object recognition"]
    },
    {
      title: "Mobile & Software Development",
      icon: Smartphone,
      skills: [
        "Flutter (cross-platform apps, Bloc/Provider/GetX)",
        "Firebase, REST APIs, SQLite integration",
        "UI/UX basics, responsive design, debugging & troubleshooting"
      ]
    },
    {
      title: "Tools & Collaboration",
      icon: Settings,
      skills: [
        "Git/GitHub (version control & team workflows)",
        "Agile/Scrum methodologies", 
        "Beginner knowledge in AWS services"
      ]
    }
  ];

  const softSkills = [
    "Bridging Technology & Business through AI-driven solutions",
    "Strong analytical mindset & problem-solving ability",
    "Clear communication & data storytelling", 
    "Self-organization, self-learning & curiosity-driven growth",
    "Ownership, autonomy, and teamwork"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="gradient-hero bg-clip-text text-transparent">Technical Skills</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Comprehensive expertise spanning AI, data science, automation, and software development
                </p>
              </div>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-8 space-y-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-glow transition-smooth sticky"
                  style={{ top: `${80 + index * 20}px` }}
                >
                  <div className="p-6">
                    {/* Card Header */}
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    
                    {/* Skills as Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="px-3 py-1.5 text-xs bg-muted/80 hover:bg-muted border-0 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Soft Skills Card */}
            <Card 
              className="shadow-card hover:shadow-glow transition-smooth sticky"
              style={{ top: `${80 + skillCategories.length * 20}px` }}
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-lg">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                  <div className="flex-1 h-px bg-border"></div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="outline"
                      className="px-3 py-1.5 text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;