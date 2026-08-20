import {
  Home,
  Users,
  BookOpen,
  BarChart3,
  FolderClosed,
  Receipt,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const navItems: { label: string; icon: LucideIcon }[] = [
  { label: "Home", icon: Home },
  { label: "Join a Group", icon: Users },
  { label: "Take a Course", icon: BookOpen },
  { label: "My Progress", icon: BarChart3 },
  { label: "Shared Files", icon: FolderClosed },
  { label: "Manage Subscriptions", icon: Receipt },
];

function PixelArrow({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "shrink-0 font-bold tracking-tighter",
        active ? "text-electric-foreground" : "text-muted-foreground",
      )}
    >
      &gt;&gt;
    </span>
  );
}

function PixelLogo() {
  const cells = [
    1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0,
  ];
  return (
    <div className="pixel-border pixel-shadow grid h-16 w-16 shrink-0 grid-cols-5 gap-[2px] rounded-xs bg-ink p-[3px]">
      {cells.map((c, i) => (
        <span
          key={i}
          className={cn(
            "block aspect-square",
            c ? "bg-signal-yellow" : i % 7 === 0 ? "bg-signal-magenta" : "bg-electric",
          )}
        />
      ))}
    </div>
  );
}

type SidebarProps = {
  active: string;
  onSelect: (label: string) => void;
  onClose?: () => void;
};

export function Sidebar({ active, onSelect, onClose }: SidebarProps) {
  return (
    <nav
      aria-label="Workstation navigation"
      className="border-ink flex h-full flex-col border-r-2 bg-sidebar"
    >
      <div className="border-ink grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b-2 p-4">
        <PixelLogo />
        <div className="min-w-0">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-electric">7TI</p>
          <h1 className="truncate text-lg font-bold tracking-tight">7TI Workstation</h1>
          <p className="truncate text-[10px] tracking-widest uppercase text-muted-foreground">
            Unlock Your Potential
          </p>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="pixel-border pixel-shadow-sm pixel-press rounded-xs bg-paper p-1 lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <ul className="flex-1 space-y-2 overflow-y-auto p-3">
        {navItems.map((item) => {
          const isActive = item.label === active;
          return (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => onSelect(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "pixel-border pixel-press grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xs px-3 py-2.5 text-left text-xs font-bold tracking-widest uppercase",
                  isActive
                    ? "pixel-shadow bg-electric text-electric-foreground"
                    : "pixel-shadow-sm bg-paper text-foreground hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                <span className="truncate">{item.label}</span>
                <PixelArrow active={isActive} />
              </button>
            </li>
          );
        })}
      </ul>

      <div className="border-ink border-t-2 p-3">
        <div className="pixel-border rounded-xs bg-signal-green p-3">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Fast-Track</p>
          <p className="mt-1 text-[11px] leading-snug">
            Build a Future-Proof Career — 3 missions left this week.
          </p>
        </div>
        <div className="pixel-checker mt-3 h-2 w-full opacity-30" aria-hidden />
      </div>
    </nav>
  );
}
