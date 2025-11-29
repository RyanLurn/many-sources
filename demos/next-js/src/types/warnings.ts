import type { WarningEvent } from "@/types/events";

interface NotAuthenticatedWarning extends WarningEvent {
  kind: "NOT_AUTHENTICATED";
  level: "warn";
}

interface NotAuthorizedWarning extends WarningEvent {
  kind: "NOT_AUTHORIZED";
  level: "warn";
}

type WarningKinds = "NOT_AUTHENTICATED" | "NOT_AUTHORIZED";

export type { NotAuthenticatedWarning, NotAuthorizedWarning, WarningKinds };
