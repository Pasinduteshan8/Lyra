"use client";

import { useState } from "react";

export function ImageCoin({ className }: { className?: string }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className={`relative flex items-center justify-center w-full ${className || ""}`}>
      {imgOk ? (
        <img
          src="/images/hero-coin.png"
          alt="Lyra coin"
          className="rounded-full object-cover w-[320px] h-[320px] orb-float shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          onError={() => setImgOk(false)}
        />
      ) : (
        // If image missing, render an empty placeholder — caller can fall back to LyraCoin
        <div className="w-[320px] h-[320px] rounded-full bg-lyra-section-mid/10 flex items-center justify-center">
          <span className="text-lyra-navy/40">Image not found</span>
        </div>
      )}
    </div>
  );
}
