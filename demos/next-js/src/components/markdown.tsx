/* eslint-disable perfectionist/sort-objects */
import type { Components } from "react-markdown";

import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
} from "@/components/typography/headings";
import {
  TypographyTable,
  TypographyTd,
  TypographyTh,
  TypographyTr,
} from "@/components/typography/table";
import {
  TypographyStrong,
  TypographyDel,
  TypographyEm,
} from "@/components/typography/formatting";
import {
  TypographyBlockquote,
  TypographyP,
} from "@/components/typography/content";
import { TypographyOl, TypographyUl } from "@/components/typography/lists";
import { TypographyHr, TypographyA } from "@/components/typography/others";

const markdownComponents: Components = {
  // Headings
  h1: ({ children, ...properties }) => (
    <TypographyH1 {...properties}>{children}</TypographyH1>
  ),
  h2: ({ children, ...properties }) => (
    <TypographyH2 {...properties}>{children}</TypographyH2>
  ),
  h3: ({ children, ...properties }) => (
    <TypographyH3 {...properties}>{children}</TypographyH3>
  ),
  h4: ({ children, ...properties }) => (
    <TypographyH4 {...properties}>{children}</TypographyH4>
  ),
  h5: ({ children, ...properties }) => (
    <TypographyH5 {...properties}>{children}</TypographyH5>
  ),
  h6: ({ children, ...properties }) => (
    <TypographyH6 {...properties}>{children}</TypographyH6>
  ),
  // Content
  p: ({ children, ...properties }) => (
    <TypographyP {...properties}>{children}</TypographyP>
  ),
  blockquote: ({ children, ...properties }) => (
    <TypographyBlockquote {...properties}>{children}</TypographyBlockquote>
  ),
  // Lists
  ul: ({ children, ...properties }) => (
    <TypographyUl {...properties}>{children}</TypographyUl>
  ),
  ol: ({ children, ...properties }) => (
    <TypographyOl {...properties}>{children}</TypographyOl>
  ),
  // Formatting
  strong: ({ children, ...properties }) => (
    <TypographyStrong {...properties}>{children}</TypographyStrong>
  ),
  em: ({ children, ...properties }) => (
    <TypographyEm {...properties}>{children}</TypographyEm>
  ),
  del: ({ children, ...properties }) => (
    <TypographyDel {...properties}>{children}</TypographyDel>
  ),
  // Link
  a: ({ children, ...properties }) => (
    <TypographyA {...properties}>{children}</TypographyA>
  ),
  // Horizontal rule
  hr: ({ ...properties }) => <TypographyHr {...properties} />,
  // Table
  table: ({ children, ...properties }) => (
    <TypographyTable {...properties}>{children}</TypographyTable>
  ),
  tr: ({ children, ...properties }) => (
    <TypographyTr {...properties}>{children}</TypographyTr>
  ),
  th: ({ children, ...properties }) => (
    <TypographyTh {...properties}>{children}</TypographyTh>
  ),
  td: ({ children, ...properties }) => (
    <TypographyTd {...properties}>{children}</TypographyTd>
  ),
};

export { markdownComponents };
