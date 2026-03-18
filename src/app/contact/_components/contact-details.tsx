

"use client";

import { contactInfo } from "@/content/contact";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Github } from "lucide-react";

export function ContactDetails() {
  return (
    <TooltipProvider>
      <Dock direction="middle" iconSize={48} iconMagnification={64} className="mt-0">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={`mailto:${contactInfo.email}`} className="block">
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://github.com/shubhusion" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>GitHub</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        {contactInfo.social?.url && (
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href={contactInfo.social.url} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{contactInfo.social.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        )}
      </Dock>
    </TooltipProvider>
  );
}
