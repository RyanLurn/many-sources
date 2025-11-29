"use client";

import type { ComponentProps } from "react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

function CollapsibleTrigger({
  ...properties
}: ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...properties}
    />
  );
}

function CollapsibleContent({
  ...properties
}: ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...properties}
    />
  );
}

function Collapsible({
  ...properties
}: ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...properties} />;
}

export { CollapsibleTrigger, CollapsibleContent, Collapsible };
