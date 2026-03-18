"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const navLinks = [
  { name: "About", url: "/#about" },
  { name: "Projects", url: "/#projects" },
  { name: "Expertise", url: "/#expertise" },
  { name: "Experience", url: "/#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-4 md:top-6 left-1/2 z-50 w-[95vw] max-w-5xl -translate-x-1/2 transition-all duration-300 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border shadow-lg" 
          : "bg-background/50 backdrop-blur-md border border-white/10"
      } rounded-2xl`}>
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg hidden sm:block">Shubham Sharma</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <AnimatedThemeToggler className="h-9 w-9 rounded-md border bg-muted/50 hover:bg-muted transition-colors" />
            <Link href="/contact" className="hidden md:inline-flex">
              <InteractiveHoverButton className="text-sm">
                Get in Touch
              </InteractiveHoverButton>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-24 left-4 right-4 p-6 rounded-2xl border bg-card shadow-2xl transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-lg font-medium hover:bg-muted rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t mt-2">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <InteractiveHoverButton className="w-full">
                  Get in Touch
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
