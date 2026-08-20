import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/workstation/Sidebar";
import { TopBar } from "@/components/workstation/TopBar";
import { CourseProgress } from "@/components/workstation/CourseProgress";
import { SharedFiles } from "@/components/workstation/SharedFiles";
import { NextMission, GrowthTracker, CommunitySignal } from "@/components/workstation/Widgets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "7TI Workstation — Remote Career Dashboard" },
      {
        name: "description",
        content:
          "7TI Workstation: track course progress, missions, shared files and community signals in one pixel-built dashboard for remote professionals.",
      },
      { property: "og:title", content: "7TI Workstation — Remote Career Dashboard" },
      {
        property: "og:description",
        content:
          "Empowering Lives Digitally. Track your certification progress, missions and growth stats inside the 7TI Workstation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Workstation,
});

function Workstation() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const select = (label: string) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <div className="pixel-grid-bg min-h-screen bg-background">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="fixed inset-y-0 left-0 w-72">
            <Sidebar active={active} onSelect={select} />
          </div>
        </aside>

        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close navigation overlay"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/60"
            />
            <div className="absolute inset-y-0 left-0 w-72 max-w-[85vw]">
              <Sidebar active={active} onSelect={select} onClose={() => setOpen(false)} />
            </div>
          </div>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar onMenu={() => setOpen(true)} />

          <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-muted-foreground">
                Hi, Test 1
              </p>
              <h1 className="mt-2 text-2xl leading-tight font-bold tracking-tight sm:text-4xl">
                Welcome to 7TI Workstation
              </h1>
              <span className="pixel-border pixel-shadow-sm mt-4 inline-block rounded-xs bg-signal-yellow px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase">
                Empowering Lives Digitally
              </span>

              <div className="pixel-checker mt-6 h-2 w-full opacity-25" aria-hidden />

              <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                <CourseProgress />
                <SharedFiles />
              </div>

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <NextMission />
                <GrowthTracker />
                <CommunitySignal />
              </div>

              <footer className="border-ink mt-8 border-t-2 pt-4 text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                7TI © Unlock Your Potential — {active} module
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
