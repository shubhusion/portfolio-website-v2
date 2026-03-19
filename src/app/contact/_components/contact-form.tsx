"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSkeleton } from "@/components/ui/form-skeleton";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form field
  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return undefined;
      case "email":
        if (!value.trim()) return "Email is required";
        if (!isValidEmail(value)) return "Please enter a valid email";
        return undefined;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        return undefined;
      default:
        return undefined;
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const nameError = validateField("name", form.name);
    if (nameError) newErrors.name = nameError;
    
    const emailError = validateField("email", form.email);
    if (emailError) newErrors.email = emailError;
    
    const messageError = validateField("message", form.message);
    if (messageError) newErrors.message = messageError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate on blur
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, email: true, message: true });
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours."
        });
        setForm({ name: "", email: "", message: "" });
        setSubmitted(true);
        setTouched({});
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Input base classes
  const inputBaseClasses = cn(
    "rounded-xl bg-background/80 border transition-all duration-200",
    "focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none",
    "error:border-destructive error:ring-2 error:ring-destructive/20"
  );

  return (
    <form
      className="space-y-5 w-full"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      {loading ? (
        <FormSkeleton />
      ) : submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-4 animate-in zoom-in duration-300">
            <CheckCircle2 className="w-10 h-10 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground max-w-sm">
            Thank you for reaching out. I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <>
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium">
              Name <span className="text-accent">*</span>
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={loading}
              aria-label="Name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(
                inputBaseClasses,
                "h-12 px-4",
                errors.name && touched.name 
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20" 
                  : "border-border/50"
              )}
            />
            {errors.name && touched.name && (
              <p id="name-error" className="text-xs text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
                <AlertCircle className="w-3 h-3" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email <span className="text-accent">*</span>
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={loading}
              aria-label="Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(
                inputBaseClasses,
                "h-12 px-4",
                errors.email && touched.email 
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20" 
                  : "border-border/50"
              )}
            />
            {errors.email && touched.email && (
              <p id="email-error" className="text-xs text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
                <AlertCircle className="w-3 h-3" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Message <span className="text-accent">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, timeline, and goals..."
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={loading}
              aria-label="Message"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              rows={5}
              className={cn(
                inputBaseClasses,
                "resize-none",
                errors.message && touched.message 
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20" 
                  : "border-border/50"
              )}
            />
            {errors.message && touched.message && (
              <p id="message-error" className="text-xs text-destructive flex items-center gap-1 animate-in slide-in-from-top-1">
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </p>
            )}
            {/* Character count hint */}
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>Minimum 10 characters</span>
              <span className={cn(
                "transition-colors",
                form.message.length >= 10 ? "text-accent" : ""
              )}>
                {form.message.length} characters
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-accent to-purple-600 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <CheckCircle2 className="w-4 h-4" />
              </>
            )}
          </button>
        </>
      )}
    </form>
  );
}
