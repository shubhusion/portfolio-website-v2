"use client";

import Link from "next/link";

import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ShinyButton } from "./magicui/shiny-button";
import { ThemeToggle } from "./theme-toggle";
import MobileNavigation from "./mobile-navbar";
import { navbarLinks } from "@/constants";
import { useModalStore } from "@/stores/modalStore";

const Navbar = () => {
  const { openModal } = useModalStore();

  return (
    <nav className="fixed top-6 left-1/2 z-50 w-[95vw] max-w-4xl -translate-x-1/2 rounded-2xl bg-background/80 shadow-2xl backdrop-blur-2xl border border-white/20 ring-1 ring-white/10">
      <div className="flex h-16 items-center px-6 gap-4">
        <Link className="flex items-center mr-8" href="/">
          <span className="font-bold text-xl">
            <AnimatedGradientText>Shubham Sharma</AnimatedGradientText>
          </span>
        </Link>

        <div className="hidden md:flex gap-6 flex-1">
          {navbarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="relative px-2 py-1 rounded-lg transition-all duration-200 font-medium text-base hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary group"
              aria-label={link.name}
            >
              <span className="relative z-10">
                {link.name}
                <span className="block h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <ShinyButton
            onClick={openModal}
            className="hidden md:inline-flex rounded-full border"
          >
            Contact
          </ShinyButton>
          <ThemeToggle />
        </div>

        <div className="md:hidden ml-auto">
          <MobileNavigation />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
