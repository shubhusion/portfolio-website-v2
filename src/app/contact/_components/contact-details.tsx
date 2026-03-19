"use client";

import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:shubham27.sharma03@gmail.com",
    color: "hover:text-red-400 hover:bg-red-500/10 hover:border-red-500/30",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/shubhusion",
    color: "hover:text-white hover:bg-white/10 hover:border-white/30",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shubhusion/",
    color: "hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/30",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://x.com/shubhusiony",
    color: "hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/30",
  },
];

export function ContactDetails() {
  return (
    <div className="rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl p-6 shadow-2xl shadow-accent/5">
      <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex flex-col items-center gap-2 p-4 rounded-2xl",
              "bg-muted/50 border border-transparent",
              "transition-all duration-300",
              "hover:scale-105 hover:shadow-lg",
              link.color
            )}
          >
            <div className="w-11 h-11 rounded-xl bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform">
              <link.icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
