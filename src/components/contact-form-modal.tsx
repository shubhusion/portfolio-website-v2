"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Mail, MessageSquare } from "lucide-react";

import { useModalStore } from "@/stores/modalStore";
import { toast } from "@/hooks/use-toast";

import { Description } from "@radix-ui/react-dialog";

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
          <Description className="text-sm text-muted-foreground pl-1">
            Have a project in mind? I typically respond within 24 hours.
          </Description>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="relative">
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 pr-4 py-2 w-full text-sm"
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
              className="pl-10 pr-4 py-2 w-full text-sm"
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
              className="pl-10 pr-4 py-2 w-full text-sm resize-none"
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
              <Button variant={"outline"} type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
