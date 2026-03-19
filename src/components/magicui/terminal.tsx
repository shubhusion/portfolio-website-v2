"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
  lines?: string[];
  delay?: number;
}

export function Terminal({
  className,
  lines = [
    "> Initializing system...",
    "> Loading modules...",
    "> Building portfolio...",
    "> Done.",
  ],
  delay = 500,
}: TerminalProps) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || hasInitialized.current) return;
    hasInitialized.current = true;

    const timeouts: NodeJS.Timeout[] = [];

    lines.forEach((line, index) => {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
      }, delay * (index + 1));
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isMounted, lines, delay]);

  if (!isMounted) {
    return (
      <div
        className={cn(
          "w-full max-w-lg overflow-hidden rounded-lg border bg-muted/50 p-4 font-mono text-sm",
          className
        )}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-lg border bg-muted/50 p-4 font-mono text-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div
            key={index}
            className="text-muted-foreground animate-in fade-in slide-in-from-left-2 duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-primary">$</span>
          <span className="w-2 h-4 bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
