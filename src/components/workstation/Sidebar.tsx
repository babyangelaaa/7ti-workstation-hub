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
import logo from "@/assets/7ti-logo.png.asset.json";

export const navItems: { label: string; icon: LucideIcon }[] = [
  { label: "Home", icon: Home },
  { label: "Join a Group", icon: Users },
  { label: "Take a Course", icon: BookOpen },
  { label: "My Progress", icon: BarChart3 },
  { label: "Shared Files", icon: FolderClosed },
  { label: "Manage Subscriptions", icon: Receipt },
];

type SidebarProps = {
  active: string;
  onSelect: (label: string) => void;
  onClose?: () => void;
};

export function Sidebar({ active, onSelect, onClose }: SidebarProps) {
  return (
    <nav
      aria-label="Workstation navigation"
      className="flex h-full flex-col border-r border-border bg-sidebar"
    >
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-5 py-6">
        <img
          src={logo.url}
          alt="7TI logo"
          className="h-9 w-9 shrink-0 rounded-xs object-contain"
        />
        <div className="min-w-0">
          <h1 className="truncate text-base font-bold tracking-tight">7TI Workstation</h1>
          <p className="truncate text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            Unlock Your Potential
          </p>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="pixel-press rounded-md p-1 text-muted-foreground hover:bg-muted lg:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <ul className="flex-1 space-y-1 overflow-y-auto px-3">
        {navItems.map((item) => {
          const isActive = item.label === active;
          return (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => onSelect(item.label)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "pixel-press relative grid w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-3 rounded-md px-3 py-2.5 text-left text-xs tracking-wide",
                  isActive
                    ? "bg-electric/8 font-bold text-electric"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {isActive ? (
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-0 h-4 w-[3px] -translate-y-1/2 rounded-[1px] bg-electric"
                  />
                ) : null}
                <item.icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                <span className="truncate">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="p-4">
        <div className="rounded-lg border border-border p-4">
          <div className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-[1px] bg-signal-green" />
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Fast-Track</p>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">
            Build a Future-Proof Career — 3 missions left this week.
          </p>
        </div>
      </div>
    </nav>
  );
}
