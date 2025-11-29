import type { ComponentProps } from "react";

import { cn } from "@/lib/utilities";

function TypographyTh({
  className,
  children,
  ...properties
}: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...properties}
    >
      {children}
    </th>
  );
}

function TypographyTd({
  className,
  children,
  ...properties
}: ComponentProps<"td">) {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right",
        className
      )}
      {...properties}
    >
      {children}
    </td>
  );
}

function TypographyTable({
  className,
  children,
  ...properties
}: ComponentProps<"table">) {
  return (
    <table
      className={cn("table-auto md:table-fixed", className)}
      {...properties}
    >
      {children}
    </table>
  );
}

function TypographyTr({
  className,
  children,
  ...properties
}: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted", className)}
      {...properties}
    >
      {children}
    </tr>
  );
}

export { TypographyTable, TypographyTr, TypographyTh, TypographyTd };
