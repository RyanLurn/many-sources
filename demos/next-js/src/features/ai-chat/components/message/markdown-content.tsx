import type { Options } from "react-markdown";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { markdownComponents } from "@/components/markdown";

interface MarkdownContentProperties
  extends Omit<Options, "remarkPlugins" | "components"> {
  content: string;
}

function MarkdownContent({
  content,
  ...properties
}: MarkdownContentProperties) {
  return (
    <Markdown
      components={markdownComponents}
      remarkPlugins={[remarkGfm]}
      {...properties}
    >
      {content}
    </Markdown>
  );
}

export { MarkdownContent };
export type { MarkdownContentProperties };
