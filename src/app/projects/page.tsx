
import ProjectCard from "@/components/project-card";
import FreelanceProjectsSection from "./_components/freelance-projects-section";

export default function page() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
        All My Projects
      </h1>

      <ProjectCard />

      <FreelanceProjectsSection />
    </section>
  );
}
