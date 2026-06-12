"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export function AboutSection() {
  // Path to your single, unmodified original image file
  const originalImage = "/images/lyra-hero.jpg"; 

  return (
    <section id="about" className="py-20 bg-[#EAEAEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Layered Mask Container with Active Glow Effect */}
          {/* FIXED: Removed animation="none" to prevent TypeScript type mismatch */}
          <AnimatedSection className="order-2 lg:order-1 w-full">
            <div className="relative w-full aspect-[16/9] max-w-[600px] mx-auto rounded-[32px] overflow-hidden bg-transparent isolator">
              
              {/* LAYER 1: Full base image (Pedestal, Background, and Gems) */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={originalImage} 
                  alt="Pedestal Background Base"
                  fill
                  priority
                  className="object-cover pointer-events-none select-none brightness-105"
                />
              </div>

              {/* LAYER 2: Isolated Center Coin + Dynamic Hardware-Accelerated Glow Pulse Loop */}
              <div 
                className="absolute inset-0 z-10 mix-blend-screen pointer-events-none select-none"
                style={{
                  clipPath: "circle(24% at 50% 46%)",
                  animation: "cyanNeonPulse 3s ease-in-out infinite",
                  willChange: "filter"
                }}
              >
                <Image 
                  src={originalImage} 
                  alt="Main Token Active Overlay"
                  fill
                  priority
                  className="object-cover pointer-events-none select-none"
                />
              </div>

            </div>
          </AnimatedSection>

          {/* Right Side: Text Description Copy Layout */}
          {/* FIXED: Removed animation="none" to resolve compile error */}
          <AnimatedSection className="order-1 lg:order-2 max-w-xl">
            <div className="inline-block border border-black/30 rounded-full px-3 py-0.5 bg-transparent mb-4">
              <span className="text-xs text-black/70 font-medium tracking-normal">
                About Lyra
              </span>
            </div>
            
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] leading-tight mb-5">
              What is Lyra?
            </h2>
            
            <p className="text-black/60 text-xs sm:text-sm leading-relaxed font-normal tracking-wide">
              Lyra is a next-generation utility token designed to connect users, businesses, and decentralized services. It enables fast, secure transactions, unlocks exclusive features, and rewards holders through staking programs.
            </p>
          </AnimatedSection>

        </div>
      </div>

      {/* Scoped Keyframe Injection for the Pulse Aura */}
      <style jsx global>{`
        @keyframes cyanNeonPulse {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(0, 243, 255, 0.6)) brightness(1);
          }
          50% {
            filter: drop-shadow(0 0 24px rgba(0, 243, 255, 0.95)) brightness(1.15);
          }
        }
      `}</style>
    </section>
  );
}