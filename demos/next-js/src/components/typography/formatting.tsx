import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function TypographyStrong({
  className,
  children,
  ...properties
}: ComponentProps<"strong">) {
  return (
    <strong className={cn("font-bold", className)} {...properties}>
      {children}
    </strong>
  );
}

function TypographyDel({
  className,
  children,
  ...properties
}: ComponentProps<"del">) {
  return (
    <del className={cn("line-through", className)} {...properties}>
      {children}
    </del>
  );
}

function TypographyEm({
  className,
  children,
  ...properties
}: ComponentProps<"em">) {
  return (
    <em className={cn("italic", className)} {...properties}>
      {children}
    </em>
  );
}

export { TypographyStrong, TypographyDel, TypographyEm };
