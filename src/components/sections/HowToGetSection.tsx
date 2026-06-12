"use client";

import { HOW_TO_GET_STEPS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function HowToGetSection() {
  return (
    <section id="how-to-get" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header Container */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimatedSection animation="slideRight" className="flex flex-col items-start">
            {/* Pill-shaped section label as seen in image_2e4c3b.png */}
            <div className="border border-black/30 rounded-full px-3 py-0.5 bg-transparent mb-3">
              <span className="text-xs text-black/70 font-medium tracking-normal">
                How to Get Lyra
              </span>
            </div>
            
            <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] tracking-tight">
              Own Lyra in 3 Easy Steps
            </h2>
          </AnimatedSection>
          
          {/* Main Solid CTA Button */}
          <AnimatedSection animation="slideLeft" className="flex-shrink-0">
            <Button 
              size="md" 
              className="bg-[#181E29] hover:bg-[#222A3A] text-white font-medium text-xs px-6 py-3 rounded-full border-none transition-colors duration-200"
            >
              Get Lyra Now
            </Button>
          </AnimatedSection>
        </div>

        {/* 3-Step White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_TO_GET_STEPS.map((step, i) => (
            <AnimatedSection
              key={step.step}
              animation="fadeUp"
              delay={i * 120}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-7 flex flex-col justify-start min-h-[140px] shadow-sm">
                
                {/* Step Text Badge */}
                <div className="inline-flex items-center justify-center bg-[#181E29] text-white font-sans font-medium text-base px-3 py-1 rounded-[4px] self-start mb-4">
                  Step {step.step}
                </div>

                {/* Step Content Description */}
                <p className="text-[#555E6B] text-xs sm:text-sm leading-relaxed font-normal">
                  {step.description || "Connect your wallet (MetaMask, TrustWallet)."}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}