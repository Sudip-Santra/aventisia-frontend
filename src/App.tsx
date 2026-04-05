import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import KnowledgeBase from "@/components/KnowledgeBase";
import CreateKnowledgeBaseDialog from "@/components/CreateKnowledgeBaseDialog";

function App() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-page-bg p-1.5 gap-1.5">
      <TopBar />
      <div className="flex flex-1 overflow-hidden gap-3">
        <Sidebar />
        <KnowledgeBase onCreateNew={() => setCreateDialogOpen(true)} />
      </div>
      <CreateKnowledgeBaseDialog
        open={createDialogOpen}
        onOpenChange={setCreateDialogOpen}
      />
    </div>
  );
}

export default App;
