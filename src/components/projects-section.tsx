"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { SafariMock } from "@/components/magicui/safari-mock";
import { BlurFade } from "@/components/magicui/blur-fade";

const projects = [
  {
    name: "Maintix",
    category: "Property Management",
    description: "Multi-property maintenance workflow platform with role-based access, real-time notifications, and activity audit trails. 20+ tickets, 3 properties, 99.9% uptime.",
    technologies: ["Next.js 15", "NestJS", "PostgreSQL"],
    href: "https://github.com/shubhusion/maintix",
    gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
    icon: "M",
    screenshotUrl: "https://maintix.app",
    screenshotTitle: "Maintix Dashboard",
  },
  {
    name: "Lumenslate",
    category: "AI Teaching Assistant",
    description: "AI-powered teaching assistant with multi-agent RAG system for automated grading and performance analytics. 40% productivity boost with GCP deployment.",
    technologies: ["Golang", "Python", "Vertex AI"],
    href: "https://github.com/shubhusion/lumenslate",
    gradient: "from-purple-500/30 via-pink-500/20 to-transparent",
    icon: "L",
    screenshotUrl: "https://lumenslate.com",
    screenshotTitle: "Lumenslate AI",
  },
  {
    name: "AarthikSetu",
    category: "GenAI Platform",
    description: "GenAI platform for MSMEs achieving 30% faster API responses through intelligent caching and optimization.",
    technologies: ["Golang", "Redis", "AI APIs"],
    href: "https://github.com/shubhusion/aarthiksetu",
    gradient: "from-green-500/30 via-emerald-500/20 to-transparent",
    icon: "A",
    screenshotUrl: "https://aarthiksetu.com",
    screenshotTitle: "AarthikSetu Platform",
  },
];

function ProjectBackground({ gradient, icon, screenshotUrl, screenshotTitle }: { gradient: string; icon: string; screenshotUrl?: string; screenshotTitle?: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
      <div className="absolute top-4 right-4 w-20 h-20 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
        <span className="text-2xl font-bold opacity-50">{icon}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Safari Mock Preview */}
      {screenshotUrl && (
        <div className="absolute inset-0 flex items-center justify-center p-8 opacity-30 hover:opacity-50 transition-opacity">
          <SafariMock url={screenshotUrl} title={screenshotTitle} className="scale-75 origin-center">
            <div className="w-full h-full bg-gradient-to-br from-background/50 to-muted/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Project Preview</span>
            </div>
          </SafariMock>
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="container py-24 md:py-32 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <BlurFade delay={0.1}>
          <div className="space-y-4">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Production systems handling real-world scale and complexity
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <Link href="/projects" className="shrink-0">
            <Button variant="outline" size="lg" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </BlurFade>
      </div>

      <BentoGrid className="auto-rows-[24rem]">
        {projects.map((project, index) => (
          <BlurFade key={project.name} delay={0.3 + index * 0.1}>
            <BentoCard
              key={project.name}
              name={project.name}
              description={project.description}
              href={project.href}
              cta="View Project"
              className={`${index === 0 ? 'md:col-span-2' : ''}`}
              background={<ProjectBackground gradient={project.gradient} icon={project.icon} screenshotUrl={project.screenshotUrl} screenshotTitle={project.screenshotTitle} />}
            />
          </BlurFade>
        ))}
      </BentoGrid>

      <BlurFade delay={0.6}>
        <div className="mt-6 flex flex-wrap gap-2">
          {projects.flatMap((p) => p.technologies).map((tech) => (
            <Badge key={tech} variant="outline" className="px-3 py-1 text-xs font-medium bg-muted/50">
              {tech}
            </Badge>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
