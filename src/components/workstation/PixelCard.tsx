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
    <section className={cn("surface-card rounded-lg", className)}>
      {title ? (
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 pt-5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className={cn("h-2.5 w-2.5 shrink-0 rounded-xs", accentBar[accent])} />
            <h2 className="truncate text-sm font-bold tracking-wide">{title}</h2>
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </header>
      ) : null}
      <div className="px-5 pb-5 pt-4">{children}</div>
    </section>
  );
}
