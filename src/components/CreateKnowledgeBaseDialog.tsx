import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CreateKnowledgeBaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateKnowledgeBaseDialog({
  open,
  onOpenChange,
}: CreateKnowledgeBaseDialogProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" showCloseButton={false} className="w-full sm:w-xl! flex flex-col overflow-y-auto gap-0 rounded-l-lg">
        <SheetHeader className="text-left px-6 py-4">
          <div className="flex items-start justify-between">
            <div>
              <SheetTitle className="text-lg font-semibold text-text-primary">
                Create New Knowledge Base
              </SheetTitle>
              <SheetDescription className="text-sm text-text-secondary mt-1">
                Best for quick answers from documents, websites and text files.
              </SheetDescription>
            </div>
            <SheetClose asChild>
              <button className="text-text-muted hover:text-text-primary cursor-pointer transition-colors">
                <X size={20} />
              </button>
            </SheetClose>
          </div>
        </SheetHeader>

        <Separator />

        <div className="space-y-5 px-6 pt-4 flex-1">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-nav-item">
              Name (Cannot be edited later)<span className="text-red-500">*</span>
            </label>
            <Input placeholder="Name" className="h-10 w-full rounded-md" />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-nav-item">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={3}
              className="w-full rounded-md border border-search-border px-3 py-2 text-sm placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-search-focus-border resize-y transition-colors"
            />
          </div>

          {/* Vector Store */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-nav-item">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <Select defaultValue="qdrant">
              <SelectTrigger className="w-full h-10 rounded-md cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" className="w-(--radix-select-trigger-width)">
                <SelectItem value="qdrant">Qdrant</SelectItem>
                <SelectItem value="pinecone">Pinecone</SelectItem>
                <SelectItem value="weaviate">Weaviate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* LLM Embedding Model */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-nav-item">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <Select defaultValue="ada-002">
              <SelectTrigger className="w-full h-10 rounded-md cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom" className="w-(--radix-select-trigger-width)">
                <SelectItem value="ada-002">text-embedding-ada-002</SelectItem>
                <SelectItem value="3-small">text-embedding-3-small</SelectItem>
                <SelectItem value="3-large">text-embedding-3-large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end px-6 py-6">
          <Button className="bg-brand hover:bg-brand-hover text-header-text px-6 h-9 rounded-md cursor-pointer">
            Create
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
