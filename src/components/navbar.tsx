"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Expertise", url: "/#expertise" },
  { name: "Experience", url: "/#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.url.replace("/#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-accent/5"
            : "bg-transparent backdrop-blur-sm"
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Logo Section */}
            <Link
              href="/"
              className="group flex items-center gap-3 min-w-fit"
            >
              {/* Avatar with engineering personality */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-accent via-purple-500 to-primary p-[2px] shadow-lg shadow-accent/20 group-hover:shadow-accent/40 transition-shadow duration-300">
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <span className="text-white font-bold text-sm sm:text-base">S</span>
                  </div>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
              </div>

              {/* Name + Tagline */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-base text-foreground">Shubham Sharma</span>
                  <span className="text-accent animate-pulse">_</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-medium tracking-wide">
                  Full Stack Engineer • Distributed Systems • GenAI
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1.5 bg-muted/30 backdrop-blur-sm rounded-full p-1.5 border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.url.replace("/#", "");
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    className={cn(
                      "relative px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                      isActive
                        ? "text-foreground bg-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    )}
                  >
                    {link.name}
                    {/* Active indicator - growing underline */}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle - integrated */}
              <div className="hidden sm:block">
                <AnimatedThemeToggler className="h-9 w-9 rounded-lg border border-white/10 bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-105" />
              </div>

              {/* CTA Button - Enhanced */}
              <Link href="/contact" className="hidden sm:inline-flex">
                <button className="h-11 px-6 text-sm font-semibold rounded-full bg-gradient-to-r from-accent via-purple-500 to-primary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300">
                  Get in Touch
                </button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden h-10 w-10 rounded-xl border border-white/10 bg-muted/30 hover:bg-muted/50 transition-all"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <Menu className="w-5 h-5 text-foreground" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
          <ScrollProgressIndicator />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-all duration-500",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/98 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={cn(
            "absolute top-20 left-4 right-4 p-6 rounded-3xl border border-white/10 bg-card shadow-2xl transition-all duration-500",
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          )}
        >
          {/* Mobile Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent via-purple-500 to-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <p className="font-bold text-foreground">Shubham Sharma</p>
              <p className="text-xs text-muted-foreground">
                Full Stack Engineer • GenAI
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-5 py-4 text-base font-medium rounded-2xl transition-all duration-300",
                  activeSection === link.url.replace("/#", "")
                    ? "bg-accent/10 text-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <div className="flex items-center justify-between">
                  {link.name}
                  {activeSection === link.url.replace("/#", "") && (
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full h-12 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-accent via-purple-500 to-primary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Scroll Progress Indicator Component
function ScrollProgressIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="h-full bg-gradient-to-r from-accent via-purple-500 to-primary transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}
