import { PanelLeftOpen } from "lucide-react";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function AppSidebarTrigger() {
  const { toggleSidebar, open } = useSidebar();

  if (open) {
    return;
  }

  return (
    <div className="fixed top-2 left-2">
      <Button onClick={toggleSidebar} variant="outline" size="icon">
        <PanelLeftOpen className="size-5" />
      </Button>
    </div>
  );
}

export { AppSidebarTrigger };
