import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Terminal } from "@/components/magicui/terminal";
import { Server, Brain, Zap, Cloud, Users } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import { useId } from "react";

const highlights = [
  { icon: Server, label: "Backend Systems", text: "Distributed architectures, microservices" },
  { icon: Brain, label: "AI Integration", text: "RAG pipelines, LLM systems" },
  { icon: Zap, label: "Performance", text: "High-throughput APIs, caching" },
  { icon: Cloud, label: "Cloud Native", text: "AWS, GCP, Kubernetes" },
];

const clients = [
  "Startup founders building 0→1",
  "Engineering teams scaling systems",
  "Product teams needing AI expertise",
];

const currently = [
  { label: "Building", value: "Distributed systems at S2T.ai" },
  { label: "Exploring", value: "Multi-agent AI workflows" },
  { label: "Learning", value: "Rust for systems programming" },
  { label: "Available", value: "2 slots for Q2 2026" },
];

const techStack = [
  "Go", "Python", "TypeScript", "Next.js", "PostgreSQL", "Redis",
  "AWS", "GCP", "Docker", "Kubernetes", "GraphQL", "REST APIs",
  "LLMs", "RAG", "Vector DBs", "AI Agents", "Microservices",
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

function CurrentlyCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-card/50 border border-border/50">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}

export default function AboutSection() {
  const id = useId();
  
  return (
    <section id="about" className="container py-16 sm:py-20 md:py-32 scroll-mt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <BlurFade delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">About Me</h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto">
              Backend Systems Engineer specializing in distributed architectures and AI integrations.
            </p>
          </BlurFade>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="space-y-4">
            <BlurFade delay={0.3}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I specialize in building distributed systems and AI integrations that handle
                real-world scale. With experience architecting platforms processing thousands
                of requests daily and building AI systems improving productivity by 40%, I help
                startups and product teams turn ambitious ideas into production-ready systems.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                My focus is on clean architecture, scalable backends, and meaningful AI
                implementations—not just technology for its own sake.
              </p>
            </BlurFade>

            {/* Currently Section */}
            <BlurFade delay={0.5}>
              <div className="pt-4">
                <p className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider mb-3">Currently</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {currently.map((item, i) => (
                    <CurrentlyCard key={i} label={item.label} value={item.value} />
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, i) => (
              <BlurFade key={i} delay={0.6 + i * 0.1}>
                <div className="p-3 sm:p-4 rounded-xl bg-card border hover:border-accent/30 transition-colors">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent mb-2" />
                  <p className="font-medium text-xs sm:text-sm">{item.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{item.text}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        <BlurFade delay={0.8}>
          <div className="mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 sm:mb-6 text-center">
              Tech Stack
            </p>
            <div className="relative overflow-hidden rounded-xl border bg-card p-2">
              <Marquee pauseOnHover className="[--duration:30s]">
                {techStack.map((tech, i) => (
                  <TechBadge key={`${id}-${tech}`} tech={tech} index={i} />
                ))}
              </Marquee>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.9}>
          <div className="p-4 sm:p-6 rounded-2xl bg-muted/50 border">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <h3 className="font-semibold text-sm sm:text-base">Who I work with</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {clients.map((client, i) => (
                <Badge key={i} variant="secondary" className="px-2.5 sm:px-3 py-1 text-xs">
                  {client}
                </Badge>
              ))}
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={1}>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Terminal
              lines={[
                "> Initializing development environment...",
                "> Loading tech stack: Go, Python, TypeScript...",
                "> Connecting to cloud: AWS, GCP, Kubernetes...",
                "> Building scalable backend systems...",
                "> Deploying production-ready code...",
                "> ✓ Ready to build something amazing",
              ]}
              delay={600}
            />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
