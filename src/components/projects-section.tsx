"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { SafariMock } from "@/components/magicui/safari-mock";
import { BlurFade } from "@/components/magicui/blur-fade";

const projects = [
  {
    name: "Maintix",
    category: "Property Management Platform",
    problem: "Property managers were losing 15+ hours/week coordinating maintenance requests across multiple properties.",
    solution: "Built a unified maintenance workflow platform with role-based access, real-time notifications, and automated audit trails.",
    impact: "Reduced maintenance response time by 60%. Now handling 20+ tickets across 3 properties with 99.9% uptime.",
    technologies: ["Next.js 15", "NestJS", "PostgreSQL", "Tailwind CSS 4"],
    href: "https://github.com/shubhusion/maintix",
    gradient: "from-blue-500/30 via-cyan-500/20 to-transparent",
    icon: "M",
    screenshotUrl: "https://maintix.app",
    screenshotTitle: "Maintix Dashboard",
    metrics: [
      { label: "Response Time", value: "60%", suffix: " faster" },
      { label: "Tickets", value: "20+", suffix: " handled" },
      { label: "Uptime", value: "99.9", suffix: "%" },
    ],
  },
  {
    name: "Lumenslate",
    category: "AI Teaching Assistant",
    problem: "Teachers spent 15+ hours/week on manual grading and question generation, taking time away from actual teaching.",
    solution: "Developed an AI-powered teaching assistant with multi-agent RAG system for automated grading and performance analytics.",
    impact: "40% improvement in teacher productivity. System now grades 100+ papers/hour automatically with GCP deployment.",
    technologies: ["Golang", "Python", "Vertex AI", "Firestore", "Cloud Run"],
    href: "https://github.com/shubhusion/lumenslate",
    gradient: "from-purple-500/30 via-pink-500/20 to-transparent",
    icon: "L",
    screenshotUrl: "https://lumenslate.com",
    screenshotTitle: "Lumenslate AI",
    metrics: [
      { label: "Productivity", value: "40", suffix: "% boost" },
      { label: "Grading", value: "100+", suffix: "/hour" },
      { label: "Teachers", value: "15+", suffix: " saved" },
    ],
  },
  {
    name: "AarthikSetu",
    category: "GenAI Platform for MSMEs",
    problem: "MSMEs needed AI-powered financial insights but existing solutions were slow and expensive to run.",
    solution: "Built a GenAI platform with intelligent caching and API optimization for faster, cost-effective financial guidance.",
    impact: "30% faster API responses than industry average. Enabling hundreds of MSMEs to access AI-powered financial tools.",
    technologies: ["Golang", "Redis", "AI APIs", "Microservices"],
    href: "https://github.com/shubhusion/aarthiksetu",
    gradient: "from-green-500/30 via-emerald-500/20 to-transparent",
    icon: "A",
    screenshotUrl: "https://aarthiksetu.com",
    screenshotTitle: "AarthikSetu Platform",
    metrics: [
      { label: "Speed", value: "30", suffix: "% faster" },
      { label: "MSMEs", value: "100+", suffix: " served" },
      { label: "Cost", value: "50", suffix: "% reduced" },
    ],
  },
];

function ProjectBackground({ gradient, icon, screenshotUrl, screenshotTitle }: { gradient: string; icon: string; screenshotUrl?: string; screenshotTitle?: string }) {
  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
      <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
        <span className="text-xl sm:text-2xl font-bold opacity-50">{icon}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Safari Mock Preview - hidden on mobile for better performance */}
      {screenshotUrl && (
        <div className="hidden sm:block absolute inset-0 flex items-center justify-center p-8 opacity-30 hover:opacity-50 transition-opacity">
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
    <section id="projects" className="container py-16 sm:py-24 md:py-32 scroll-mt-24 px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
        <BlurFade delay={0.1}>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground text-sm sm:text-lg max-w-xl">
              Production systems handling real-world scale and complexity
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.2}>
          <Link href="/projects">
            <button className="h-11 px-6 text-sm font-medium rounded-full border border-accent/30 text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300 flex items-center gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </BlurFade>
      </div>

      <BentoGrid className="auto-rows-[20rem] sm:auto-rows-[24rem] md:auto-rows-[28rem]">
        {projects.map((project, index) => (
          <BlurFade key={project.name} delay={0.3 + index * 0.1}>
            <BentoCard
              key={project.name}
              name={project.name}
              description={
                <div className="space-y-1.5 sm:space-y-2">
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Problem</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">Solution</p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-foreground/90 line-clamp-2">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-medium text-accent uppercase tracking-wider mb-0.5 sm:mb-1">Impact</p>
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground line-clamp-2">{project.impact}</p>
                  </div>
                </div>
              }
              href={project.href}
              cta="View Case Study"
              className={`${index === 0 ? 'md:col-span-2' : ''}`}
              background={<ProjectBackground gradient={project.gradient} icon={project.icon} screenshotUrl={project.screenshotUrl} screenshotTitle={project.screenshotTitle} />}
            />
          </BlurFade>
        ))}
      </BentoGrid>

      <BlurFade delay={0.6}>
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
          {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech) => (
            <Badge key={tech} variant="outline" className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium bg-muted/50 hover:bg-accent/20 hover:border-accent/50 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
