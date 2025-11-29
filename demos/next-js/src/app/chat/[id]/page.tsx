import { notFound } from "next/navigation";

import { Chat } from "@/features/ai-chat/components/chat";
import { mockDatabase } from "@/database/mock";

export default async function ChatPage({ params }: PageProps<"/chat/[id]">) {
  const { id } = await params;
  const chat = mockDatabase.chats.find((chat) => chat.id === id);

  if (chat === undefined) {
    notFound();
  }

  const chatMessages = mockDatabase.messages.filter(
    (message) => message.chatId === chat.id
  );

  return <Chat initialMessages={chatMessages} chatId={chat.id} />;
}
