import ProjectsSection from "@/components/projects-section";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
      
      <section className="container py-24 md:py-32 relative">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="block text-muted-foreground/80 mb-2">Selected</span>
            <AnimatedGradientText className="bg-gradient-to-r from-primary via-purple-500 to-secondary">
              Projects
            </AnimatedGradientText>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A selection of projects showcasing backend architecture, AI systems, and full-stack development. 
            Each project represents a system built to scale.
          </p>
        </div>

        <ProjectsSection />
      </section>
    </main>
  );
}
