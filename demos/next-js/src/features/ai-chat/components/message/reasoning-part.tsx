import type { ReasoningUIPart } from "ai";

import { ChevronsUpDown } from "lucide-react";

import {
  CollapsibleContent,
  CollapsibleTrigger,
  Collapsible,
} from "@/components/ui/collapsible";
import { MarkdownContent } from "@/features/ai-chat/components/message/markdown-content";
import { Button } from "@/components/ui/button";

function ReasoningPartTrigger({ state }: Pick<ReasoningUIPart, "state">) {
  return (
    <div className="flex w-full items-center justify-between">
      <p>{state === "done" ? "Reasoning" : "Thinking..."}</p>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <ChevronsUpDown />
        </Button>
      </CollapsibleTrigger>
    </div>
  );
}

function ReasoningPart({ state, text }: ReasoningUIPart) {
  return (
    <Collapsible>
      <ReasoningPartTrigger state={state} />
      <CollapsibleContent className="text-muted-foreground">
        <MarkdownContent content={text} />
      </CollapsibleContent>
    </Collapsible>
  );
}

export { ReasoningPart };
