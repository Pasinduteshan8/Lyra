import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
};

export function BrandMark({ className, compact = false }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center", compact ? "gap-1.5" : "gap-2", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full border border-lyra-navy/80 text-lyra-navy",
          compact ? "h-5 w-5 border-[1.5px]" : "h-8 w-8 border-2"
        )}
        aria-hidden="true"
      >
        <span className={cn("font-display font-semibold leading-none", compact ? "text-[11px]" : "text-sm")}>L</span>
      </div>
      <span
        className={cn(
          "font-display font-extrabold tracking-[0.16em] text-lyra-navy",
          compact ? "text-[13px]" : "text-[18px]"
        )}
      >
        LYRA
      </span>
    </div>
  );
}