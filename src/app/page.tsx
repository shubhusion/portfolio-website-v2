"use client";

import HeroSection from "./_components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExpertiseSection from "@/components/expertise-section";
import TimelineSection from "@/components/timeline-section";
import TestimonialsSection from "@/components/testimonials-section";

function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </div>
  );
}

function GradientOrb({ position, color, size = "lg" }: { position: string; color: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-64 h-64 blur-[100px]",
    md: "w-96 h-96 blur-[128px]",
    lg: "w-[500px] h-[500px] blur-[150px]",
  };

  return (
    <div
      className={`absolute ${position} ${sizeClasses[size]} ${color} opacity-30 dark:opacity-20 animate-pulse pointer-events-none`}
      style={{ animationDuration: "8s" }}
    />
  );
}

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-grid-pattern dark:bg-transparent pt-20">
      {/* Background gradient orbs - enhanced for light mode */}
      <GradientOrb position="top-1/4 left-0" color="bg-blue-500/40 dark:bg-blue-500/30" size="lg" />
      <GradientOrb position="top-1/2 right-0" color="bg-purple-500/40 dark:bg-purple-500/30" size="md" />
      <GradientOrb position="bottom-1/4 left-1/4" color="bg-cyan-500/30 dark:bg-cyan-500/20" size="md" />

      <HeroSection />

      <SectionDivider />

      <div className="relative">
        <GradientOrb position="top-0 right-1/4" color="bg-primary/30 dark:bg-primary/20" size="sm" />
        <AboutSection />
      </div>

      <SectionDivider />

      <div className="relative">
        <GradientOrb position="top-1/2 left-0" color="bg-secondary/30 dark:bg-secondary/20" size="sm" />
        <ProjectsSection />
      </div>

      {/* Testimonials Section */}
      <SectionDivider />

      <TestimonialsSection />

      <SectionDivider />

      <div className="relative">
        <GradientOrb position="bottom-0 right-0" color="bg-primary/30 dark:bg-primary/20" size="sm" />
        <ExpertiseSection />
      </div>

      <SectionDivider />

      <div className="relative">
        <GradientOrb position="top-0 left-1/3" color="bg-cyan-500/25 dark:bg-cyan-500/15" size="sm" />
        <TimelineSection />
      </div>
    </main>
  );
}
