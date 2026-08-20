import { Plus } from "lucide-react";
import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";

function PixelFolder() {
  const rows = [
    "0111110000000000",
    "0100001000000000",
    "0111111111111100",
    "0100000000000100",
    "0100000000000100",
    "0111111111111100",
  ];
  return (
    <div className="grid gap-[2px]" aria-hidden>
      {rows.map((row, y) => (
        <div key={y} className="flex gap-[2px]">
          {row.split("").map((c, x) => (
            <span
              key={x}
              className={
                c === "1"
                  ? "h-2 w-2 rounded-[1px] bg-electric/70"
                  : "h-2 w-2 rounded-[1px] bg-muted"
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SharedFiles() {
  return (
    <PixelCard
      title="Shared Files"
      accent="magenta"
      action={
        <PixelButton variant="yellow" className="px-3 py-1.5">
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
          Add Files
        </PixelButton>
      }
    >
      <div className="flex flex-col items-center gap-5 py-8 text-center">
        <PixelFolder />
        <p className="text-xs tracking-wide text-muted-foreground">No files uploaded yet.</p>
        <PixelButton variant="ghost">Open File Vault</PixelButton>
      </div>
    </PixelCard>
  );
}
