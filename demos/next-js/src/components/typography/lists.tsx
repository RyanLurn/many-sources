import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function TypographyOl({
  className,
  children,
  ...properties
}: ComponentProps<"ol">) {
  return (
    <ol
      className={cn("my-6 ml-6 list-decimal [&>li]:mt-2", className)}
      {...properties}
    >
      {children}
    </ol>
  );
}

function TypographyUl({
  className,
  children,
  ...properties
}: ComponentProps<"ul">) {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
      {...properties}
    >
      {children}
    </ul>
  );
}

export { TypographyOl, TypographyUl };
