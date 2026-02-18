"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast({ title: "Message sent!", description: "Thank you for reaching out." });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="space-y-6 w-full text-left"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-sm">Name</label>
        <Input
          id="name"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          aria-label="Name"
          className="rounded-xl bg-background/80 border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1 font-medium text-sm">Email</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          aria-label="Email"
          className="rounded-xl bg-background/80 border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <div>
        <label htmlFor="message" className="block mb-1 font-medium text-sm">Message</label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          aria-label="Message"
          rows={5}
          className="rounded-xl bg-background/80 border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <Button type="submit" disabled={loading} className="w-full text-base font-semibold rounded-xl">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
