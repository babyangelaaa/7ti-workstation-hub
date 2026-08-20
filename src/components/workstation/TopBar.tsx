import { Grid3x3, Bell, Menu } from "lucide-react";

export function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border bg-background/80 px-4 py-3 backdrop-blur-none sm:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation"
          className="pixel-press rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground lg:hidden"
        >
          <Menu className="h-4 w-4" strokeWidth={2} />
        </button>
        <span className="hidden truncate text-[10px] tracking-[0.25em] uppercase text-muted-foreground sm:block">
          7TI OS / Workstation v1.0
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button
          type="button"
          aria-label="App grid"
          className="pixel-press rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Grid3x3 className="h-4 w-4" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="pixel-press relative rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Bell className="h-4 w-4" strokeWidth={2} />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-[1px] bg-signal-magenta" />
        </button>
        <span className="ml-2 grid h-8 w-8 place-items-center rounded-md bg-electric text-[11px] font-bold text-electric-foreground">
          T1
        </span>
      </div>
    </header>
  );
}
