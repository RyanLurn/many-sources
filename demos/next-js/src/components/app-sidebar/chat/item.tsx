"use client";

import { MessageSquare } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

import type { Chat } from "@/database/mock";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

function ChatItem({ title, id }: Chat) {
  const { id: activeChatId } = useParams<{ id: string }>();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton isActive={activeChatId === id} asChild>
        <Link href={`/chat/${id}`}>
          <MessageSquare />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export { ChatItem };
