"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Particles } from "@/components/magicui/particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />

      {/* Gradient orbs - hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Particles - reduced for performance */}
      <Particles className="absolute inset-0" quantity={30} ease={60} color="#888888" />

      <div className="container relative z-10 py-16 sm:py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Status badge with urgency */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg shadow-accent/10 mx-auto">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium">Available for Q2 2026 — 2 slots</span>
          </div>

          {/* Main headline - outcome focused */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-foreground/90 mb-2">From Idea to</span>
            <span className="block bg-gradient-to-r from-accent via-purple-400 to-primary bg-clip-text text-transparent">
              Production Backend
            </span>
            <span className="block mt-2 text-foreground/90">in Weeks, Not Months</span>
          </h1>

          {/* Subtitle with social proof */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Backend & AI systems for startups handling{" "}
            <span className="text-foreground font-semibold whitespace-nowrap">10K+ requests/day</span>.
            Currently at S2T.ai processing{" "}
            <span className="text-foreground font-semibold whitespace-nowrap">10K+ OSINT records/search</span>.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-accent via-purple-500 to-primary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300">
                Book Your Free Consultation
              </button>
            </Link>
            <Link href="/projects" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto h-11 px-6 text-sm font-medium rounded-full border border-accent/30 text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300">
                View Case Studies
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-6 sm:pt-8 pb-4 px-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Trusted by founders and teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-60">
              <span className="text-sm sm:text-lg font-semibold text-muted-foreground">S2T.ai</span>
              <span className="text-sm sm:text-lg font-semibold text-muted-foreground">Platelink.ai</span>
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Y Combinator Startups</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 pt-4 sm:pt-6">
            {[
              { icon: Github, href: "https://github.com/shubhusion", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/shubhusion/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shubham27.sharma03@gmail.com", label: "Email" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-accent/20 hover:text-accent transition-all"
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-background to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5 sm:p-2">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
