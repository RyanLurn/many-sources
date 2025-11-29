import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { ChatItem } from "@/components/app-sidebar/chat/item";
import { mockDatabase } from "@/database/mock";

function ChatGroup() {
  const chats = mockDatabase.chats;

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Chat history</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {chats.map((chat) => (
            <ChatItem {...chat} />
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

export { ChatGroup };
