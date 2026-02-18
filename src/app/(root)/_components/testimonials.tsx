import { Marquee } from "@/components/magicui/marquee";

import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    jobTitle:
      "HTML developer to create HTML pages from Existing UI and Design kit",
    rating: 5.0,
    dueDate: "Apr 2, 2022 - Apr 15, 2022",
    body: "Very Good completed task on time.",
  },
  {
    jobTitle:
      "Expert CSS to change existng html to Web Mobile design - Refer attach ppt ",
    rating: 5.0,
    dueDate: "Mar 22, 2022 - Apr 5, 2022",
    body: "Good work, Ahmed is professional, would hire again.",
  },
  {
    jobTitle:
      "HTML developer to create HTML pages from Existing UI and Design kit ",
    rating: 5.0,
    dueDate: "Mar 22, 2022 - Mar 29, 2022",
    body: "Very good soul. Completed my job before time. Excellent work and very prompt. I really recommend him for front end jobs. Will take him for next project as well.",
  },
  {
    jobTitle: "Fix problem in TailwindCSS layout ",
    rating: 5.0,
    dueDate: "Mar 17, 2022 - Mar 21, 2022",
    body: "Did a great job. Delivered quality results fast.",
  },
  {
    jobTitle: "Clone web component in TailwindCSS",
    rating: 5.0,
    dueDate: "Mar 12, 2022 - Mar 14, 2022",
    body: "",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  jobTitle,
  rating,
  dueDate,
  body,
}: {
  jobTitle: string;
  rating: number;
  dueDate: string;
  body: string;
}) => {
    return (
      <div className="group relative h-fit max-w-sm min-w-[260px] cursor-pointer overflow-hidden rounded-2xl p-6 border border-white/10 bg-black/30 backdrop-blur-2xl shadow-2xl space-y-4 transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-fade-in-up">
      {/* Animated gradient glow behind card */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-primary/30 via-secondary/20 to-primary/30 rounded-full blur-2xl opacity-60 pointer-events-none animate-pulse-slow" />
      {/* Accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-70 rounded-l-2xl" />
      <div className="flex items-center gap-4 mb-2">
                <Image src="/avatar.png" width={48} height={48} alt={jobTitle + ' client photo'} className="rounded-full border-2 border-primary shadow-lg" />
                <h2 className="font-semibold text-lg text-green-300 line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">{jobTitle}</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center text-xs">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
          ))}
          <span className="font-medium ml-2">{rating}.00</span>
          <span className="text-muted-foreground ml-3">{dueDate}</span>
        </div>
      </div>
      <p className="text-lg text-white font-medium italic flex items-start gap-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
        <span className="text-2xl text-primary/80 -mt-1">“</span>
        {body ? body : <span className="opacity-60">No written feedback, but 5 stars!</span>}
      </p>
      <div className="flex items-center gap-2 mt-2">
        <Image src="/upwork.png" width={32} height={32} alt="Upwork Company" className="rounded-md" />
        <span className="text-xs text-muted-foreground">Upwork</span>
      </div>
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-tr from-primary/40 via-secondary/30 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10 sm:py-16">
      <Marquee pauseOnHover className="[--duration:22s] gap-8 sm:gap-12">
        {firstRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:24s] gap-8 sm:gap-12 mt-6">
        {secondRow.map((review, i) => (
          <ReviewCard key={i} {...review} />
        ))}
      </Marquee>
      {/* Cinematic edge gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background via-background/80 to-transparent" />
    </div>
  );
}
