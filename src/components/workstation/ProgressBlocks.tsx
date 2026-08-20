import { cn } from "@/lib/utils";

type ProgressBlocksProps = {
  total: number;
  completed: number;
  className?: string;
};

export function ProgressBlocks({ total, completed, className }: ProgressBlocksProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="pixel-border flex flex-wrap gap-[3px] rounded-xs bg-muted p-[3px]">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            aria-hidden
            className={cn(
              "h-3 w-[calc((100%-9*3px)/10)] border border-ink sm:w-2.5",
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
