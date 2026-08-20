import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "yellow";

const variants: Record<Variant, string> = {
  primary: "bg-electric text-electric-foreground pixel-shadow hover:brightness-110",
  ghost: "bg-card text-foreground border border-border hover:bg-muted",
  yellow: "bg-card text-foreground border border-border hover:border-electric hover:text-electric",
};

export function PixelButton({
  variant = "primary",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={cn(
        "pixel-press inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-bold tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
