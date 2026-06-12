"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
}

const animationStyles: Record<AnimationType, { hidden: string; visible: string }> = {
  fadeUp: {
    hidden: "opacity-0 translate-y-12",
    visible: "opacity-100 translate-y-0",
  },
  fadeIn: {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
  slideLeft: {
    hidden: "opacity-0 translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  slideRight: {
    hidden: "opacity-0 -translate-x-12",
    visible: "opacity-100 translate-x-0",
  },
  scaleUp: {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const styles = animationStyles[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        inView ? styles.visible : styles.hidden,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
