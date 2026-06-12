"use client";

import { Button } from "@/components/ui/Button";

// SVG sphere component - matches the Figma matte grey spheres
function Sphere({
  size,
  className,
  opacity = 1,
}: {
  size: number;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={className}
      style={{ width: size, height: size, opacity }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={`sg-${size}-${className}`} cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#8BA0B8" />
            <stop offset="40%" stopColor="#5A7590" />
            <stop offset="100%" stopColor="#2C3E5C" />
          </radialGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={`url(#sg-${size}-${className})`}
        />
      </svg>
    </div>
  );
}

export function HeroSection() {
  // URL-encoded path to handle the spaces, brackets, and special characters safely
  const videoSrc = "/videos/%5B%40download_it_bot%201080p%5D%20A%20Woman%20Working%20On%20An.mp4";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #4A6E8A 0%, #5B7FA6 35%, #7A9BBC 65%, #8AAEC8 100%)",
      }}
    >
      {/* Animated floating spheres */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="sphere-1 absolute" style={{ top: "-8%", right: "5%", width: 280, height: 280 }}>
          <Sphere size={280} className="opacity-90" />
        </div>
        <div className="sphere-2 absolute" style={{ top: "-5%", left: "18%", width: 160, height: 160 }}>
          <Sphere size={160} className="opacity-70" />
        </div>
        <div className="sphere-3 absolute" style={{ bottom: "-10%", left: "0%", width: 340, height: 340 }}>
          <Sphere size={340} className="opacity-80" />
        </div>
        <div className="sphere-4 absolute" style={{ bottom: "5%", left: "30%", width: 180, height: 180 }}>
          <Sphere size={180} className="opacity-70" />
        </div>
        <div className="sphere-5 absolute" style={{ top: "55%", left: "42%", width: 40, height: 40 }}>
          <Sphere size={40} className="opacity-60" />
        </div>
        <div className="sphere-1 absolute" style={{ bottom: "15%", right: "-5%", width: 220, height: 220 }}>
          <Sphere size={220} className="opacity-50" />
        </div>
      </div>

      {/* Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
          
          {/* Left: Text + CTA */}
          <div className="flex-1 max-w-2xl">
            <h1 className="font-display font-light text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-2">
              Lyra – Powering
            </h1>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-black leading-tight mb-6">
              Everyday Utility
            </h1>
            <p className="text-black/70 text-xs sm:text-sm max-w-xs mb-10 font-normal leading-relaxed">
              A versatile token built for payments, staking, and access to a new digital economy.
            </p>
            <Button
              size="md"
              className="bg-[#181E29] hover:bg-[#222A3A] text-white font-medium px-6 py-2.5 rounded-full border-none transition-colors duration-200"
              onClick={() =>
                document.getElementById("how-to-get")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Buy Lyra
            </Button>
          </div>

          {/* Right: Custom Embedded Autoplay Video matching image_2dd07c.jpg */}
          <div className="w-full max-w-sm lg:max-w-xs xl:max-w-sm lg:self-end">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/20 group cursor-pointer">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Matte-white play button circle overlay centered on the video player */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none group-hover:bg-black/10 transition-colors duration-200">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center pl-1 backdrop-blur-sm shadow-xl transform group-hover:scale-105 transition-transform duration-200">
                  <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[12px] border-l-[#121824]" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom background fade spacer */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#EAEAEA] to-transparent" />
    </section>
  );
}