"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
  mode?: "gradient" | "orb";
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowFrom?: string;
  glowTo?: string;
  glowAngle?: number;
  glowSize?: number;
  glowBlur?: number;
  glowOpacity?: number;
}

export function MagicCard({
  children,
  className = "",
  mode = "gradient",
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
  glowFrom = "#ee4f27",
  glowTo = "#6b21ef",
  glowAngle = 90,
  glowSize = 420,
  glowBlur = 60,
  glowOpacity = 0.9,
}: MagicCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card",
        className
      )}
      style={{
        boxShadow: isHovered
          ? mode === "orb"
            ? `0 0 ${glowBlur}px ${glowOpacity * 100}% ${glowFrom}`
            : `0 0 ${gradientSize / 4}px ${gradientOpacity * 100}% ${gradientColor}`
          : undefined,
      }}
    >
      {/* Gradient/Orb Effect */}
      {mode === "gradient" ? (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? gradientOpacity : 0,
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor}, transparent ${gradientSize}px)`,
          }}
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? glowOpacity : 0,
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowFrom}, ${glowTo}, transparent ${glowSize}px)`,
            filter: `blur(${glowBlur}px)`,
          }}
        />
      )}

      {/* Border Gradient Effect */}
      {isHovered && mode === "gradient" && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: `linear-gradient(${glowAngle}deg, ${gradientFrom}, ${gradientTo})`,
            mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
