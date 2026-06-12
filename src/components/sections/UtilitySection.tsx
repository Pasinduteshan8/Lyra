"use client";

import { Wallet, Trophy, ShieldCheck, Vote } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Custom icons map matching the visual meanings inside image_2ddc33.png
const iconMap = {
  Zap: Wallet,          // Fast Payments
  TrendingUp: Trophy,   // Staking Rewards
  Shield: ShieldCheck,  // Access Control
  Users: Vote,          // Governance
};

export function UtilitySection() {
  return (
    <section id="utility" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Title Header Layout */}
        <AnimatedSection className="text-center mb-12">
          <div className="inline-block border border-black/30 rounded-full px-4 py-0.5 bg-transparent mb-3">
            <span className="text-xs text-black/70 font-medium">
              Utility
            </span>
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] tracking-tight">
            What Can You Do with Lyra?
          </h2>
        </AnimatedSection>

        {/* 4-Column Pure Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Wallet;
            return (
              <AnimatedSection
                key={feature.id}
                animation="fadeUp"
                delay={i * 100}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm h-full border border-black/[0.01]">
                  
                  {/* Small Dark Circular Badge for Icons */}
                  <div className="w-10 h-10 rounded-full bg-[#121824] flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon
                      size={18}
                      className="text-white"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Feature Title */}
                  <h3 className="font-display font-medium text-xl text-[#121824] mb-2 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-black/60 text-xs sm:text-sm leading-relaxed max-w-[220px]">
                    {feature.description}
                  </p>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}