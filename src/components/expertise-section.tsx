import { Badge } from "@/components/ui/badge";
import { MagicCard } from "@/components/magicui/magic-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Marquee } from "@/components/magicui/marquee";
import { Server, Zap, Brain, Cloud, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { useId } from "react";

const expertise = [
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Design scalable backend systems from 0 to 1. API architecture, data modeling, microservices, and event-driven systems.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "Build fast APIs using Golang and Python. Optimize latency and throughput for high-traffic systems.",
    color: "yellow",
  },
  {
    icon: Brain,
    title: "AI/GenAI Systems",
    description: "RAG pipelines combining LLMs with vector databases. Multi-agent workflows and AI-powered automation.",
    color: "purple",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploy on AWS and GCP. Docker and Kubernetes setups, CI/CD pipelines, and scalable infrastructure.",
    color: "cyan",
  },
  {
    icon: Compass,
    title: "Technical Consulting",
    description: "Help startups go from idea to production. Tech stack selection, architecture decisions, scaling strategy.",
    color: "green",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500/30", gradient: "from-blue-500/20 to-cyan-500/20" },
  yellow: { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "hover:border-yellow-500/30", gradient: "from-yellow-500/20 to-orange-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-500", border: "hover:border-purple-500/30", gradient: "from-purple-500/20 to-pink-500/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-500", border: "hover:border-cyan-500/30", gradient: "from-cyan-500/20 to-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-500", border: "hover:border-green-500/30", gradient: "from-green-500/20 to-emerald-500/20" },
};

const techStack = [
  { category: "Backend", techs: ["Python", "Golang", "Node.js"] },
  { category: "Frontend", techs: ["React", "TypeScript", "Next.js"] },
  { category: "Cloud", techs: ["AWS", "GCP", "Kubernetes"] },
  { category: "Database", techs: ["PostgreSQL", "Redis", "MongoDB"] },
  { category: "AI", techs: ["LLMs", "RAG", "Vertex AI"] },
];

const techColors = [
  "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
  "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
];

function TechBadge({ tech, index }: { tech: string; index: number }) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "px-4 py-2 text-sm font-medium whitespace-nowrap",
        techColors[index % techColors.length]
      )}
    >
      {tech}
    </Badge>
  );
}

export default function ExpertiseSection() {
  const id = useId();
  
  return (
    <section id="expertise" className="container py-24 md:py-32 scroll-mt-24">
      {/* Section header */}
      <div className="text-center mb-16 space-y-4">
        <BlurFade delay={0.1}>
          <p className="text-sm font-medium text-primary uppercase tracking-wider">What I do</p>
        </BlurFade>
        <BlurFade delay={0.15}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Areas of Expertise</h2>
        </BlurFade>
        <BlurFade delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Focused expertise in building scalable backend systems and intelligent AI integrations
          </p>
        </BlurFade>
      </div>

      {/* Expertise cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {expertise.map((item, index) => {
          const colors = colorMap[item.color];
          const gradientFrom = item.color === "blue" ? "#3b82f6" : item.color === "yellow" ? "#eab308" : item.color === "purple" ? "#a855f7" : item.color === "cyan" ? "#06b6d4" : "#22c55e";
          const gradientTo = item.color === "blue" ? "#06b6d4" : item.color === "yellow" ? "#f97316" : item.color === "purple" ? "#ec4899" : item.color === "cyan" ? "#3b82f6" : "#10b981";

          return (
            <BlurFade key={item.title} delay={0.2 + index * 0.1}>
              <MagicCard
                className="h-full"
                mode="gradient"
                gradientFrom={gradientFrom}
                gradientTo={gradientTo}
                gradientColor={gradientFrom}
              >
                <div className="relative h-full p-6 space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                    <item.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${colors.gradient} opacity-30 blur-2xl pointer-events-none`} />
                </div>
              </MagicCard>
            </BlurFade>
          );
        })}
      </div>

      {/* Tech stack */}
      <BlurFade delay={0.5}>
        <div className="rounded-3xl border bg-gradient-to-br from-card to-muted/20 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Tech Stack</h3>
            <p className="text-muted-foreground">Technologies I work with daily</p>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <Marquee pauseOnHover className="[--duration:25s]">
              {techStack.flatMap((group) => group.techs).map((tech, i) => (
                <TechBadge key={`${id}-${tech}`} tech={tech} index={i} />
              ))}
            </Marquee>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
