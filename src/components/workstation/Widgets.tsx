import { useState } from "react";
import { Check, Radio, TrendingUp } from "lucide-react";
import { DashboardWidget } from "./DashboardWidget";
import { cn } from "@/lib/utils";

const missions = [
  "Watch: Executive Inbox Triage",
  "Drill: 20-min AI prompt reps",
  "Submit: Client SOP draft",
];

const stats = [
  { label: "Remote Readiness", value: 62, color: "bg-electric" },
  { label: "AI Tooling", value: 45, color: "bg-signal-magenta" },
  { label: "Client Comms", value: 78, color: "bg-signal-green" },
];

const signals = [
  { tag: "GROUP", color: "bg-signal-orange", text: "EA Pod #7 posted 4 new wins today." },
  { tag: "LIVE", color: "bg-signal-magenta", text: "Coaching call starts 8:00 PM MNL." },
  { tag: "NOTE", color: "bg-signal-yellow", text: "New job board drop: 12 remote roles." },
];

export function NextMission() {
  const [done, setDone] = useState<number[]>([]);
  const toggle = (i: number) =>
    setDone((d) => (d.includes(i) ? d.filter((x) => x !== i) : [...d, i]));

  return (
    <DashboardWidget title="Next Mission" accent="orange" caption="Fast-Track Your Growth">
      <ul className="space-y-1">
        {missions.map((m, i) => {
          const checked = done.includes(i);
          return (
            <li key={m}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked}
                className="pixel-press grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-md px-2 py-2 text-left hover:bg-muted"
              >
                <span
                  className={cn(
                    "grid h-4 w-4 shrink-0 place-items-center rounded-xs border",
                    checked
                      ? "border-transparent bg-signal-green"
                      : "border-border bg-transparent",
                  )}
                >
                  {checked ? <Check className="h-3 w-3" strokeWidth={3.5} /> : null}
                </span>
                <span
                  className={cn(
                    "min-w-0 text-xs leading-snug",
                    checked && "text-muted-foreground line-through",
                  )}
                >
                  {m}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </DashboardWidget>
  );
}

export function GrowthTracker() {
  return (
    <DashboardWidget title="Growth Tracker" accent="green" caption="Build a Future-Proof Career">
      <ul className="space-y-4">
        {stats.map((s) => (
          <li key={s.label}>
            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 text-[11px] tracking-wide">
              <span className="truncate text-muted-foreground">{s.label}</span>
              <span className="shrink-0 font-bold">{s.value}%</span>
            </div>
            <div className="mt-2 flex gap-[3px]">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2 flex-1 rounded-[1px]",
                    i < Math.round(s.value / 5) ? s.color : "bg-muted",
                  )}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-center gap-2 text-[11px] tracking-wide text-muted-foreground">
        <TrendingUp className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
        +8% vs last week
      </p>
    </DashboardWidget>
  );
}

export function CommunitySignal() {
  return (
    <DashboardWidget title="Community Signal" accent="magenta" caption="Empowering Lives Digitally">
      <ul className="space-y-3">
        {signals.map((s) => (
          <li key={s.tag} className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
            <span
              className={cn(
                "mt-[1px] shrink-0 rounded-xs px-1.5 py-0.5 text-[9px] font-bold tracking-widest",
                s.color,
              )}
            >
              {s.tag}
            </span>
            <span className="min-w-0 text-xs leading-relaxed">{s.text}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 flex items-center gap-2 text-[11px] tracking-wide text-muted-foreground">
        <Radio className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
        142 members online
      </p>
    </DashboardWidget>
  );
}
