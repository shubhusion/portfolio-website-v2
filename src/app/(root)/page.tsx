"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";

import { allBlogs } from "content-collections";

import { Button } from "@/components/ui/button";
import { ExternalLink, Mail } from "lucide-react";


import { Particles } from "@/components/magicui/particles";
import HeroSection from "./_components/hero-section";
import { BentoIntroSection } from "./_components/bento-intro-section";

import Services from "./_components/services";
import TechStack from "./_components/tech-stack";
import ProjectCard from "@/components/project-card";
import Testimonials from "./_components/testimonials";
import BlogCard from "../blog/_components/blog-card";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  const latestBlog = allBlogs
    .sort(
      (a, b) =>
        new Date(b.publishedOn).getTime() - new Date(a.publishedOn).getTime()
    )
    .slice(0, 3);

  return (
    <main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />



      {/* Hero Section - Modularized */}
      <HeroSection />

      {/* Bento Intro Section - Modularized */}
      {/* <BentoIntroSection /> */}

      {/* Spacer after Hero & Bento */}
      <div className="h-16 md:h-24" />

      {/* Services */}
      <section className="container pb-24">
        <Services />
      </section>

      {/* Tech Stack */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Technology Stack
        </h2>

        <TechStack />
      </section>

      {/* Latest Projects */}
      <section className="container py-12 md:py-24">
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Latest Projects
          </h2>

          <Link href={"/projects"} aria-label="See all projects">
            <Button variant={"outline"} className="ml-0.5">
              All Projects
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        </div>

        <ProjectCard />
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Testimonials
        </h2>
        <Testimonials />
      </section>


      {/* Timeline */}
      <section id="timeline" className="container">
        {/** MagicUI Animated Timeline */}
        {/* {require("./_components/timeline.tsx").default()} */}
      </section>

      {/* CTA Section */}
      <section className="container py-16 flex justify-center">
        <div className="w-full max-w-xl rounded-2xl border bg-background/80 shadow-lg p-10 flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Let’s Work Together</h2>
          <p className="text-muted-foreground text-lg">Open to interesting problems, products, and teams.</p>
          <Link href="/contact">
            <Button size="lg" className="transition-transform duration-200 hover:scale-105">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Recent Blog */}
      <section className="container py-12 md:py-24">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Recent Blog
        </h2>

        <div className="flex gap-5 flex-wrap">
          {latestBlog.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </section>
    </main>
  );
}
