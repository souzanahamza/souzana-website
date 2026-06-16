import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CardAccentBar } from '@/components/ui/card-icon';
import { University, Calendar, Award } from 'lucide-react';
import damascusLogo from '@/assets/damascus-university.png';
import svuLogo from '@/assets/syrian-virtual-university.png';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology Engineering – Artificial Intelligence",
      institution: "Damascus University",
      period: "2020–2025",
      achievement: "Ranked among the top 10 students in the 4th year",
      logo: damascusLogo,
    },
    {
      degree: "Bachelor of Management Sciences (BSCM) – Finance & Banking",
      institution: "Syrian Virtual University (SVU)",
      period: "2020–2024",
      achievement: "Grade: 81%",
      logo: svuLogo,
    }
  ];

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary/80 mb-3">
              Academic Background
            </span>
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-hero bg-clip-text text-transparent">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A double major combining artificial intelligence with finance and business management.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative pl-8 sm:pl-12">
            {/* Vertical connecting line */}
            <div className="absolute left-[1.4rem] sm:left-[1.9rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />

            <div className="space-y-10">
              {education.map((edu, index) => {
                return (
                  <div key={index} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-9 sm:-left-[3.25rem] top-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white shadow-glow ring-4 ring-background overflow-hidden">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <Card className="group relative shadow-card gradient-card border-border/50 rounded-2xl overflow-hidden transition-smooth hover:shadow-glow hover:-translate-y-2 hover:border-primary/40">
                      <CardAccentBar />
                      <CardHeader className="pb-3">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug max-w-md group-hover:text-primary transition-smooth">
                            {edu.degree}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.period}
                          </span>
                        </div>
                        <div className="flex items-center text-muted-foreground mt-2">
                          <University className="w-4 h-4 mr-2 text-primary/70" />
                          <span className="text-sm font-medium">{edu.institution}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/10 px-3 py-2 text-sm font-medium text-primary w-fit">
                          <Award className="w-4 h-4" />
                          {edu.achievement}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;