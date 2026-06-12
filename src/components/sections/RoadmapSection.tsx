"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

const REAL_ROADMAP_ITEMS = [
  {
    id: "q1",
    quarter: "Q1 2025",
    description: "Lyra token launch, smart contract audit completed.",
  },
  {
    id: "q2",
    quarter: "Q2 2025",
    description: "Exchange listings and staking program launch.",
  },
  {
    id: "q3",
    quarter: "Q3 2025",
    description: "Strategic partnerships and ecosystem growth.",
  },
  {
    id: "q4",
    quarter: "Q4 2025",
    description: "Community governance launch and global marketing push.",
  },
];

export function RoadmapSection() {
  return (
    /* Outer wrapper layout - Changed 'w-full' to a centralized container with max-w-7xl to fix the wide border stretching */
    <div className="w-full bg-[#EAEAEA] px-4 sm:px-6 md:px-12 py-6 flex items-center justify-center">
      
      <section
        id="roadmap"
        /* The main section container width now bounds precisely to match the top and bottom site sections */
        className="relative w-full max-w-6xl mx-auto py-20 rounded-[2.5rem] overflow-hidden z-10 shadow-lg"
        style={{
          background: "linear-gradient(180deg, #44637B 0%, #354E63 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Header Section */}
          <AnimatedSection className="text-center mb-20">
            <div className="inline-block border border-white/30 px-4 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4">
              <p className="text-xs font-medium tracking-wider text-white/80 uppercase">
                Roadmap
              </p>
            </div>
            <h2 className="font-sans font-medium text-4xl sm:text-5xl text-white tracking-tight">
              Our Journey Ahead
            </h2>
          </AnimatedSection>

          {/* Desktop Layout - Guaranteed Perfect Circles */}
          <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 min-h-[480px] px-2">
            {REAL_ROADMAP_ITEMS.map((item, i) => (
              <AnimatedSection
                key={item.id}
                animation="fadeUp"
                delay={i * 120}
                className={cn(
                  "flex-1 flex flex-col items-center transition-transform duration-500",
                  i === 0 && "-translate-y-10",
                  i === 1 && "translate-y-12",
                  i === 2 && "-translate-y-2",
                  i === 3 && "translate-y-16"
                )}
              >
                <div
                  className="w-60 h-60 lg:w-68 lg:h-68 rounded-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-105 select-none"
                  style={{
                    background: "radial-gradient(circle at 50% 45%, #15273C 0%, #09101A 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: `
                      0 30px 60px -12px rgba(5, 10, 18, 0.65),
                      inset 0 28px 32px -10px rgba(0, 0, 0, 0.95),
                      inset 0 -18px 30px -2px rgba(255, 255, 255, 0.75),
                      inset 0 -6px 16px 2px rgba(255, 255, 255, 0.9)
                    `,
                    filter: "drop-shadow(0 15px 20px rgba(255, 255, 255, 0.15))",
                  }}
                >
                  <span className="font-sans font-bold text-white text-2xl lg:text-3xl mb-2 tracking-tight">
                    {item.quarter}
                  </span>
                  <p className="text-white/95 text-xs lg:text-sm font-sans font-normal tracking-tight leading-snug max-w-[180px]">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Layout - Guaranteed Perfect Circles */}
          <div className="md:hidden flex flex-col items-center justify-center min-h-[900px] py-4 relative">
            {REAL_ROADMAP_ITEMS.map((item, i) => (
              <AnimatedSection 
                key={item.id} 
                animation="fadeUp" 
                delay={i * 100}
                className={cn(
                  "w-full flex justify-center transition-transform duration-500 my-8",
                  i === 0 && "-translate-x-10",
                  i === 1 && "translate-x-10 -mt-6",
                  i === 2 && "-translate-x-12 -mt-6",
                  i === 3 && "translate-x-8 -mt-6"
                )}
              >
                <div
                  className="w-56 h-56 rounded-full flex flex-col items-center justify-center p-6 text-center transition-all duration-300 select-none"
                  style={{
                    background: "radial-gradient(circle at 50% 45%, #15273C 0%, #09101A 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: `
                      0 30px 55px -10px rgba(7, 12, 22, 0.7),
                      inset 0 24px 28px -10px rgba(0, 0, 0, 0.95),
                      inset 0 -16px 26px -2px rgba(255, 255, 255, 0.7),
                      inset 0 -5px 14px 1px rgba(255, 255, 255, 0.85)
                    `,
                    filter: "drop-shadow(0 12px 18px rgba(255, 255, 255, 0.12))",
                  }}
                >
                  <p className="font-sans font-bold text-white text-xl tracking-tighter mb-1">{item.quarter}</p>
                  <p className="text-white/95 text-xs font-sans font-normal tracking-tighter leading-snug max-w-[160px]">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}