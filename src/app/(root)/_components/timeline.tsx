import { AnimatedList } from "@/components/magicui/animated-list";

const timeline = [
  {
    title: "Full Stack Engineer, Freelance",
    date: "2023 - Present",
    description: "Building modern web applications for startups and businesses using React, Next.js, Node.js, and cloud services."
  },
  {
    title: "Front-End Developer, Upwork",
    date: "2021 - 2023",
    description: "Delivered high-quality, responsive UIs for clients worldwide. Specialized in Tailwind CSS, React, and performance optimization."
  },
  {
    title: "B.Sc. Computer Science",
    date: "2019 - 2023",
    description: "Graduated with honors. Focused on software engineering, algorithms, and web technologies."
  }
];

export default function Timeline() {
  return (
    <section className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Timeline</h2>
      <div className="relative flex justify-center px-2 sm:px-0">
        {/* Vertical accent line, matches testimonials accent */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary/60 via-secondary/40 to-primary/10 opacity-70 rounded-full pointer-events-none z-0" />
        <AnimatedList delay={2000}>
          {timeline.map((item, idx) => (
            <div key={idx} className="relative z-10 flex items-center mb-14 last:mb-0 group">
              {/* Timeline marker */}
              <div className="flex flex-col items-center mr-8">
                <div className="relative">
                  <span className={
                    `block w-6 h-6 rounded-full border-4 border-primary bg-black/80 shadow-lg transition-all duration-300 ` +
                    (idx === 0 ? 'animate-pulse-slow shadow-primary/40' : '')
                  } />
                  {/* Animated glow for the most recent event */}
                  {idx === 0 && (
                    <span className="absolute inset-0 rounded-full bg-primary/30 blur-lg opacity-70 animate-pulse-slow" />
                  )}
                </div>
                {/* Connector line below marker except for last item */}
                {idx !== timeline.length - 1 && (
                  <span className="w-1 h-16 bg-gradient-to-b from-primary/60 via-secondary/40 to-primary/10 mt-1 rounded-full" />
                )}
              </div>
              {/* Timeline card, matches glassmorphism and border of testimonials */}
              <div className="flex-1 p-7 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-2xl shadow-2xl space-y-2 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
                <div className="font-semibold text-lg sm:text-xl text-green-300 mb-1 line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">{item.title}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mb-2 font-medium">{item.date}</div>
                <div className="text-base text-white/90 leading-relaxed">{item.description}</div>
              </div>
            </div>
          ))}
        </AnimatedList>
        {/* Cinematic edge gradients, matches testimonials */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
    </section>
  );
}
