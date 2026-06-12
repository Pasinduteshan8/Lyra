"use client";

import { Button } from "@/components/ui/Button";

function AmbientSphere({
  size,
  className,
  gradientId,
  stops,
}: {
  size: string | number;
  className?: string;
  gradientId: string;
  stops: { offset: string; color: string; opacity?: string }[];
}) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={gradientId} cx="45%" cy="35%" r="55%">
            {stops.map((stop, index) => (
              <stop 
                key={index} 
                offset={stop.offset} 
                stopColor={stop.color} 
                stopOpacity={stop.opacity ?? "1"} 
              />
            ))}
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill={`url(#${gradientId})`} />
      </svg>
    </div>
  );
}

export function HeroSection() {
  const videoSrc = "/videos/%5B%40download_it_bot%201080p%5D%20A%20Woman%20Working%20On%20An.mp4";

  return (
    /* Light device canvas edge frame wrapper */
    <div className="w-full bg-[#EAEAEA] p-4 md:p-8 min-h-screen flex items-center justify-center">
      
      {/* Injecting CSS Keyframes directly for global scoped smooth drifting floating cycles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatSlow {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(8px) rotate(3deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        @keyframes floatMedium {
          0% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(12px) translateX(-10px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes floatFast {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.03); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-float-1 { animation: floatSlow 12s ease-in-out infinite; }
        .animate-float-2 { animation: floatMedium 9s ease-in-out infinite; }
        .animate-float-3 { animation: floatFast 7s ease-in-out infinite; }
      `}} />

      <section
        id="home"
        className="relative w-full max-w-7xl min-h-[82vh] flex flex-col md:flex-row items-center justify-between rounded-[2.5rem] overflow-hidden px-6 py-12 md:px-16 md:py-20 shadow-2xl transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, #537591 0%, #3B576E 100%)",
        }}
      >
        {/* ================= BACKGROUND SPHERES LAYER (Z-0) ================= */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          
          {/* Top Giant Faded Hemisphere - Subtle Slow Movement */}
          <AmbientSphere
            size="720px"
            gradientId="dsTopGiant"
            className="absolute -top-[390px] left-[38%] -translate-x-1/2 hidden md:block opacity-[0.38] animate-float-1"
            stops={[
              { offset: "0%", color: "#A5C3DC" },
              { offset: "65%", color: "#537591" },
              { offset: "100%", color: "#3B576E", opacity: "0" },
            ]}
          />
          
          {/* Upper Right Matte Sphere - Placed behind the video layer */}
          <AmbientSphere
            size="360px"
            gradientId="dsRightSphere"
            className="absolute top-[3%] right-[10%] hidden md:block opacity-[0.65] animate-float-2"
            stops={[
              { offset: "0%", color: "#7FA4C5" },
              { offset: "40%", color: "#44627D" },
              { offset: "100%", color: "#162736" },
            ]}
          />

          {/* Bottom Center Complex Rising Stack Cluster */}
          <AmbientSphere
            size="310px"
            gradientId="dsBottomLarge"
            className="absolute -bottom-24 left-[38%] -translate-x-1/2 hidden md:block opacity-[0.75] animate-float-1"
            stops={[
              { offset: "0%", color: "#7CA4C5" },
              { offset: "45%", color: "#3F5D77" },
              { offset: "100%", color: "#13212E" },
            ]}
          />
          <AmbientSphere
            size="90px"
            gradientId="dsBottomMedium"
            className="absolute bottom-[28%] left-[41%] hidden md:block opacity-70 animate-float-3"
            stops={[
              { offset: "0%", color: "#7CA4C5" },
              { offset: "100%", color: "#182A3A" },
            ]}
          />
          <AmbientSphere
            size="24px"
            gradientId="dsBottomTiny"
            className="absolute bottom-[38%] left-[35%] hidden md:block opacity-60 animate-float-2"
            stops={[
              { offset: "0%", color: "#8CB2D4" },
              { offset: "100%", color: "#253A4D" },
            ]}
          />

          {/* ----- MOBILE SPECIFIC BACKDROP LAYERS WITH INDEPENDENT LOOPS ----- */}
          <AmbientSphere
            size="140vw"
            gradientId="mbTopGiant"
            className="absolute -top-[35vw] left-1/2 -translate-x-1/2 opacity-35 md:hidden animate-float-1"
            stops={[
              { offset: "0%", color: "#A5C3DC" },
              { offset: "70%", color: "#537591" },
            ]}
          />
          <AmbientSphere
            size="160px"
            gradientId="mbRightSphere"
            className="absolute top-[24%] -right-12 opacity-40 md:hidden animate-float-2"
            stops={[
              { offset: "0%", color: "#7CA4C5" },
              { offset: "100%", color: "#2E475A" },
            ]}
          />
        </div>

        {/* ================= LEFT COLUMN: CONTENT BLOCK (Z-10) ================= */}
        <div className="relative z-10 flex-1 max-w-3xl text-center md:text-left flex flex-col items-center md:items-start mt-4 md:mt-0">
          <h1 className="font-sans font-medium text-white text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[5.6rem] leading-[1.02] tracking-tighter">
            Lyra – Powering
          </h1>
          <h1 className="font-sans font-bold text-[#181E29] text-[2.8rem] sm:text-5xl md:text-6xl lg:text-[5.6rem] leading-[1.02] tracking-tighter mt-1 mb-8">
            Everyday Utility
          </h1>

          <p className="text-[#F0F4F8]/85 text-xs md:text-[0.85rem] lg:text-[0.92rem] font-normal tracking-tight leading-relaxed max-w-[280px] md:max-w-md mb-8 md:mb-14 opacity-80">
            A versatile token built for payments, staking, and access to a new digital economy.
          </p>

          <Button
            size="md"
            className="bg-[#181E29] hover:bg-[#12161F] text-white font-normal px-7 py-3 rounded-full text-xs tracking-wide border-none shadow-md transition-all duration-200"
            onClick={() =>
              document.getElementById("how-to-get")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Buy Lyra
          </Button>
        </div>

        {/* ================= RIGHT COLUMN: GLASSMORPHIC VIDEO FRAME (Z-20) ================= */}
        <div className="relative z-20 w-full max-w-sm md:max-w-[350px] lg:max-w-[440px] mt-12 md:mt-auto md:self-end md:mb-2">
          <div 
            className="relative aspect-[16/10] md:aspect-[1.55] w-full rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              boxShadow: "0 30px 70px -15px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.15)",
            }}
          >
            <video
              className="w-full h-full object-cover opacity-90 mix-blend-normal"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5 pointer-events-none transition-colors duration-200">
              <div className="w-14 h-14 rounded-full bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center pl-1 shadow-xl transform group-hover:scale-105 transition-all duration-200">
                <div className="w-0 h-0 border-y-[8px] border-y-transparent border-l-[13px] border-l-white" />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}