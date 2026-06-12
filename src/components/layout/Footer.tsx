"use client";

import { BrandMark } from "@/components/ui/BrandMark";

export function Footer() {
  return (
    <footer className="py-12 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Rounded Banner Card Container */}
        <div 
          className="rounded-[32px] pt-14 pb-16 px-8 md:px-16 text-white shadow-md flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-start"
          style={{
            background: "linear-gradient(180deg, #426382 0%, #2B435C 100%)",
          }}
        >
          {/* Brand Presentation Section */}
          <div className="max-w-md">
            <div className="mb-4 flex items-center">
              <BrandMark />
            </div>
            {/* Verbatim text copy from image_2de39d.png */}
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed tracking-wide font-normal">
              Lyra is a next-generation utility token built to empower decentralized applications, streamline payments, and provide staking rewards to the community.
            </p>
          </div>

          {/* Quick Links Column Matrix Block */}
          <div className="flex-1 lg:max-w-xl w-full">
            <h3 className="font-display font-medium text-white text-xl sm:text-2xl mb-6 tracking-wide">
              Quick links
            </h3>
            
            {/* 3-Column Pure Navigation Matrix Grid */}
            <div className="grid grid-cols-3 gap-y-4 gap-x-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <a href="#home" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Home</a>
                <a href="#about" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">About</a>
                <a href="#utility" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Utility</a>
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                <a href="#tokenomics" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Tokenomics</a>
                <a href="#roadmap" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Roadmap</a>
                <a href="#how-to-get" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">How to Get Lyra</a>
              </div>
              
              {/* Column 3 */}
              <div className="flex flex-col gap-3">
                <a href="#ecosystem" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Ecosystem & Partners</a>
                <a href="#community" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">Community</a>
                <a href="#faq" className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors font-normal">FAQs</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Centered Copyright Bar */}
        <div className="mt-10 text-center w-full">
          <p className="text-black/50 text-xs font-normal tracking-wide">
            © 2025 Lyra. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}