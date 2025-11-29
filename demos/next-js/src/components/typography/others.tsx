import type { ComponentProps } from "react";

import { Separator } from "@/components/ui/separator";

function TypographyHr(properties: ComponentProps<"hr">) {
  return <Separator orientation="horizontal" {...properties} />;
}

export { TypographyHr };
