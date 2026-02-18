import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/magicui/particles";

export default function HeroSection() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 sm:py-20 md:py-24 select-none overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles className="w-full h-full" quantity={120} ease={80} color={color} refresh />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[98vw] sm:w-[90vw] h-32 sm:h-44 md:h-56 bg-gradient-to-t from-[#7f5fff55] via-[#a259ff22] to-transparent rounded-full blur-3xl opacity-90 animate-pulse-slow" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 animate-fade-in-up w-full px-2 sm:px-0">
        <div className="mb-2 animate-fade-in-down">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20 mb-4 animate-bounce-slow shadow-lg">Open to new projects</span>
        </div>
        <h1 className="text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in-up break-words w-full max-w-3xl mx-auto">
          I help founders turn ideas<br className="hidden xs:block" />
          into seamless <span className="italic">digital experiences</span>
        </h1>
        <div className="flex flex-col items-center gap-2 sm:gap-3 animate-fade-in-up delay-150 w-full">
          <div className="relative flex flex-wrap items-center justify-center mb-1 w-full max-w-lg mx-auto">
            <span className="text-base xs:text-lg text-muted-foreground mr-2">Hello, I'm</span>
            <span className="relative">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-primary blur-md opacity-60 animate-hero-glow" />
              <img src="/avatar.png" alt="Shubham Sharma Avatar" className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary shadow-lg relative z-10 animate-float" />
            </span>
            <span className="font-semibold text-base xs:text-lg ml-2">Shubham Sharma</span>
            <span className="text-base xs:text-lg text-muted-foreground ml-2">· a Full Stack Developer</span>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 animate-fade-in-up delay-300 w-full flex justify-center">
          <Link href="/contact">
            <Button size="lg" className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-full shadow-xl animate-cta-pop w-full max-w-xs sm:max-w-none">
              Let's Connect <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
        <div className="mt-3 sm:mt-4 flex flex-col items-center gap-1 animate-fade-in-up delay-500 w-full">
          <span className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15ZM4.5 4a.5.5 0 0 0-.5.5V5l8 5 8-5v-.5a.5.5 0 0 0-.5-.5h-15ZM20 6.236l-7.555 4.722a1 1 0 0 1-1.11 0L4 6.236V19.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V6.236ZM4.197 20A1.5 1.5 0 0 0 6 21h12a1.5 1.5 0 0 0 1.803-1H4.197Z"/></svg>
            <span>shubham27.sharma03@gmail.com</span>
          </span>
        </div>
      </div>
      <style jsx>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-move 4s ease-in-out infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 3.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-hero-glow {
          animation: hero-glow 3s ease-in-out infinite alternate;
        }
        @keyframes hero-glow {
          0% { opacity: 0.5; filter: blur(8px); }
          100% { opacity: 1; filter: blur(16px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1.2s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-cta-pop {
          animation: ctaPop 1.1s cubic-bezier(.39,.575,.565,1) both;
        }
        @keyframes ctaPop {
          0% { opacity: 0; transform: scale(0.8); }
          80% { opacity: 1; transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-bounce-slow {
          animation: bounce 2.5s infinite alternate cubic-bezier(.39,.575,.565,1);
        }
        @keyframes bounce {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
