"use client";

import type { ComponentProps } from "react";
import type { UIMessage } from "ai";

import { useChat } from "@ai-sdk/react";

import { MessageThread } from "@/features/ai-chat/components/message/thread";
import { generateUuid, cn } from "@/lib/utilities";

interface ChatProperties extends ComponentProps<"div"> {
  initialMessages: UIMessage[];
  chatId: string;
}

function Chat({
  initialMessages,
  className,
  chatId,
  ...properties
}: ChatProperties) {
  const { messages } = useChat({
    messages: initialMessages,
    generateId: generateUuid,
    id: chatId,
  });

  return (
    <div
      className={cn("flex h-full w-full flex-col gap-y-3", className)}
      {...properties}
    >
      <MessageThread messages={messages} />
    </div>
  );
}

export { Chat };
