import type { ComponentProps, KeyboardEvent } from "react";

import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utilities";

interface PromptEditorProperties extends ComponentProps<typeof Textarea> {
  onPromptChange: (prompt: string) => void;
  prompt: string;
}

function PromptEditor({
  onPromptChange,
  className,
  disabled,
  prompt,
  ...properties
}: PromptEditorProperties) {
  return (
    <Textarea
      className={cn(
        "w-full resize-none rounded-none border-none p-3 shadow-none ring-0 outline-none",
        "field-sizing-content max-h-[6lh] bg-transparent dark:bg-transparent",
        "focus-visible:ring-0",
        className
      )}
      placeholder={disabled ? "Please wait..." : "Type your message here..."}
      onChange={(event) => onPromptChange(event.target.value)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      value={prompt}
      name="prompt"
      {...properties}
    />
  );
}

function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
  if (event.key === "Enter") {
    if (event.shiftKey) {
      return;
    }

    event.preventDefault();
    const form = event.currentTarget.form;
    if (form) {
      form.requestSubmit();
    }
  }
}

export { PromptEditor };
