import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubham Sharma | Backend & AI Systems Engineer",
  description:
    "Backend & AI Systems Engineer specializing in distributed systems, API architecture, and AI integrations. Building robust backends from 0 to 1. Expert in Python, Golang, and cloud technologies. Open to remote opportunities.",
  keywords: [
    "Backend Engineer",
    "AI Engineer",
    "Systems Engineer",
    "Software Engineer",
    "Distributed Systems",
    "API Architecture",
    "Golang Developer",
    "Python Developer",
    "TypeScript",
    "System Design",
    "AWS",
    "Google Cloud",
    "Kubernetes",
    "AI Integration",
  ],
  authors: [{ name: "Shubham Sharma", url: "https://shubham-portfolio.vercel.app/" }],
  openGraph: {
    title: "Shubham Sharma | Backend & AI Systems Engineer",
    description:
      "Backend & AI Systems Engineer. Building robust backends and AI integrations that scale.",
    url: "https://shubham-portfolio.vercel.app/",
    siteName: "Shubham Sharma Portfolio",
    images: [
      {
        url: "https://shubham-portfolio.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Shubham Sharma Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Sharma | Backend & AI Systems Engineer",
    description:
      "Backend & AI Systems Engineer. Building robust backends and AI integrations that scale.",
    images: ["https://shubham-portfolio.vercel.app/preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress className="top-0 z-[100]" />
          <Navbar />
          <SmoothCursor />
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
