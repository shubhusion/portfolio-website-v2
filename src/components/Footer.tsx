"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t">
      {/* CTA Section */}
      <div className="container py-12 md:py-16">
        <div className="relative rounded-3xl bg-gradient-to-r from-accent/10 via-purple-500/10 to-primary/10 border border-accent/20 p-8 md:p-12 overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Have a Project in Mind?
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Let&apos;s build something amazing together. I&apos;m currently available for new projects.
              </p>
            </div>
            <Link href="/contact">
              <button className="group h-12 px-8 text-base font-semibold rounded-full bg-gradient-to-r from-accent via-purple-500 to-primary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container py-3 md:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; 2026 Shubham Sharma
            </p>
            <p className="hidden sm:block text-xs text-muted-foreground">|</p>
            <p className="text-xs text-muted-foreground">
              Available for remote work
            </p>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <Link href="/contact">
              <button className="h-10 px-4 text-xs font-medium rounded-xl hover:bg-accent/10 hover:text-accent transition-all">
                Contact
              </button>
            </Link>

            <nav className="flex gap-2 md:gap-3">
              <Link
                href="https://github.com/shubhusion"
                target="_blank"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <svg viewBox="0 0 438.549 438.549" className="w-4 h-4 md:w-5 md:h-5">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.419 1.996 44.153-14.655 80.175-41.063 108.059-79.223 27.887-38.161 41.831-81.126 41.831-128.906 0-39.771-9.803-76.457-29.409-110.052z"
                  ></path>
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/shubhusion/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              <Link
                href="https://x.com/shubhusiony"
                target="_blank"
                aria-label="Twitter (X)"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 1200 1227">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
