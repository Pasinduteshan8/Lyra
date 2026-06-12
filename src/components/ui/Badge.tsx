import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full border border-lyra-navy/20 text-xs font-medium text-lyra-navy/60 bg-white/50",
        className
      )}
    >
      {children}
    </span>
  );
}
