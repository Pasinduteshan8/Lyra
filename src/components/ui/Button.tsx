"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lyra-cyan focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          {
            // Variants
            "bg-lyra-navy text-white hover:bg-lyra-navy-dark hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl":
              variant === "primary",
            "border-2 border-lyra-navy text-lyra-navy hover:bg-lyra-navy hover:text-white hover:scale-105":
              variant === "outline",
            "text-lyra-navy hover:bg-lyra-navy/10": variant === "ghost",
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
