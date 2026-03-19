"use client";

import ContactForm from "./_components/contact-form";
import { ContactDetails } from "./_components/contact-details";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Mail, CheckCircle2, ArrowRight, Calendar, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = {
  email: "shubham27.sharma03@gmail.com",
  location: "India (IST)",
  responseTime: "24 hours",
  availability: "Available for Q2 2026 — 2 slots remaining",
};

const quickLinks = [
  {
    icon: Mail,
    label: "Email Directly",
    href: `mailto:${contactInfo.email}`,
    description: "I respond within 24 hours",
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    href: "https://cal.com/shubhusion",
    description: "15-min intro call",
    external: true,
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "You can now paste it in your email client.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-grid-pattern dark:bg-transparent">
      {/* Animated background with engineering aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background dark:from-accent/5 dark:via-background dark:to-background" />
      
      {/* Gradient orbs - repositioned */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />

      <section className="container min-h-screen flex items-center justify-center py-20 px-4 relative z-10">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            {/* Avatar with initial */}
            <div className="inline-flex mb-6">
              <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-accent/30 shadow-xl shadow-accent/20">
                <AvatarFallback className="bg-gradient-to-br from-accent via-purple-500 to-primary text-white text-2xl sm:text-3xl font-bold">
                  S
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-purple-400 to-primary bg-clip-text text-transparent">
                Let&apos;s Build Something
              </span>
              <br />
              <span className="text-foreground">Amazing Together</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can work together.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {contactInfo.availability}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <a href={`mailto:${contactInfo.email}`}>
                <button className="h-11 px-6 text-sm font-medium rounded-full border border-accent/30 hover:bg-accent/10 hover:text-accent transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Directly
                </button>
              </a>
              <button
                onClick={handleCopyEmail}
                className="h-11 px-6 text-sm font-medium rounded-full border border-accent/30 hover:bg-accent/10 hover:text-accent transition-all duration-300 flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <a href="https://cal.com/shubhusion" target="_blank" rel="noopener noreferrer">
                <button className="h-11 px-6 text-sm font-medium rounded-full border border-accent/30 hover:bg-accent/10 hover:text-accent transition-all duration-300 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book a Call
                </button>
              </a>
            </div>

            {/* Response Time */}
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>Based in {contactInfo.location} • Response within {contactInfo.responseTime}</span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Contact Form - Left Side */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-accent/5">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Send a Message</h2>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form below and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Methods */}
              <div className="rounded-3xl border border-white/10 bg-card/50 backdrop-blur-xl p-6 shadow-2xl shadow-accent/5">
                <h3 className="text-lg font-semibold mb-4">Other Ways to Reach Me</h3>
                <div className="space-y-4">
                  {quickLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-accent/10 border border-transparent hover:border-accent/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <link.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {link.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <ContactDetails />

              {/* Trust Signal */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent/10 to-purple-500/10 backdrop-blur-xl p-6 shadow-2xl shadow-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Why Work With Me?</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 4+ years building production systems</li>
                      <li>• 10K+ requests/day handled</li>
                      <li>• 99.9% uptime track record</li>
                      <li>• Clear communication throughout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
