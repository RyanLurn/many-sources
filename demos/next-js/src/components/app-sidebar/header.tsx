"use client";

import { PanelLeftClose, Bot } from "lucide-react";

import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

function AppSidebarHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <SidebarHeader>
      <div className="ml-2 flex items-center gap-x-2">
        <Bot className="size-5" />
        <span>AI Chat</span>
        <Button
          onClick={toggleSidebar}
          className="ml-auto"
          variant="ghost"
          size="icon"
        >
          <PanelLeftClose className="size-5" />
        </Button>
      </div>
    </SidebarHeader>
  );
}

export { AppSidebarHeader };
