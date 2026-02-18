

import ContactForm from "./_components/contact-form";
import { ContactDetails } from "./_components/contact-details";
import { Avatar } from "@/components/ui/avatar";
import { User } from "lucide-react";


export default function ContactPage() {
  return (
    <section className="container min-h-[80vh] flex items-center justify-center pt-24 pb-16">
      <div className="w-full max-w-xl rounded-3xl border bg-gradient-to-br from-primary/10 to-secondary/10 shadow-2xl p-0 flex flex-col items-center text-center gap-0 backdrop-blur-xl">
        <div className="w-full rounded-t-3xl bg-gradient-to-r from-primary/30 to-secondary/30 flex flex-col items-center pt-8 pb-4">
          <Avatar className="w-20 h-20 mb-2 bg-background border-4 border-white/20 shadow-lg">
            <User className="w-10 h-10 text-primary" />
          </Avatar>
          <h1 className="text-4xl font-bold tracking-tight mb-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Contact</h1>
          <p className="mb-2 text-muted-foreground text-base max-w-md">I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out below.</p>
        </div>
        <div className="p-10 pt-6 flex flex-col items-center text-center gap-8 w-full">
          <div className="w-full flex flex-col gap-6">
            <ContactForm />
          </div>
          <div className="border-t pt-8 w-full">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
