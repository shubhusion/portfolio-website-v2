


import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { freelanceProjects } from "@/content/freelance-projects";

// For future: move to content/config
const SECTION_TITLE = "Freelance Projects";

export default function FreelanceProjectsSection() {
  return (
    <section className="py-16" aria-labelledby="freelance-projects-heading">
      <h2
        id="freelance-projects-heading"
        className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12"
      >
        {SECTION_TITLE}
      </h2>
      <div className="space-y-28">
        {freelanceProjects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row justify-center gap-10"
            tabIndex={0}
            aria-label={`Freelance project: ${project.title}${project.company ? ' at ' + project.company : ''}`}
          >
            {/* Logo or placeholder */}
            <section className="lg:w-1/2 flex items-center justify-center">
              {project.logo ? (
                <img
                  src={project.logo}
                  alt={project.company ? `${project.company} logo` : project.title}
                  className="rounded-3xl max-h-60 object-contain bg-white/10 p-6"
                />
              ) : (
                <div className="rounded-3xl bg-muted flex items-center justify-center h-60 w-full text-4xl text-muted-foreground">
                  <span role="img" aria-label="Freelance project">💼</span>
                </div>
              )}
            </section>

            <section className="flex gap-4 pt-3 lg:w-1/2">
              <div className="hidden md:block">
                <Badge className="bg-blue-600 text-white px-3 py-2 text-xs font-semibold tracking-wide" aria-label="Freelance badge">Freelance</Badge>
              </div>

              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold flex items-center gap-2">
                    {project.title}
                    {project.company && (
                      <span className="text-base font-normal text-muted-foreground">@ {project.company}</span>
                    )}
                  </h3>

                  <p>{project.description}</p>

                  <ul className="space-y-4">
                    {project.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex gap-1"
                      >
                        <span aria-hidden="true">✨</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`hover:opacity-90 transition-opacity px-4 py-2 text-xs`}
                        aria-label={tech}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {project.testimonial && (
                  <blockquote className="mt-4 italic text-sm border-l-4 border-primary pl-4 text-muted-foreground">
                    “{project.testimonial}”
                  </blockquote>
                )}

                <div className="flex gap-4 pt-4">
                  {project.link && (
                    <Link href={project.link} target="_blank" aria-label={`Live demo for ${project.title}`} tabIndex={0}>
                      <Button className="w-full lg:w-fit">
                        <ExternalLink aria-hidden="true" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}
