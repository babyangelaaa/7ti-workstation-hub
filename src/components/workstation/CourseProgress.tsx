import { PixelCard } from "./PixelCard";
import { PixelButton } from "./PixelButton";
import { ProgressBlocks } from "./ProgressBlocks";

export function CourseProgress() {
  return (
    <PixelCard title="Course Progress" accent="electric">
      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
        Active Track
      </p>

      <p className="mt-3 text-sm leading-relaxed text-foreground">
        You marked <span className="font-bold text-electric">0/40</span> lessons complete for{" "}
        <span className="font-bold">“AI-Trained Executive Assistant Certification”</span>
      </p>

      <div className="mt-6">
        <ProgressBlocks total={40} completed={0} />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <PixelButton variant="primary">Continue Course</PixelButton>
        <PixelButton variant="ghost">View Syllabus</PixelButton>
      </div>
    </PixelCard>
  );
}
