import type { ComponentProps } from "react";
import type { ChatStatus } from "ai";

import { PromptToolbar } from "@/features/ai-chat/components/prompt/toolbar";
import { PromptEditor } from "@/features/ai-chat/components/prompt/editor";
import { cn } from "@/lib/utilities";

interface PromptBoxProperties extends ComponentProps<"form"> {
  onPromptChange: (prompt: string) => void;
  chatStatus: ChatStatus;
  disabled: boolean;
  prompt: string;
}

function PromptBox({
  onPromptChange,
  chatStatus,
  className,
  disabled,
  prompt,
  ...properties
}: PromptBoxProperties) {
  return (
    <form
      className={cn(
        "mx-auto flex w-full max-w-2xl flex-col divide-y-2 overflow-hidden rounded-xl border bg-background shadow-sm",
        className
      )}
      {...properties}
    >
      <PromptEditor
        onPromptChange={onPromptChange}
        disabled={disabled}
        prompt={prompt}
      />
      <PromptToolbar disabled={disabled || !prompt} chatStatus={chatStatus} />
    </form>
  );
}

export { PromptBox };
