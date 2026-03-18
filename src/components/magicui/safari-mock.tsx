"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SafariMockProps {
  children: ReactNode;
  className?: string;
  url?: string;
  title?: string;
}

export function SafariMock({
  children,
  className,
  url = "https://example.com",
  title = "Website Preview",
}: SafariMockProps) {
  return (
    <div
      className={cn(
        "w-full max-w-4xl overflow-hidden rounded-xl border bg-background shadow-2xl",
        className
      )}
    >
      {/* Safari Header */}
      <div className="flex items-center gap-2 border-b bg-muted/30 px-4 py-3">
        {/* Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600" />
          <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600" />
        </div>

        {/* URL Bar */}
        <div className="flex-1 mx-4">
          <div className="flex items-center justify-center gap-2 rounded-lg bg-muted px-4 py-1.5 text-xs text-muted-foreground">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span className="truncate max-w-md">{url}</span>
          </div>
        </div>

        {/* Window Title */}
        <div className="text-xs font-medium text-muted-foreground hidden sm:block">
          {title}
        </div>
      </div>

      {/* Content */}
      <div className="relative aspect-video bg-background">
        {children}
      </div>
    </div>
  );
}
