import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CardAccentBar, CardIcon } from '@/components/ui/card-icon';
import { sectionCardClass } from '@/lib/card-styles';
import { cn } from '@/lib/utils';
import { Brain, Database, Code, BarChart3, Cog, Eye, Settings, Smartphone, Handshake } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      // الأساسيات فقط هنا
      skills: ["Python (Advanced)", "Dart (Advanced)", "TypeScript & JavaScript", "SQL", "C++ & Java (Basic)"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      // كل ما يتعلق بالنماذج والذكاء
      skills: [
        "Generative AI, LLMs (Gemini, OpenAI) & RAG",
        "Vector Databases (Qdrant, Pinecone)",
        "Multimodal AI (CLIP Embeddings)",
        "Predictive Modeling & Time-Series",
        "NLP & Text Analysis",
        "Deep Learning & Ensembles"
      ]
    },
    {
      title: "Full-Stack & Mobile Dev",
      icon: Smartphone,
      // أطر العمل وبناء الأنظمة
      skills: [
        "Flutter (Cross-platform, Bloc/GetX)",
        "React.js, Tailwind CSS & Vite",
        "Supabase (Auth, DB, Realtime)",
        "State Management (TanStack Query)",
        "SaaS Architecture & RBAC"
      ]
    },
    {
      title: "Data Analysis & Finance",
      icon: BarChart3,
      // تحليل البيانات والأرقام
      skills: [
        "Financial Modeling & Excel",
        "Data Visualization & Storytelling",
        "Pandas, NumPy, Matplotlib",
        "Exploratory Data Analysis (EDA)"
      ]
    },
    {
      title: "Automation & Engineering", 
      icon: Cog,
      // نقل البيانات والأتمتة
      skills: [
        "Web Scraping (Scrapy, Selenium)",
        "Workflow Automation (n8n)",
        "ETL Pipelines & Data Export",
        "API Integrations & Webhooks"
      ]
    },
    {
      title: "Computer Vision",
      icon: Eye,
      // المعالجة البصرية البحتة
      skills: ["OpenCV (Preprocessing, Detection)", "Object Recognition"]
    },
    {
      title: "Tools & DevOps",
      icon: Settings,
      // أدوات المساعدة
      skills: [
        "Git/GitHub & CI/CD Basics",
        "Agile/Scrum Workflows", 
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
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

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-4">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className={cn(sectionCardClass, "sticky")}
                  style={{ top: `${80 + index * 20}px` }}
                >
                  <CardAccentBar />
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-6">
                      <CardIcon icon={IconComponent} />
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    
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

            {/* Soft Skills */}
            <Card 
              className={cn(sectionCardClass, "sticky")}
              style={{ top: `${80 + skillCategories.length * 20}px` }}
            >
              <CardAccentBar />
              <div className="relative">
                <div className="flex items-center space-x-3 mb-6">
                  <CardIcon icon={Handshake} />
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