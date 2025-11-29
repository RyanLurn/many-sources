import type { ComponentProps } from "react";
import type { UIMessage } from "ai";

import { StickToBottom } from "use-stick-to-bottom";

import { MessageBubble } from "@/features/ai-chat/components/message/bubble";
import { cn } from "@/lib/utilities";

interface MessageThreadProperties extends ComponentProps<typeof StickToBottom> {
  messages: UIMessage[];
}

function MessageThread({
  className,
  messages,
  ...properties
}: MessageThreadProperties) {
  return (
    <StickToBottom
      className={cn(
        "relative flex w-full flex-col gap-y-3 overflow-y-auto",
        className
      )}
      initial="smooth"
      resize="smooth"
      role="log"
      {...properties}
    >
      <StickToBottom.Content className="mx-auto flex w-full max-w-2xl flex-col gap-4 p-4">
        {messages.map((message) => (
          <MessageBubble message={message} key={message.id} />
        ))}
      </StickToBottom.Content>
    </StickToBottom>
  );
}

export { MessageThread };
