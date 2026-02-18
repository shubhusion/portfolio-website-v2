
import { contactInfo } from "@/content/contact";
import { Linkedin } from "lucide-react";

  return (
    <div className="space-y-4">
      <div>
        <span className="font-semibold">Email:</span>{" "}
        <a href={`mailto:${contactInfo.email}`} className="text-primary underline">
          {contactInfo.email}
        </a>
      </div>
      {contactInfo.social?.url && (
        <div className="flex items-center gap-2">
          <span className="font-semibold">{contactInfo.social.label}:</span>
          <a href={contactInfo.social.url} target="_blank" rel="noopener noreferrer" className="text-primary underline flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            {contactInfo.social.url.replace(/^https?:\/\//, "")}
          </a>
        </div>
      )}
    </div>
  );
}
