"use client";

import type { ComponentProps } from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utilities";

function AvatarFallback({
  className,
  ...properties
}: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "flex size-full items-center justify-center rounded-full bg-muted",
        className
      )}
      data-slot="avatar-fallback"
      {...properties}
    />
  );
}

function Avatar({
  className,
  ...properties
}: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      data-slot="avatar"
      {...properties}
    />
  );
}

function AvatarImage({
  className,
  ...properties
}: ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square size-full", className)}
      data-slot="avatar-image"
      {...properties}
    />
  );
}

export { AvatarFallback, AvatarImage, Avatar };
