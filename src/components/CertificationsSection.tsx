import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Generative AI with Large Language Models',
      issuer: 'DeepLearning.AI & Amazon Web Services',
      issued: 'April 2025',
      credentialId: '26KWP2A8QODD',
      skills: ['Artificial Intelligence (AI)', 'Large Language Models (LLMs)'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/26KWP2A8QODD'
    },
    {
      title: 'Neural Networks and Deep Learning',
      issuer: 'DeepLearning.AI',
      issued: 'February 2025',
      credentialId: 'RVHBV1IBEC66',
      skills: ['Deep Learning', 'AI', 'Neural Networks'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/RVHBV1IBEC66'
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      issuer: 'Stanford University',
      issued: 'January 2025',
      credentialId: 'G4Q7PX03HD29',
      skills: ['Unsupervised Learning', 'Reinforcement Learning', 'Recommender Systems'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/G4Q7PX03HD29'
    },
    {
      title: 'Advanced Learning Algorithms',
      issuer: 'Stanford University',
      issued: 'December 2024',
      credentialId: '5KV09A1NNSW4',
      skills: ['Machine Learning', 'Algorithms'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/5KV09A1NNSW4'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      issued: 'November 2024',
      credentialId: '3NIW93XMLJV3',
      skills: ['Machine Learning', 'Python', 'AI'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/3NIW93XMLJV3'
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Stanford University',
      issued: 'November 2024',
      credentialId: 'O7RESWEWKP8O',
      skills: ['Supervised Learning', 'Regression', 'Classification'],
      category: 'AI/ML',
      certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/O7RESWEWKP8O'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-hero bg-clip-text text-transparent">Licenses & Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click "View Certificate" to verify on Coursera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card gradient-card border-border/50 hover:shadow-glow transition-smooth group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {cert.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="font-medium">Issuer:</span> {cert.issuer}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="font-medium">Issued:</span> {cert.issued}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Credential ID:</span> 
                      <code className="bg-muted px-2 py-1 rounded text-xs">{cert.credentialId}</code>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <span className="text-sm font-medium text-foreground">Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Certificate Button */}
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                >
                  <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All certifications are verified and can be validated through the respective platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;