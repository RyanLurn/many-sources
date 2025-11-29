import { AppSidebarHeader } from "@/components/app-sidebar/header";
import { SidebarContent, Sidebar } from "@/components/ui/sidebar";
import { ChatGroup } from "@/components/app-sidebar/chat/group";

function AppSidebar() {
  return (
    <Sidebar>
      <AppSidebarHeader />
      <SidebarContent>
        <ChatGroup />
      </SidebarContent>
    </Sidebar>
  );
}

export { AppSidebar };
