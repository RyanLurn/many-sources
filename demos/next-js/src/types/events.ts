import type { WarningKinds } from "@/types/warnings";
import type { ErrorKinds } from "@/types/errors";

interface BaseEvent {
  context?: Record<string, unknown>;
  level: EventLevels;
  kind?: string;
  where: string;
  when?: string;
  what: string;
  who?: string;
}

interface WarningEvent extends BaseEvent {
  kind: WarningKinds;
  level: "warn";
}

interface ErrorEvent extends BaseEvent {
  kind: ErrorKinds;
  level: "error";
}

type EventLevels = "error" | "debug" | "warn" | "info";

export type { WarningEvent, EventLevels, ErrorEvent, BaseEvent };
