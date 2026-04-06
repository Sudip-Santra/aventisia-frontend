import { Search, Bell, ChevronDown, Menu } from "lucide-react";

interface TopBarProps {
  onMenuClick?: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="h-14 min-h-14 flex items-center rounded-lg bg-linear-to-r from-header-from via-header-via to-header-to px-3 md:px-5">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-header-text mr-2 cursor-pointer"
      >
        <Menu size={22} />
      </button>

      {/* Left: Logo + Worcspace selector */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="/aventisia-logo.svg"
          alt="Aventisia"
          className="h-6"
        />
        <span className="text-header-text font-semibold text-base hidden sm:inline">Worcspace</span>
        <span className="bg-header-search-bg text-header-text text-[11px] px-2.5 py-0.5 rounded-full font-medium flex items-center gap-0.5 sm:ml-2 cursor-pointer">
          Worcspace 1
          <ChevronDown size={12} />
        </span>
      </div>

      {/* Center: Search bar - hidden on mobile */}
      <div className="flex-1 hidden md:flex justify-center px-8">
        <div className="relative w-full max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-header-text-muted"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-header-search-bg text-header-text placeholder-header-text-muted text-sm rounded-lg pl-9 pr-16 py-2 border border-header-search-border focus:outline-none focus:border-header-text-muted transition-colors"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-header-text-muted text-xs bg-kbd-bg px-1.5 py-0.5 rounded font-mono">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Spacer on mobile when search is hidden */}
      <div className="flex-1 md:hidden" />

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="text-header-text-muted hover:text-header-text transition-colors cursor-pointer">
          <Bell size={20} />
        </button>
        <div className="w-7 h-7 rounded-full bg-avatar-bg ring-3 ring-avatar-ring flex items-center justify-center text-avatar-text text-xs font-semibold cursor-pointer">
          GK
        </div>
      </div>
    </header>
  );
}
