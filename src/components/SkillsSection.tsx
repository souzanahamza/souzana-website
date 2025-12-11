import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Database, Code, BarChart3, Cog, Eye, Settings, Smartphone, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      // أضفنا TypeScript و SQL بشكل صريح
      skills: ["Python (Advanced)", "Dart (Advanced)", "TypeScript & JavaScript", "SQL", "C++ & Java (Basic)"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "Predictive Modeling & Time-Series Analysis",
        "Generative AI, LLMs (Gemini, OpenAI) & RAG", // Updated
        "Vector Databases (Qdrant, Pinecone)", // New for SmartShop
        "Multimodal AI (CLIP Embeddings)", // New for SmartShop
        "Machine Learning & Feature Engineering", 
        "Ensemble & Deep Learning Methods",
        "Natural Language Processing (NLP)",
        "Model Evaluation"
      ]
    },
    {
      title: "Full-Stack & Mobile Development", // Renamed from Mobile & Software
      icon: Smartphone, // Or stick with Smartphone, or change to Layers
      skills: [
        "Flutter (Cross-platform, Bloc/GetX)",
        "React.js & Tailwind CSS", // New for Printava
        "Backend-as-a-Service (Supabase, Firebase)", // New for Printava
        "State Management (TanStack Query, Provider)", // New
        "SaaS Architecture & RBAC Security", // New for Printava
        "REST APIs & SQLite integration"
      ]
    },
    {
      title: "Data Analysis & Processing",
      icon: BarChart3,
      skills: [
        "Data Cleaning, EDA & Visualization",
        "Financial Modeling & Excel Analysis",
        "Pandas, NumPy, Matplotlib, Seaborn",
        "Jupyter Notebook & Google Colab"
      ]
    },
    {
      title: "Automation & Data Engineering", 
      icon: Cog,
      skills: [
        "Web Scraping (Python, Scrapy, Selenium)",
        "Workflow Automation (n8n, Python pipelines)",
        "ETL Pipelines & Structured Data Export",
        "APIs Integration (REST, LLM APIs)"
      ]
    },
    {
      title: "Computer Vision",
      icon: Eye,
      skills: ["OpenCV (Preprocessing & Recognition)", "Image Embeddings & Semantic Search"]
    },
    {
      title: "Tools & Collaboration",
      icon: Settings,
      skills: [
        "Git/GitHub (CI/CD basics)",
        "Agile/Scrum methodologies", 
        "PostgreSQL (via Supabase)",
        "VS Code, Android Studio, Xcode"
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