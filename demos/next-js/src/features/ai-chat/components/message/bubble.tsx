import type { ComponentProps } from "react";
import type { UIMessage } from "ai";

import { ReasoningPart } from "@/features/ai-chat/components/message/reasoning-part";
import { MessageAvatar } from "@/features/ai-chat/components/message/avatar";
import { TextPart } from "@/features/ai-chat/components/message/text-part";
import { cn } from "@/lib/utilities";

interface MessageBubbleProperties extends ComponentProps<"div"> {
  message: UIMessage;
}

function MessageBubble({
  className,
  message,
  ...properties
}: MessageBubbleProperties) {
  return (
    <div
      className={cn(
        "group flex w-full items-end justify-end gap-2 py-4 [&>div]:max-w-[80%]",
        message.role === "user"
          ? "is-user"
          : "is-assistant flex-row-reverse justify-end",
        className
      )}
      {...properties}
    >
      <div className="flex flex-col gap-2 overflow-hidden rounded-lg px-4 py-3 text-sm text-foreground group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground">
        {message.parts.map((part, index) => {
          switch (part.type) {
            case "reasoning": {
              return <ReasoningPart key={`${message.id}-${index}`} {...part} />;
            }
            case "text": {
              return <TextPart key={`${message.id}-${index}`} {...part} />;
            }
            default: {
              return;
            }
          }
        })}
      </div>
      <MessageAvatar role={message.role} />
    </div>
  );
}

export { MessageBubble };
