"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CommunitySection() {
  return (
    <section id="community" className="py-16 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Rounded Floating Banner Container */}
        <div 
          className="rounded-[32px] py-14 px-6 md:px-12 text-center shadow-lg"
          style={{
            background: "linear-gradient(180deg, #426382 0%, #2B435C 100%)",
          }}
        >
          <AnimatedSection>
            
            {/* Pill-Shaped Section Eyebrow Label */}
            <div className="inline-block border border-white/20 rounded-full px-4 py-0.5 bg-white/5 backdrop-blur-sm mb-4">
              <span className="text-xs text-white/80 font-normal tracking-wide">
                Community
              </span>
            </div>

            {/* Main Section Header Title */}
            <h2 className="font-display font-medium text-3xl sm:text-4xl lg:text-5xl text-white mb-3 tracking-normal">
              Join the Lyra Movement
            </h2>
            
            {/* Paragraph Copy */}
            <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto mb-8 font-normal tracking-wide leading-relaxed">
              Be part of a fast-growing global community shaping the future of digital utility. Connect, engage, and vote on Lyra&apos;s evolution.
            </p>

            {/* Dark Circular Interactive Icon Badges matching image_2c73db.png with explicit login routes */}
            <div className="flex items-center justify-center gap-4">
              
              {/* 1. Telegram Web Sign-In Interface */}
              <a
                href="https://web.telegram.org/k/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram Login Portal"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#18202C] hover:bg-[#202A3A] text-white transition-all duration-300 hover:scale-105 shadow-md group"
              >
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-2.5 h-1 bg-[#18202C] transform rotate-45 translate-x-[1px] translate-y-[1px] rounded-sm" />
                </div>
              </a>

              {/* 2. X / Twitter Core Login flow */}
              <a
                href="https://x.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Account Authentication"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#18202C] hover:bg-[#202A3A] text-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* 3. CoinMarketCap Access Dashboard */}
              <a
                href="https://coinmarketcap.com/login/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CoinMarketCap Profile Access"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#18202C] hover:bg-[#202A3A] text-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#18202C] rounded-[1px] font-mono text-[8px] font-bold flex items-center justify-center text-white select-none scale-90">
                    M
                  </div>
                </div>
              </a>

              {/* 4. CoinGecko Verified Session Gateway */}
              <a
                href="https://www.coingecko.com/account/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CoinGecko User Session Sign-In"
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#18202C] hover:bg-[#202A3A] text-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </a>

            </div>

          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}