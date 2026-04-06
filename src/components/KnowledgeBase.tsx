import { Search, Plus, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import KnowledgeBaseCard from "@/components/KnowledgeBaseCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockData = [
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
  {
    title: "Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    createdOn: "14/07/2025",
  },
];

interface KnowledgeBaseProps {
  onCreateNew: () => void;
}

export default function KnowledgeBase({ onCreateNew }: KnowledgeBaseProps) {
  return (
    <div className="flex-1 flex flex-col overflow-auto p-3 md:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 md:mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-text-primary">Knowledge Base</h1>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative flex-1 sm:flex-initial">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-search-bg border border-search-border text-sm rounded-md pl-9 pr-4 h-9 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-search-focus-border transition-colors"
            />
          </div>
          {/* Create New */}
          <Button
            onClick={onCreateNew}
            className="bg-brand hover:bg-brand-hover text-header-text rounded-md h-9 px-3 md:px-4 text-sm font-medium cursor-pointer whitespace-nowrap"
          >
            <Plus size={16} className="mr-1 md:mr-1.5" />
            <span className="hidden sm:inline">Create New</span>
            <span className="sm:hidden">New</span>
          </Button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {mockData.map((item, index) => (
          <KnowledgeBaseCard
            key={index}
            title={item.title}
            description={item.description}
            createdOn={item.createdOn}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-auto pt-4 md:pt-6 text-sm text-text-secondary">
        <p>{mockData.length} rows</p>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">Rows per page</span>
            <Select defaultValue="10">
              <SelectTrigger className="w-17.5 h-8 text-sm bg-search-bg cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <span className="hidden sm:inline">page 1 of 1</span>
          <span className="sm:hidden">1/1</span>

          <div className="flex items-center gap-0.5 md:gap-1">
            <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 rounded-md cursor-pointer" disabled>
              <ChevronsLeft size={14} className="md:size-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 rounded-md cursor-pointer" disabled>
              <ChevronLeft size={14} className="md:size-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 rounded-md cursor-pointer" disabled>
              <ChevronRight size={14} className="md:size-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8 rounded-md cursor-pointer" disabled>
              <ChevronsRight size={14} className="md:size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
