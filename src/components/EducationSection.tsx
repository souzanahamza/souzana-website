import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { GraduationCap, University, Calendar, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology Engineering – Artificial Intelligence",
      institution: "Damascus University",
      period: "2020–2025",
      achievement: "Ranked among the top 10 students in the 4th year",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Management Sciences (BSCM) – Finance & Banking",
      institution: "Syrian Virtual University (SVU)",
      period: "2020–2024",
      achievement: "Grade: 81%",
      icon: University,
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-hero bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Double major combining artificial intelligence with finance and business management
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-glow transition-smooth border-l-4 border-l-primary">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <University className="w-4 h-4 mr-2" />
                            {edu.institution}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-primary font-medium">
                      <Award className="w-4 h-4 mr-2" />
                      {edu.achievement}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;