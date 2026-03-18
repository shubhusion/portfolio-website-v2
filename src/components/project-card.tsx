"use client";
import Link from "next/link";

import { Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = [
  {
    title: "Maintix",
    category: "Property Management Platform",
    description:
      "Multi-property maintenance workflow platform. Tenants report issues, managers assign work, and technicians track jobs from start to completion.",
    metrics: [
      "20+ demo tickets across 3 properties",
      "Role-based access (Manager, Tenant, Technician)",
      "Real-time notifications & activity audit trail",
    ],
    technologies: [
      "Next.js 15",
      "React 19",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS 4",
      "TanStack Query",
    ],
    sourceCode: "https://github.com/shubhusion/maintix",
  },
  {
    title: "Lumenslate",
    category: "AI Teaching Assistant",
    description:
      "AI-powered teaching assistant with multi-agent RAG system for automated question generation, grading, and performance analytics.",
    metrics: [
      "40% improvement in teacher productivity",
      "Multi-agent LLM-powered RAG system",
      "Scalable microservices on GCP",
    ],
    technologies: [
      "Golang",
      "Python",
      "Vertex AI",
      "Firestore",
      "Cloud Run",
    ],
    sourceCode: "https://github.com/shubhusion/lumenslate",
  },
];

export default function ProjectCard() {
  return (
    <div className="space-y-16 md:space-y-24">
      {Projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <section className="lg:w-1/2">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-white/10 p-8 lg:p-12 flex items-center justify-center min-h-[250px]">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-primary">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">{project.title}</p>
                  <p className="text-xs text-muted-foreground">See GitHub for live demo</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex gap-4 pt-3 lg:w-1/2">
            <div className="space-y-4 lg:space-y-6 w-full">
              <div className="space-y-3">
                <p className="text-sm text-primary font-medium">{project.category}</p>
                <h3 className="text-2xl lg:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="pt-2">
                <Link href={project.sourceCode} target="_blank">
                  <Button variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
