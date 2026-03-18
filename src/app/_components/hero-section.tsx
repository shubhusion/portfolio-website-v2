"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Particles } from "@/components/magicui/particles";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Particles */}
      <Particles className="absolute inset-0" quantity={80} ease={60} color="#888888" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg shadow-primary/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Available for new projects</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-foreground/90 mb-3">Building</span>
            <TypingAnimation
              words={["Backend Systems", "AI Integrations", "Distributed Systems"]}
              duration={150}
              delay={2000}
              className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
            />
            <span className="block mt-3 text-foreground/90">& AI That Scales</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I help startups and product teams build robust backends and AI integrations. 
            From distributed systems to production-ready AI, I turn complexity into clarity.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <InteractiveHoverButton className="text-base px-10 py-6">
                Start a Project
              </InteractiveHoverButton>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg" className="gap-2 text-base px-10 py-6">
                View Projects
              </Button>
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5 pt-8">
            {[
              { icon: Github, href: "https://github.com/shubhusion", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shubhusion/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shubham27.sharma03@gmail.com", label: "Email" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
