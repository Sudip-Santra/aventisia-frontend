import { MoreVertical } from "lucide-react";

interface KnowledgeBaseCardProps {
  title: string;
  description: string;
  createdOn: string;
}

export default function KnowledgeBaseCard({
  title,
  description,
  createdOn,
}: KnowledgeBaseCardProps) {
  return (
    <div className="bg-search-bg border border-card-border rounded-lg p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-semibold text-text-primary">{title}</h3>
          <button className="text-text-muted hover:text-text-secondary -mt-0.5 cursor-pointer">
            <MoreVertical size={18} />
          </button>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
      <div className="mt-4 pt-3 border-t border-card-border-light">
        <p className="text-xs text-text-muted">Created On: {createdOn}</p>
      </div>
    </div>
  );
}
