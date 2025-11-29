import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utilities";

function TypographyA({
  className,
  children,
  ...properties
}: ComponentProps<"a">) {
  return (
    <a className={cn("cursor-pointer underline", className)} {...properties}>
      {children}
    </a>
  );
}

function TypographyHr(properties: ComponentProps<"hr">) {
  return <Separator orientation="horizontal" {...properties} />;
}

export { TypographyHr, TypographyA };
