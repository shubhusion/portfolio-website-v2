"use client";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


import { cn } from "@/lib/utils";
import { Globe } from "@/components/ui/globe";


// Cards are mapped to BentoCard props: name, className, background, description, href, cta
const bentoCards = [
  {
    name: "Collaboration",
    className: "col-span-2 row-span-1 flex flex-col items-center justify-center text-center backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl",
    background: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="relative mb-2">
          <Avatar className="h-16 w-16 border-2 border-primary shadow-lg">
            <AvatarImage src="/avatar.jpg" alt="Shubham" />
            <AvatarFallback>SB</AvatarFallback>
          </Avatar>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 text-xs text-white shadow">COLLABORATION</span>
        </div>
      </div>
    ),
    description: "I prioritize client collaboration, fostering open communication",
    href: "#",
    cta: "Learn More",
  },
  {
    name: "Tech Stack",
    className: "col-span-2 row-span-1 text-center backdrop-blur-xl bg-gradient-to-br from-[#23243a]/60 to-[#18181b]/80 border border-white/10 shadow-xl",
    background: (
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {["Express.js", "Redis", "React", "Next.js", "TypeScript", "PostHog", "pnpm", "Bun", "PostgreSQL", "MongoDB"].map((tech) => (
          <Badge key={tech} variant="secondary" className="text-xs bg-white/10 border border-white/10 text-white/80 shadow-sm">{tech}</Badge>
        ))}
      </div>
    ),
    description: "Passionate about cutting-edge technologies.",
    href: "#",
    cta: "See Stack",
  },
  {
    name: "Time Zone Flexibility",
    className: "col-span-2 row-span-2 flex flex-col items-center justify-center text-center backdrop-blur-xl bg-gradient-to-br from-[#23243a]/60 to-[#18181b]/80 border border-white/10 shadow-xl",
    background: (
      <div className="flex flex-col items-center justify-between min-h-[340px] h-full w-full">
        <div className="flex flex-col items-center w-full mb-2">
          <div className="flex gap-1 mb-2">
            {["GB", "UK", "IN", "INDIA", "US", "USA"].map((zone) => (
              <Badge key={zone} variant={zone === "IN" || zone === "INDIA" ? "default" : "outline"} className="text-xs bg-white/10 border border-white/10 text-white/80 shadow-sm">{zone}</Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">REMOTE<br />INDIA</span>
        </div>
        <div className="flex items-end justify-center w-full h-[220px] mt-auto">
          <Globe className="w-full max-w-[260px] mx-auto opacity-95" />
        </div>
      </div>
    ),
    description: "I'm very flexible with time zone communications.",
    href: "#",
    cta: "Contact",
  },
  {
    name: "Let’s Work Together",
    className: "col-span-2 row-span-2 flex flex-col items-center justify-center text-center backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 shadow-xl",
    background: null,
    description: "Let's work together on your next project. Email: hello@example.com",
    href: "mailto:hello@example.com",
    cta: "Email Me",
  },
  {
    name: "Built to Perform",
    className: "col-span-2 row-span-2 flex flex-col items-center justify-center text-center backdrop-blur-xl bg-gradient-to-br from-[#23243a]/60 to-[#18181b]/80 border border-white/10 shadow-xl",
    background: null,
    description: "Websites that impact your business.",
    href: "#",
    cta: "See Projects",
  },
  // Add more cards for the bottom row as needed
];

export function BentoIntroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-2 md:px-4">
        <BentoGrid className="grid-cols-4 md:grid-cols-6 gap-8">
          {bentoCards.map((card, i) => (
            <BentoCard
              key={i}
              {...card}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:shadow-2xl border border-white/10",
                card.className
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
