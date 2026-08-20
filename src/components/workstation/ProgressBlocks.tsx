import { cn } from "@/lib/utils";

type ProgressBlocksProps = {
  total: number;
  completed: number;
  className?: string;
};

export function ProgressBlocks({ total, completed, className }: ProgressBlocksProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      <div
        className="grid grid-cols-20 gap-[3px]"
        role="img"
        aria-label={`${completed} of ${total} lessons complete`}
      >
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "h-2.5 w-full rounded-[1px]",
              i < completed ? "bg-electric" : "bg-muted",
            )}
          />
        ))}
      </div>

      <p className="text-[11px] tracking-wide text-muted-foreground">
        {completed}/{total} blocks cleared
      </p>
    </div>
  );
}
