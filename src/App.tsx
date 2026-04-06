import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import KnowledgeBase from "@/components/KnowledgeBase";
import CreateKnowledgeBaseDialog from "@/components/CreateKnowledgeBaseDialog";

function App() {
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => { if (mq.matches) setSidebarOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-page-bg p-1 md:p-1.5 gap-1 md:gap-1.5">
      <TopBar onMenuClick={() => setSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden gap-0 md:gap-3">
        <Sidebar
          mobileOpen={sidebarOpen}
          onMobileClose={() => setSidebarOpen(false)}
        />
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
