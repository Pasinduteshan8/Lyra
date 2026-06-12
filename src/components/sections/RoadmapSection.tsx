"use client";

import { ROADMAP_ITEMS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

export function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="py-24"
      style={{
        background: "linear-gradient(135deg, #2C3E5C 0%, #1B2B4B 50%, #2C3E5C 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-block border border-white/20 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4">
            <p className="text-xs font-medium tracking-wider text-white/60">
              Roadmap
            </p>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
            Our Journey Ahead
          </h2>
        </AnimatedSection>

        {/* Desktop Layout: Staggered horizontal circles containing text */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-8 min-h-[450px] px-4">
          {ROADMAP_ITEMS.map((item, i) => (
            <AnimatedSection
              key={item.id}
              animation="fadeUp"
              delay={i * 120}
              className={cn(
                "flex-1 flex flex-col items-center transition-transform duration-500",
                // Creates the exact wavy/staggered layout from the screenshot
                i % 2 === 0 ? "-translate-y-6" : "translate-y-12"
              )}
            >
              {/* Massive Bubble Container */}
              <div
                className={cn(
                  "w-64 h-64 lg:w-72 lg:h-72 rounded-full flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:scale-105",
                  item.status === "active" && "ring-2 ring-lyra-cyan/50 ring-offset-4 ring-offset-transparent"
                )}
                style={{
                  background:
                    item.status === "completed"
                      ? "radial-gradient(circle, #22374E 0%, #172437 100%)"
                      : item.status === "active"
                      ? "radial-gradient(circle, #1A4B6E 0%, #0D2D4A 100%)"
                      : "radial-gradient(circle, #1E2D44 0%, #131E30 100%)",
                  boxShadow:
                    item.status === "active"
                      ? "0 20px 50px rgba(0,194,255,0.25), inset 0 2px 10px rgba(255,255,255,0.1)"
                      : "0 20px 40px rgba(0,0,0,0.4), inset 0 2px 8px rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Timeframe Title */}
                <span className="font-display font-bold text-white text-xl sm:text-2xl mb-2 tracking-wide">
                  {item.quarter}
                </span>
                
                {/* Internal text descriptions */}
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-[180px]">
                  {item.description || `${item.title}.`}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile Layout: Balanced vertical list */}
        <div className="md:hidden space-y-6">
          {ROADMAP_ITEMS.map((item, i) => (
            <AnimatedSection key={item.id} animation="fadeUp" delay={i * 100}>
              <div
                className="flex flex-col gap-3 p-6 rounded-2xl text-center items-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="font-bold text-white text-lg tracking-wide">{item.quarter}</p>
                <p className="text-white/60 text-sm max-w-sm">
                  {item.description || item.title}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}