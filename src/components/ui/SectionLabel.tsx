import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-lyra-muted",
        className
      )}
    >
      <span className="w-4 h-px bg-lyra-muted" />
      {children}
      <span className="w-4 h-px bg-lyra-muted" />
    </span>
  );
}
