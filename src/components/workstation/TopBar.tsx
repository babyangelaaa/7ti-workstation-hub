import { Home, Grid3x3, Bell, Menu } from "lucide-react";

export function TopBar({ onMenu }: { onMenu: () => void }) {
  return (
    <header className="border-ink grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b-2 bg-paper px-3 py-2 sm:px-4">
      <div className="flex min-w-0 items-center gap-2">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation"
          className="pixel-border pixel-shadow-sm pixel-press rounded-xs bg-paper p-1.5 lg:hidden"
        >
          <Menu className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Home"
          className="pixel-border pixel-shadow-sm pixel-press rounded-xs bg-electric p-1.5 text-electric-foreground"
        >
          <Home className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <span className="hidden truncate text-[10px] font-bold tracking-[0.3em] uppercase text-muted-foreground sm:block">
          7TI OS / Workstation v1.0
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="App grid"
          className="pixel-border pixel-shadow-sm pixel-press rounded-xs bg-paper p-1.5"
        >
          <Grid3x3 className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="pixel-border pixel-shadow-sm pixel-press relative rounded-xs bg-paper p-1.5"
        >
          <Bell className="h-4 w-4" strokeWidth={2.5} />
          <span className="border-ink absolute -top-1 -right-1 h-2.5 w-2.5 border-2 bg-signal-magenta" />
        </button>
        <span className="pixel-border pixel-shadow-sm grid h-8 w-8 place-items-center rounded-xs bg-signal-yellow text-xs font-bold">
          T1
        </span>
      </div>
    </header>
  );
}
