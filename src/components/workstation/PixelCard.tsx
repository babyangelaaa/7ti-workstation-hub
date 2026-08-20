import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Accent = "electric" | "yellow" | "magenta" | "green" | "orange";

type PixelCardProps = {
  title?: string;
  accent?: Accent;
  tag?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const accentHeader: Record<Accent, string> = {
  electric: "bg-electric text-electric-foreground",
  yellow: "bg-signal-yellow text-ink",
  magenta: "bg-signal-magenta text-ink",
  green: "bg-signal-green text-ink",
  orange: "bg-signal-orange text-ink",
};

export const accentBlock: Record<Accent, string> = {
  electric: "bg-electric",
  yellow: "bg-signal-yellow",
  magenta: "bg-signal-magenta",
  green: "bg-signal-green",
  orange: "bg-signal-orange",
};

export function PixelCard({
  title,
  accent = "electric",
  tag,
  action,
  children,
  className,
}: PixelCardProps) {
  return (
    <section className={cn("brutal-border brutal-shadow rounded-md bg-card", className)}>
      {title ? (
        <header
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b-2 border-ink px-4 py-3",
            accentHeader[accent],
          )}
        >
          <div className="flex min-w-0 items-center gap-3">
            <span aria-hidden className="grid grid-cols-2 gap-[2px]">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 w-1.5",
                    accent === "electric" ? "bg-paper" : "bg-ink",
                    i === 2 && "opacity-40",
                  )}
                />
              ))}
            </span>
            <h2 className="truncate text-sm font-bold tracking-[0.08em] uppercase">{title}</h2>
            {tag ? (
              <span className="hidden shrink-0 border-2 border-ink bg-paper px-2 py-0.5 text-[9px] font-bold tracking-[0.18em] text-ink uppercase sm:inline">
                {tag}
              </span>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </header>
      ) : null}
      <div className="px-5 py-5">{children}</div>
    </section>
  );
}
