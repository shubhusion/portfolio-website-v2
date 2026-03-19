"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { MagicCard } from "@/components/magicui/magic-card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Shubham transformed our backend architecture. System response times improved by 40% and we finally have the scalability we needed for growth.",
    author: "Founder, PropTech Startup",
    company: "Maintix",
    rating: 5,
  },
  {
    quote:
      "The AI grading system Shubham built saves our teachers 15+ hours per week. Real impact on education, not just buzzwords.",
    author: "Product Lead, EdTech Platform",
    company: "Lumenslate",
    rating: 5,
  },
  {
    quote:
      "Very good work—completed task on time. Professional, communicative, and delivered exactly what we needed. Would hire again.",
    author: "Client",
    company: "Upwork",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-accent"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="container py-16 sm:py-20 md:py-24 relative px-4">
      <div className="text-center mb-8 sm:mb-12">
        <BlurFade delay={0.1}>
          <p className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Testimonials
          </p>
        </BlurFade>
        <BlurFade delay={0.15}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            What Founders Say
          </h2>
        </BlurFade>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.1}>
            <MagicCard
              className="h-full"
              mode="gradient"
              gradientFrom="#a855f7"
              gradientTo="#06b6d4"
              gradientColor="#a855f7"
            >
              <div className="relative h-full p-4 sm:p-6 flex flex-col">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/30 mb-3 sm:mb-4" />
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border/50">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-xs sm:text-sm font-semibold mt-2">{testimonial.author}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
