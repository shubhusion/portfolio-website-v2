"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { User, Mail, MessageSquare } from "lucide-react";

import { useModalStore } from "@/stores/modalStore";
import { toast } from "@/hooks/use-toast";

export default function ContactFormModal() {
  const { isOpen, closeModal } = useModalStore();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        closeModal();
        toast({
          description: result.message,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast({
          variant: "destructive",
          title: result.message,
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-md rounded-2xl shadow-2xl p-6 transition-all duration-300 ease-in-out">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-left">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground pl-1">
            Have a project in mind? I typically respond within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm rounded-lg border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="Your name"
              required
            />
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm"
              size={18}
            />
          </div>
          <div className="relative">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm rounded-lg border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="your@email.com"
              required
            />
            <Mail
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={18}
            />
          </div>
          <div className="relative">
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm resize-none rounded-lg border border-border/50 focus:border-accent focus:ring-2 focus:ring-accent/20"
              placeholder="Tell me about your project..."
              rows={4}
              required
            />
            <MessageSquare
              className="absolute left-3 top-3 text-muted-foreground"
              size={18}
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <DialogClose asChild>
              <button className="h-10 px-4 text-sm font-medium rounded-xl border border-border hover:bg-accent/10 hover:text-accent transition-all">
                Cancel
              </button>
            </DialogClose>

            <button type="submit" className="h-10 px-6 text-sm font-semibold rounded-full bg-gradient-to-r from-accent to-purple-600 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-105 transition-all duration-300">
              Send Message
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
