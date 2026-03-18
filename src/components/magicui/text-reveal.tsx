"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div ref={targetRef} className={cn("text-4xl font-bold", className)}>
        {text}
      </div>
    );
  }

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("text-4xl font-bold", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            className={className}
          >
            {word}
          </Word>
        );
      })}
    </div>
  );
}

interface WordProps {
  children: React.ReactNode;
  progress: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  range: [number, number];
  className?: string;
}

function Word({ children, progress, range, className }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      className={cn("inline-block opacity-0", className)}
      style={{ opacity }}
    >
      {children}
    </motion.span>
  );
}
