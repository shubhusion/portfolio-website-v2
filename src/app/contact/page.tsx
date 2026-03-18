

import ContactForm from "./_components/contact-form";
import { ContactDetails } from "./_components/contact-details";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";


export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      
      <section className="container min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4 relative z-10">
        <div className="w-full max-w-xl rounded-3xl border bg-gradient-to-br from-card to-primary/5 shadow-2xl p-0 flex flex-col items-center text-center gap-0 backdrop-blur-xl">
          <div className="w-full rounded-t-3xl bg-gradient-to-r from-primary/20 to-secondary/20 flex flex-col items-center pt-8 pb-6 px-4">
            <Avatar className="w-16 h-16 md:w-20 md:h-20 mb-3 bg-background border-4 border-white/20 shadow-lg">
              <User className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </Avatar>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in Touch</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-sm px-2">
              Have a project in mind? Let&apos;s discuss how I can help.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Currently based in India (IST). I typically respond within 24 hours.
            </p>
          </div>
          <div className="p-6 md:p-10 pt-6 flex flex-col items-center text-center gap-6 w-full">
            <div className="w-full flex flex-col gap-5">
              <ContactForm />
            </div>
            <div className="border-t pt-6 w-full">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
