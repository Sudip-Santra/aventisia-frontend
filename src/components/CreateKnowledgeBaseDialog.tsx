import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-120 p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-text-primary">
            Create New Knowledge Base
          </DialogTitle>
          <DialogDescription className="text-sm text-text-secondary">
            Best for quick answers from documents, websites and text files.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 mt-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-nav-item">
              Name (Cannot be edited later)*
            </label>
            <Input placeholder="Name" className="h-10" />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-nav-item">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={3}
              className="w-full rounded-lg border border-search-border px-3 py-2 text-sm placeholder-text-placeholder focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-search-focus-border resize-none transition-colors"
            />
          </div>

          {/* Vector Store */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-nav-item">
              Vector Store*
            </label>
            <Select defaultValue="qdrant">
              <SelectTrigger className="h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qdrant">Qdrant</SelectItem>
                <SelectItem value="pinecone">Pinecone</SelectItem>
                <SelectItem value="weaviate">Weaviate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* LLM Embedding Model */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-nav-item">
              LLM Embedding Model*
            </label>
            <Select defaultValue="ada-002">
              <SelectTrigger className="h-10">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ada-002">text-embedding-ada-002</SelectItem>
                <SelectItem value="3-small">text-embedding-3-small</SelectItem>
                <SelectItem value="3-large">text-embedding-3-large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-6">
          <Button className="bg-brand hover:bg-brand-hover text-header-text px-6">
            Create
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
