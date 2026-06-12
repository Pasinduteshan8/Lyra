"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Defaults to first item open to mirror image mockup

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="faq" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Header Section */}
        <AnimatedSection className="text-center mb-10">
          <div className="inline-block border border-black/30 rounded-full px-4 py-0.5 bg-transparent mb-3">
            <span className="text-xs text-black/70 font-medium">
              FAQs
            </span>
          </div>
          <h2 className="font-display font-medium text-4xl sm:text-5xl text-[#121824] tracking-tight">
            Frequently Asked Questions
          </h2>
        </AnimatedSection>

        {/* Accordion List Wrapper */}
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <AnimatedSection key={faq.id} animation="fadeUp" delay={i * 60}>
              <div
                className="bg-white rounded-2xl border border-[#121824]/10 transition-all duration-200"
                style={{
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                }}
              >
                {/* Accordion Trigger Row */}
                <button
                  className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-5 text-left"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span className="font-medium text-[#121824] text-lg sm:text-xl tracking-tight">
                    {faq.question}
                  </span>
                  
                  {/* Circular Chevron Icon Toggle Indicator */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full border border-black/60 flex items-center justify-center text-black/80">
                    {openId === faq.id ? (
                      <ChevronUp size={16} strokeWidth={1.75} />
                    ) : (
                      <ChevronDown size={16} strokeWidth={1.75} />
                    )}
                  </span>
                </button>

                {/* Animated Inner Answer Section */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    openId === faq.id ? "max-h-40 border-t border-black/[0.03]" : "max-h-0"
                  )}
                >
                  <p className="px-6 sm:px-8 pt-4 pb-6 text-black/60 text-xs sm:text-sm font-normal tracking-wide leading-relaxed">
                    {faq.answer || "Yes. Lyra's smart contracts are audited and security tested."}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}