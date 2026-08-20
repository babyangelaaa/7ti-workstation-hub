import { cn } from "@/lib/utils";

type ProgressBlocksProps = {
  total: number;
  completed: number;
  className?: string;
};

export function ProgressBlocks({ total, completed, className }: ProgressBlocksProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div
        className="pixel-border grid grid-cols-10 gap-[3px] rounded-xs bg-muted p-[3px] sm:grid-cols-20"
        role="img"
        aria-label={`${completed} of ${total} lessons complete`}
      >
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "border-ink h-3 w-full border",
              i < completed ? "bg-electric" : "bg-paper",
            )}
          />
        ))}
      </div>

      <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground">
        {completed}/{total} blocks cleared
      </p>
    </div>
  );
}
