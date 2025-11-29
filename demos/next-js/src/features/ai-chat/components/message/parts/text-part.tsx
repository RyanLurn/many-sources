import type { TextUIPart } from "ai";

import type { MarkdownContentProperties } from "@/features/ai-chat/components/message/parts/markdown-content";

import { MarkdownContent } from "@/features/ai-chat/components/message/parts/markdown-content";

interface TextPartProperties
  extends Omit<MarkdownContentProperties, "content">,
    TextUIPart {}

function TextPart({ text, ...properties }: TextPartProperties) {
  return <MarkdownContent content={text} {...properties} />;
}

export { TextPart };
