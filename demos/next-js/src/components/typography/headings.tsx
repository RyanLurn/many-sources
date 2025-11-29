import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function TypographyH2({
  className,
  children,
  ...properties
}: ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-extrabold tracking-tight first:mt-0",
        className
      )}
      {...properties}
    >
      {children}
    </h2>
  );
}

function TypographyH1({
  className,
  children,
  ...properties
}: ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
        className
      )}
      {...properties}
    >
      {children}
    </h1>
  );
}

function TypographyH6({
  className,
  children,
  ...properties
}: ComponentProps<"h6">) {
  return (
    <h6
      className={cn(
        "scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...properties}
    >
      {children}
    </h6>
  );
}

function TypographyH5({
  className,
  children,
  ...properties
}: ComponentProps<"h5">) {
  return (
    <h5
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...properties}
    >
      {children}
    </h5>
  );
}

function TypographyH3({
  className,
  children,
  ...properties
}: ComponentProps<"h3">) {
  return (
    <h3
      className={cn("scroll-m-20 text-2xl font-bold tracking-tight", className)}
      {...properties}
    >
      {children}
    </h3>
  );
}

function TypographyH4({
  className,
  children,
  ...properties
}: ComponentProps<"h4">) {
  return (
    <h4
      className={cn("scroll-m-20 text-xl font-bold tracking-tight", className)}
      {...properties}
    >
      {children}
    </h4>
  );
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
};
