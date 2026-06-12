"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content Column */}
          <AnimatedSection animation="slideRight" className="max-w-xl">
            {/* Pill-shaped Section Eyebrow */}
            <div className="inline-block border border-black/30 rounded-full px-3 py-0.5 bg-transparent mb-4">
              <span className="text-xs text-black/70 font-medium tracking-normal">
                Ecosystem & Partners
              </span>
            </div>
            
            {/* Main Heading Text */}
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] leading-[1.15] mb-5">
              Built on Trust, Powered by Partnerships
            </h2>
            
            {/* Verified Paragraph Copy */}
            <p className="text-black/60 text-sm sm:text-base leading-relaxed max-w-md">
              Lyra collaborates with leading wallets, exchanges, and dApps to provide seamless integration and real-world usability.
            </p>
          </AnimatedSection>

          {/* Right Side Content Column: Single Combined High-Performance Asset */}
          <AnimatedSection animation="fadeUp" className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[540px] transition-transform duration-300 hover:scale-[1.01]">
              <Image
                src="/images/all-partners.png"
                alt="Lyra Supported Ecosystem Wallets and Exchanges"
                width={540}
                height={270}
                priority // Instructs Next.js to load this instantly on page load
                className="w-full h-auto object-contain"
              />
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}