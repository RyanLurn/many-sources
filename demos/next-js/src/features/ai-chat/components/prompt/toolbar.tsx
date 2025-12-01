import type { ComponentProps } from "react";
import type { ChatStatus } from "ai";

import { SendPromptButton } from "@/features/ai-chat/components/prompt/send-button";
import { PromptTools } from "@/features/ai-chat/components/prompt/tools";
import { cn } from "@/lib/utilities";

interface PromptToolbarProperties extends ComponentProps<"div"> {
  chatStatus: ChatStatus;
  disabled: boolean;
}

function PromptToolbar({
  chatStatus,
  className,
  disabled,
  ...properties
}: PromptToolbarProperties) {
  return (
    <div
      className={cn("flex items-center justify-between p-1", className)}
      {...properties}
    >
      <PromptTools />
      <SendPromptButton chatStatus={chatStatus} disabled={disabled} />
    </div>
  );
}

export { PromptToolbar };
