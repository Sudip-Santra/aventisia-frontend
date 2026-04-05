import { Search, Bell, ChevronDown } from "lucide-react";

export default function TopBar() {
  return (
    <header className="h-14 min-h-[56px] flex items-center rounded-lg bg-linear-to-r from-header-from via-header-via to-header-to p-5">
      {/* Left: Logo + Worcspace selector */}
      <div className="flex items-center gap-2 cursor-pointer">
        {/* Logo */}
        <img
          src="/aventisia-logo.svg"
          alt="Aventisia"
          className="h-6"
        />

        {/* Worcspace text */}
        <span className="text-header-text font-semibold text-base">Worcspace</span>

        {/* Worcspace 1 badge */}
        <span className="bg-header-search-bg text-header-text text-[11px] px-2.5 py-0.5 rounded-full font-medium flex items-center gap-0.5 ml-2 cursor-pointer">
          Worcspace 1
          <ChevronDown size={12} />
        </span>
      </div>

      {/* Center: Search bar */}
      <div className="flex-1 flex justify-center px-8">
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

      {/* Right: Notifications & Avatar */}
      <div className="flex items-center gap-6">
        <button className="text-header-text-muted hover:text-header-text transition-colors cursor-pointer">
          <Bell size={20} />
        </button>
        <div className="w-7 h-7 rounded-full bg-avatar-bg ring-3 ring-avatar-ring flex items-center justify-center text-avatar-text text-xs font-semibold cursor-pointer">
          OK
        </div>
      </div>
    </header>
  );
}
