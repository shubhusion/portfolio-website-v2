import { BorderBeam } from "@/components/magicui/border-beam";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work",
    role: "Full Stack Engineer",
    company: "S2T.ai",
    period: "Nov 2025 — Feb 2026",
    description: "Built OSINT platform processing 10K+ records per search. Reduced wait time by 40% with SSE. Architected distributed backend with PostgreSQL and React micro-frontends.",
    metrics: [{ value: 10, suffix: "K+" }, { value: 40, suffix: "%" }],
    metricLabels: ["Records/Search", "Faster Wait Time"],
  },
  {
    type: "work",
    role: "Founding Full Stack Engineer",
    company: "Platelink.ai",
    period: "Nov 2024 — Nov 2025",
    description: "Led backend for 15+ restaurants, 3K orders/month. Achieved 99.9% uptime on Google Cloud. Built scalable Golang and Python microservices.",
    metrics: [{ value: 99.9, suffix: "%", decimalPlaces: 1 }, { value: 3, suffix: "K+" }],
    metricLabels: ["Uptime", "Orders/Month"],
  },
  {
    type: "education",
    role: "B.Tech IT + B.S Data Science",
    company: "Jaypee IT + IIT Madras",
    period: "2021 — 2025",
    description: "Dual degree program focused on software engineering, distributed systems, and data science.",
    metrics: [],
    metricLabels: [],
  },
];

export default function TimelineSection() {
  return (
    <section id="experience" className="container py-16 sm:py-20 md:py-32 scroll-mt-24 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Experience</h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
          Building production systems and continuous learning
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        {experience.map((item, index) => (
          <div key={index} className="relative">
            <div className="flex gap-4 sm:gap-6">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                  {item.type === "work" ? (
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  ) : (
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  )}
                </div>
                {index !== experience.length - 1 && (
                  <div className="w-px h-full bg-border mt-2" />
                )}
              </div>

              <div className="flex-1 pb-6 sm:pb-8">
                <div className="md:hidden flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    ) : (
                      <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">{item.period}</span>
                </div>

                <div className="relative group">
                  <div className="absolute -inset-px bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative rounded-2xl border bg-card p-4 sm:p-6 transition-all duration-300 hover:border-accent/30">
                    <BorderBeam />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">{item.role}</h3>
                        <p className="text-accent text-sm">{item.company}</p>
                      </div>
                      <span className="hidden md:block text-sm text-muted-foreground font-mono">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    {item.metrics && item.metrics.length > 0 && (
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border/50 grid grid-cols-2 gap-3 sm:gap-4">
                        {item.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="flex items-baseline justify-center gap-1">
                              <NumberTicker
                                value={metric.value}
                                decimalPlaces={metric.decimalPlaces || 0}
                                className="text-xl sm:text-2xl font-bold text-accent"
                              />
                              <span className="text-xs sm:text-sm font-medium text-muted-foreground">{metric.suffix}</span>
                            </div>
                            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">{item.metricLabels[idx]}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
