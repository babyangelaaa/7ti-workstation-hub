import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PixelCardProps = {
  title?: string;
  accent?: "electric" | "yellow" | "magenta" | "green" | "orange";
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

const accentBar: Record<NonNullable<PixelCardProps["accent"]>, string> = {
  electric: "bg-electric",
  yellow: "bg-signal-yellow",
  magenta: "bg-signal-magenta",
  green: "bg-signal-green",
  orange: "bg-signal-orange",
};

export function PixelCard({
  title,
  accent = "electric",
  action,
  children,
  className,
}: PixelCardProps) {
  return (
    <section className={cn("pixel-border pixel-shadow bg-card rounded-xs", className)}>
      {title ? (
        <header className="border-ink grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b-2 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2">
            <span className={cn("h-3 w-3 shrink-0 border-2 border-ink", accentBar[accent])} />
            <h2 className="truncate text-sm font-bold tracking-widest uppercase">{title}</h2>
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </header>
      ) : null}
      <div className="p-4 sm:p-5">{children}</div>
    </section>
  );
}
