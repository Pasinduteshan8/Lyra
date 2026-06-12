"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export function AboutSection() {
  const originalImage = "/images/lyra-hero.jpg"; 

  return (
    <section id="about" className="py-24 bg-[#EAEAEA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Layered Mask Container with Fixed Neon Ring Glow Effect */}
          <AnimatedSection className="order-2 lg:order-1 w-full">
            <div className="relative w-full aspect-[16/9] max-w-[620px] mx-auto rounded-[2.5rem] overflow-hidden bg-transparent shadow-md">
              
              {/* LAYER 1: Full base image (Pedestal, Background, and Gems) */}
              <div className="absolute inset-0 z-0">
                <Image 
                  src={originalImage} 
                  alt="Pedestal Background Base"
                  fill
                  priority
                  className="object-cover pointer-events-none select-none brightness-[1.02]"
                />
              </div>

              {/* LAYER 2: Corrected Mask Center Coin + High-Contrast Glow Pulse Loop */}
              <div 
                className="absolute inset-0 z-10 mix-blend-screen pointer-events-none select-none"
                style={{
                  // FIXED: Tightened radius and pulled center offsets to perfectly isolate the coin face and prevent white pedestal leaks
                  clipPath: "circle(23.8% at 49.2% 44.5%)",
                  animation: "cyanNeonPulse 3.5s ease-in-out infinite",
                  willChange: "filter"
                }}
              >
                <Image 
                  src={originalImage} 
                  alt="Main Token Active Overlay"
                  fill
                  priority
                  className="object-cover pointer-events-none select-none brightness-110"
                />
              </div>

            </div>
          </AnimatedSection>

          {/* Right Side: Text Description Copy Layout */}
          <AnimatedSection className="order-1 lg:order-2 max-w-xl flex flex-col items-start text-left pl-0 lg:pl-6">
            
            {/* Styled pill container badge matching the layout */}
            <div className="inline-block border border-[#181E29]/30 rounded-full px-3 py-1 bg-transparent mb-5">
              <span className="text-xs text-[#181E29]/80 font-sans font-normal tracking-wide">
                About Lyra
              </span>
            </div>
            
            {/* Large high-contrast display header layout */}
            <h2 className="font-sans font-medium text-[2.75rem] sm:text-5xl text-[#181E29] leading-[1.1] tracking-tight mb-6">
              What is Lyra?
            </h2>
            
            {/* Paragraph body matching the image spacing */}
            <p className="text-[#181E29]/70 text-xs sm:text-sm font-sans font-normal tracking-tight leading-relaxed max-w-xl">
              Lyra is a next-generation utility token designed to connect users, businesses, and decentralized services. 
              It enables fast, secure transactions, unlocks exclusive features, and rewards holders through staking programs.
            </p>
          </AnimatedSection>

        </div>
      </div>

      {/* Embedded Global Styles for the Smooth Fluorescent Luminescence Effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes cyanNeonPulse {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.65)) drop-shadow(0 0 2px rgba(0, 240, 255, 0.4)) brightness(1);
          }
          50% {
            filter: drop-shadow(0 0 28px rgba(0, 240, 255, 1)) drop-shadow(0 0 10px rgba(0, 240, 255, 0.8)) brightness(1.2);
          }
        }
      `}} />
    </section>
  );
}