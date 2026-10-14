import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
