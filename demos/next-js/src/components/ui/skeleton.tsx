import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function Skeleton({ className, ...properties }: ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-accent", className)}
      data-slot="skeleton"
      {...properties}
    />
  );
}

export { Skeleton };
