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
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="fixed inset-y-0 left-0 w-64">
            <Sidebar active={active} onSelect={select} />
          </div>
        </aside>

        {open ? (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              aria-label="Close navigation overlay"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/40"
            />
            <div className="absolute inset-y-0 left-0 w-64 max-w-[85vw]">
              <Sidebar active={active} onSelect={select} onClose={() => setOpen(false)} />
            </div>
          </div>
        ) : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <TopBar onMenu={() => setOpen(true)} />

          <main className="min-w-0 flex-1 p-5 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-6xl">
              <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                Hi, Test 1
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <h1 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
                  Welcome to 7TI Workstation
                </h1>
                <span className="inline-flex items-center gap-2 rounded-md border border-border px-2.5 py-1 text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-[1px] bg-signal-yellow" />
                  Empowering Lives Digitally
                </span>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
                <CourseProgress />
                <SharedFiles />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                <NextMission />
                <GrowthTracker />
                <CommunitySignal />
              </div>

              <footer className="mt-12 border-t border-border pt-5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                7TI © Unlock Your Potential — {active} module
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>

  );
}
