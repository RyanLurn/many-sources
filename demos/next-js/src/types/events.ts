import type { WarningKinds } from "@/types/warnings";
import type { ErrorKinds } from "@/types/errors";

interface BaseEvent {
  type: {
    level: EventLevels;
    kind: string;
  };
  context?: Record<string, unknown>;
  where: string;
  when?: string;
  what: string;
  who?: string;
}

interface WarningEvent extends BaseEvent {
  type: {
    kind: WarningKinds;
    level: "warn";
  };
}

interface ErrorEvent extends BaseEvent {
  type: {
    kind: ErrorKinds;
    level: "error";
  };
}

type EventLevels = "error" | "debug" | "warn" | "info";

export type { WarningEvent, EventLevels, ErrorEvent, BaseEvent };
