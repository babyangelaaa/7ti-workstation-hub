import type { ReactNode } from "react";
import { PixelCard } from "./PixelCard";

type Props = {
  title: string;
  accent?: "electric" | "yellow" | "magenta" | "green" | "orange";
  caption: string;
  children: ReactNode;
};

export function DashboardWidget({ title, accent = "electric", caption, children }: Props) {
  return (
    <PixelCard title={title} accent={accent}>
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
        {caption}
      </p>
      <div className="mt-4">{children}</div>
    </PixelCard>
  );
}
