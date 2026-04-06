import {
  Bot,
  Cpu,
  BookOpen,
  Rocket,
  Monitor,
  ListOrdered,
  Zap,
  Briefcase,
  Play,
  Lock,
  BookMarked,
  KeyRound,
  Building2,
  Puzzle,
  Settings,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

interface NavItem {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const myProjects: NavItem[] = [
  { icon: Bot, label: "Agents" },
  { icon: Cpu, label: "AI Models" },
  { icon: BookOpen, label: "Library" },
];

const orchestrator: NavItem[] = [
  { icon: Rocket, label: "Published" },
  { icon: Monitor, label: "Machines" },
  { icon: ListOrdered, label: "Queues" },
  { icon: Zap, label: "Triggers" },
  { icon: Briefcase, label: "Jobs" },
  { icon: Play, label: "Executions" },
  { icon: Lock, label: "Vault" },
  { icon: BookMarked, label: "Knowledge Base", active: true },
  { icon: KeyRound, label: "Key Store" },
];

const admin: NavItem[] = [
  { icon: Building2, label: "Tenant" },
  { icon: Puzzle, label: "Integrations" },
  { icon: Settings, label: "Settings" },
];

function NavSection({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  return (
    <div className="mb-4">
      <p className="px-4 mb-1 text-[11px] font-semibold uppercase tracking-wider text-nav-section">
        {title}
      </p>
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors mx-2 ${
              item.active
                ? "bg-nav-active-bg text-nav-active-text font-medium rounded-md relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-4.5 before:w-0.75 before:bg-black before:rounded-r-sm"
                : "text-nav-item hover:bg-nav-active-bg hover:text-nav-active-text rounded-md"
            }`}
          >
            <item.icon size={18} strokeWidth={1.8} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}

function SidebarContent({ showLogo = false }: { showLogo?: boolean }) {
  return (
    <>
      {showLogo && (
        <div className="flex items-center gap-2 px-4 pt-6">
          <img src="/aventisia-logo.svg" alt="Aventisia" className="h-6" />
          <span className="font-semibold text-base text-text-primary">Worcspace</span>
        </div>
      )}
      <div className="flex-1 overflow-y-auto py-2 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        <NavSection title="My Projects" items={myProjects} />
        <NavSection title="Orchestrator" items={orchestrator} />
        <NavSection title="Admin" items={admin} />
      </div>
    </>
  );
}

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export default function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-55 min-w-55 bg-search-bg border-r border-card-border flex-col h-full">
        <SidebarContent />
      </aside>

      {/* Mobile sidebar as Sheet */}
      <Sheet open={mobileOpen} onOpenChange={onMobileClose}>
        <SheetContent side="left" showCloseButton={false} className="w-64 p-0 bg-search-bg">
          <SidebarContent showLogo />
        </SheetContent>
      </Sheet>
    </>
  );
}
