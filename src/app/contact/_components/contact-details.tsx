

import { contactInfo } from "@/content/contact";
import { Linkedin, Mail } from "lucide-react";

export function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <a href={`mailto:${contactInfo.email}`} className="text-primary hover:text-primary/80 transition-colors">
          <Mail className="w-6 h-6" />
          <span className="sr-only">Email</span>
        </a>
      </div>
      {contactInfo.social?.url && (
        <div className="flex items-center gap-2">
          <a href={contactInfo.social.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">{contactInfo.social.label}</span>
          </a>
        </div>
      )}
    </div>
  );
}
