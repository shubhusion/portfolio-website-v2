"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TextReveal } from "@/components/magicui/text-reveal";

import HeroSection from "./_components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ExpertiseSection from "@/components/expertise-section";
import TimelineSection from "@/components/timeline-section";

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
      className={`absolute ${position} ${sizeClasses[size]} ${color} opacity-30 animate-pulse pointer-events-none`}
      style={{ animationDuration: "8s" }}
    />
  );
}

export default function Page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient orbs */}
      <GradientOrb position="top-1/4 left-0" color="bg-blue-500/30" size="lg" />
      <GradientOrb position="top-1/2 right-0" color="bg-purple-500/30" size="md" />
      <GradientOrb position="bottom-1/4 left-1/4" color="bg-cyan-500/20" size="md" />
      
      <HeroSection />
      
      <SectionDivider />
      
      <div className="relative">
        <GradientOrb position="top-0 right-1/4" color="bg-primary/20" size="sm" />
        <AboutSection />
      </div>
      
      <SectionDivider />
      
      <div className="relative">
        <GradientOrb position="top-1/2 left-0" color="bg-secondary/20" size="sm" />
        <ProjectsSection />
      </div>
      
      <SectionDivider />
      
      <div className="relative">
        <GradientOrb position="bottom-0 right-0" color="bg-primary/20" size="sm" />
        <ExpertiseSection />
      </div>
      
      <SectionDivider />
      
      <div className="relative">
        <GradientOrb position="top-0 left-1/3" color="bg-cyan-500/15" size="sm" />
        <TimelineSection />
      </div>
      
      <SectionDivider />

      <section className="container py-20 md:py-32 relative">
        <GradientOrb position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="bg-primary/25" size="lg" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <TextReveal
            text="Have a Project in Mind?"
            className="text-3xl md:text-4xl font-bold mb-4"
          />
          <p className="text-muted-foreground mb-8">
            Currently based in India (IST). Available for remote work worldwide.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <InteractiveHoverButton className="text-base px-8 py-6">
                Get in Touch
              </InteractiveHoverButton>
            </Link>
            <Link href="mailto:shubham27.sharma03@gmail.com">
              <Button variant="outline" size="lg" className="text-base px-8">
                Email Directly
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
