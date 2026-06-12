"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  src?: string;
  poster?: string;
  className?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export function VideoCard({
  src,
  poster,
  className,
  aspectRatio = "16/9",
}: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className={cn(
        "video-card relative cursor-pointer group select-none",
        className
      )}
      style={{ aspectRatio }}
      onClick={toggle}
      role="button"
      aria-label={playing ? "Pause video" : "Play video"}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggle()}
    >
      {/* Poster/fallback gradient when no video src */}
      {!src && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center">
          <div className="text-center text-white/40 text-sm">
            <p>Add video to</p>
            <p className="font-mono text-xs mt-1">/public/videos/hero.mp4</p>
          </div>
        </div>
      )}

      {/* Actual video element */}
      {src && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          loop
          playsInline
          preload="metadata"
          onCanPlay={() => setLoaded(true)}
          onEnded={() => setPlaying(false)}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support video playback.
        </video>
      )}

      {/* Gradient overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-opacity duration-300",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      />

      {/* Play/Pause button */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      >
        <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-200">
          {playing ? (
            <Pause className="w-5 h-5 text-lyra-navy" />
          ) : (
            <Play className="w-5 h-5 text-lyra-navy ml-1" />
          )}
        </div>
      </div>

      {/* Loading indicator */}
      {src && !loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
