import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function TypographyBlockquote({
  className,
  children,
  ...properties
}: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...properties}
    >
      {children}
    </blockquote>
  );
}

function TypographyP({
  className,
  children,
  ...properties
}: ComponentProps<"p">) {
  return (
    <p className={cn("leading-7 not-first:mt-6", className)} {...properties}>
      {children}
    </p>
  );
}

export { TypographyBlockquote, TypographyP };
