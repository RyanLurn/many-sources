import type { TextUIPart } from "ai";

import Markdown, { type Options } from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdownComponents } from "@/components/markdown";

interface TextPartProperties
  extends Omit<Options, "remarkPlugins" | "components">,
    TextUIPart {}

function TextPart({ text, ...properties }: TextPartProperties) {
  return (
    <Markdown
      components={markdownComponents}
      remarkPlugins={[remarkGfm]}
      {...properties}
    >
      {text}
    </Markdown>
  );
}

export { TextPart };
