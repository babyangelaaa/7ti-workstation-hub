import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "yellow";

const variants: Record<Variant, string> = {
  primary: "bg-electric text-electric-foreground",
  ghost: "bg-paper text-foreground",
  yellow: "bg-signal-yellow text-foreground",
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
        "pixel-border pixel-shadow pixel-press inline-flex items-center justify-center gap-2 rounded-xs px-4 py-2 text-xs font-bold tracking-widest uppercase",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
