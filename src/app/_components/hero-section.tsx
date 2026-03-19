"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Particles } from "@/components/magicui/particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden py-12 sm:py-0">
      {/* Stronger layered background gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-purple-500/[0.05] to-primary/15 dark:from-accent/10 dark:via-background dark:to-primary/10" />
      
      {/* Enhanced radial gradients for richness - light mode only */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,_rgba(147,51,234,0.15),_transparent_50%)] dark:bg-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,_rgba(99,102,241,0.12),_transparent_50%)] dark:bg-transparent pointer-events-none" />

      {/* Gradient orbs - stronger visibility */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-accent/35 dark:bg-accent/20 rounded-full blur-[128px] animate-pulse" />
      <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-primary/35 dark:bg-primary/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Grid pattern - removed in light mode, subtle in dark */}
      <div className="absolute inset-0 opacity-0 dark:opacity-[0.03]" style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />

      {/* Particles */}
      <Particles className="absolute inset-0" quantity={150} ease={80} color="#808080" refresh size={0.5} />

      {/* Hero Container - Premium glassmorphism with layered shadows */}
      <div className="container relative z-10 px-4">
        <div className="max-w-[820px] mx-auto w-full">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 5px 20px rgba(0,0,0,0.05)' }}>
            {/* Inner highlight for polished glass effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
            
            {/* Subtle glow behind content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/15 dark:bg-accent/15 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative max-w-3xl mx-auto text-center space-y-6 sm:space-y-8 p-8 sm:p-12 md:p-16">
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
                <span className="block bg-gradient-to-r from-accent via-purple-400 to-primary bg-clip-text text-transparent">Production Backend</span>
                <span className="block mt-2 text-foreground/90">in Weeks, Not Months</span>
              </h1>

              {/* Subtitle with social proof - enhanced contrast */}
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
                Backend & AI systems for startups handling <span className="text-foreground font-semibold whitespace-nowrap">10K+ requests/day</span>. Currently at S2T.ai processing <span className="text-foreground font-semibold whitespace-nowrap">10K+ OSINT records/search</span>.
              </p>

              {/* CTA buttons - enhanced dominance */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 px-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-14 px-10 text-base font-semibold rounded-full bg-gradient-to-r from-accent via-purple-500 to-primary text-white shadow-2xl shadow-accent/40 dark:shadow-accent/25 hover:shadow-accent/60 dark:hover:shadow-accent/40 hover:scale-[1.06] active:scale-[0.98] transition-all duration-300" style={{ backgroundImage: 'linear-gradient(135deg, #7c3aed, #4f46e5)' }}>
                    Book Your Free Consultation
                  </button>
                </Link>
                <Link href="/projects" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-12 px-8 text-sm font-medium rounded-full border-2 border-accent/30 text-foreground hover:text-accent hover:bg-accent/10 hover:border-accent/50 hover:scale-[1.02] transition-all duration-300">
                    View Case Studies
                  </button>
                </Link>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-6 sm:my-8" />

              {/* Trust indicators - enhanced visibility */}
              <div className="pt-6 sm:pt-8 pb-4 px-4">
                <p className="text-xs sm:text-sm text-foreground/70 dark:text-muted-foreground mb-3 sm:mb-4">Trusted by founders and teams at</p>
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 opacity-80 dark:opacity-60">
                  <span className="text-sm sm:text-lg font-semibold text-foreground/90 dark:text-muted-foreground">S2T.ai</span>
                  <span className="text-sm sm:text-lg font-semibold text-foreground/90 dark:text-muted-foreground">Platelink.ai</span>
                  <span className="text-xs sm:text-sm font-semibold text-foreground/90 dark:text-muted-foreground">Y Combinator Startups</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 pt-4 sm:pt-6">
                {[
                  { icon: Github, href: "https://github.com/shubhusion", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/shubhusion/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:shubham27.sharma03@gmail.com", label: "Email" },
                ].map((social) => (
                  <Link key={social.label} href={social.href} target="_blank" className="p-2.5 sm:p-3 rounded-full bg-muted/50 hover:bg-accent/20 hover:text-accent transition-all">
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
