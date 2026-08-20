import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";
import { ProgressBlocks } from "./ProgressBlocks";

export function CourseProgress() {
  return (
    <PixelCard title="Course Progress" accent="electric">
      <div className="flex flex-wrap items-center gap-1.5">
        <span aria-hidden className="border-ink h-2 w-2 border bg-signal-yellow" />
        <span aria-hidden className="border-ink h-2 w-2 border bg-signal-magenta" />
        <span aria-hidden className="border-ink h-2 w-2 border bg-signal-green" />
        <span aria-hidden className="border-ink h-2 w-2 border bg-signal-orange" />
        <span className="ml-1 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          Active Track
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed">
        You marked <span className="font-bold">0/40</span> lessons complete for{" "}
        <span className="border-ink border-b-2 font-bold text-electric">
          “AI-Trained Executive Assistant Certification”
        </span>
      </p>

      <div className="mt-5">
        <ProgressBlocks total={40} completed={0} />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <PixelButton variant="primary">Continue Course</PixelButton>
        <PixelButton variant="ghost">View Syllabus</PixelButton>
      </div>
    </PixelCard>
  );
}
