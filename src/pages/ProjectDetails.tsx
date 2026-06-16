import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Image as ImageIcon,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Footer from '@/components/Footer';
import { getProjectBySlug } from '@/data/projects';

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold">Project not found</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The case study you're looking for doesn't exist or may have been moved.
          </p>
          <Button asChild>
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;
  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky back navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" size="sm" asChild className="group -ml-2">
            <Link to="/#projects" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 transition-smooth group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 gradient-hero opacity-[0.07]" aria-hidden="true" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full gradient-hero opacity-10 blur-3xl" aria-hidden="true" />
          <div className="container mx-auto px-6 py-16 md:py-24 relative">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-sm">
                  {project.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  {project.title}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {project.tagline}
              </p>

              {/* Tech badges */}
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Action buttons (safe rendering) */}
              {(project.liveLink || project.codeLink) && (
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveLink && (
                    <Button size="lg" asChild className="group gradient-button shadow-button hover:shadow-glow transition-smooth border-0">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 transition-smooth group-hover:scale-110" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {project.codeLink && (
                    <Button size="lg" variant="outline" asChild className="group transition-smooth hover:border-primary hover:text-primary">
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 transition-smooth group-hover:scale-110" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 md:py-20 space-y-20 md:space-y-28 max-w-5xl">
          {/* 1. Overview & Problem Statement */}
          <section className="space-y-8 animate-fade-in-up">
            <SectionHeading icon={Target} label="01" title="Overview & Problem Statement" />

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8 gradient-card border-border/50 shadow-card space-y-3">
                <div className="flex items-center gap-2 text-destructive">
                  <AlertTriangle className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">The Problem</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.problem}
                </p>
              </Card>

              <Card className="p-8 gradient-card border-border/50 shadow-card space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Lightbulb className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">The Solution</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview.summary}
                </p>
              </Card>
            </div>

            {project.overview.highlights && project.overview.highlights.length > 0 && (
              <div className="grid gap-3 sm:grid-cols-2">
                {project.overview.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 2. Architecture & Technologies */}
          <section className="space-y-8 animate-fade-in-up">
            <SectionHeading icon={Layers} label="02" title="Architecture & Technologies" />

            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.architecture.description}
            </p>

            {project.architecture.diagram && (
              <Card className="overflow-hidden border-border/50 shadow-card">
                <div className="bg-muted/40 px-4 py-2 border-b border-border/50 text-xs uppercase tracking-wider text-muted-foreground">
                  System Architecture
                </div>
                <pre className="p-6 overflow-x-auto text-sm leading-relaxed text-foreground/90 font-mono">
                  {project.architecture.diagram}
                </pre>
              </Card>
            )}

            {project.architecture.components && project.architecture.components.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                {project.architecture.components.map((component) => (
                  <Card
                    key={component.name}
                    className="p-6 gradient-card border-border/50 shadow-card hover:shadow-glow transition-smooth group"
                  >
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth mb-2">
                      {component.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {component.detail}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </section>

          {/* 3. Technical Challenges & Solutions */}
          <section className="space-y-8 animate-fade-in-up">
            <SectionHeading icon={Zap} label="03" title="Technical Challenges & Solutions" />

            <div className="space-y-5">
              {project.challenges.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border/50 shadow-card hover:shadow-glow transition-smooth"
                >
                  <div className="grid md:grid-cols-2">
                    {/* Challenge */}
                    <div className="p-6 md:p-8 bg-destructive/5 md:border-r border-b md:border-b-0 border-border/50 space-y-3">
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Challenge
                        </span>
                      </div>
                      <p className="text-foreground/90 leading-relaxed">{item.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-6 md:p-8 bg-primary/5 space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          Solution
                        </span>
                      </div>
                      <p className="text-foreground/90 leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Optional gallery (safe rendering) */}
          {hasImages && (
            <section className="space-y-8 animate-fade-in-up">
              <SectionHeading icon={ImageIcon} label="04" title="Screenshots & Walkthrough" />
              <div className="grid gap-10 sm:grid-cols-2">
                {project.images!.map((image) => (
                  <figure
                    key={image.src}
                    className={`space-y-3 ${image.tall ? '' : 'sm:col-span-2'}`}
                  >
                    <Card
                      className={`overflow-hidden border-border/50 shadow-card hover:shadow-glow transition-smooth ${
                        image.tall ? 'max-w-sm mx-auto w-full' : ''
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                    </Card>
                    {image.caption && (
                      <figcaption className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
                        {image.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* 4. Business Impact — prominent highlight box */}
          <section className="animate-fade-in-up">
            <Card className="relative overflow-hidden border-0 shadow-glow">
              <div className="absolute inset-0 gradient-hero opacity-95" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <div className="relative p-8 md:p-12 text-primary-foreground space-y-8">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/15 rounded-xl backdrop-blur-sm">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest opacity-80">
                      Business Impact
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold">Why It Matters</h2>
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed max-w-3xl text-primary-foreground/95">
                  {project.impact.summary}
                </p>

                {project.impact.metrics && project.impact.metrics.length > 0 && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-white/20">
                    {project.impact.metrics.map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <div className="text-3xl md:text-4xl font-bold">{metric.value}</div>
                        <div className="text-sm text-primary-foreground/80 leading-snug">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </section>

          {/* Bottom navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/50">
            <Button variant="ghost" asChild className="group">
              <Link to="/#projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4 transition-smooth group-hover:-translate-x-1" />
                Back to all projects
              </Link>
            </Button>
            {project.codeLink && (
              <Button variant="outline" asChild className="group hover:border-primary hover:text-primary">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Explore the code
                </a>
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

interface SectionHeadingProps {
  icon: typeof Target;
  label: string;
  title: string;
}

const SectionHeading = ({ icon: Icon, label, title }: SectionHeadingProps) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center gap-3">
      <span className="text-sm font-mono text-primary/70">{label}</span>
      <div className="p-2 bg-primary/10 rounded-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>
    </div>
    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
  </div>
);

export default ProjectDetails;
