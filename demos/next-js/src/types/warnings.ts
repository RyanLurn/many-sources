import type { WarningEvent } from "@/types/events";

interface NotAuthenticatedWarning extends WarningEvent {
  type: {
    kind: "NOT_AUTHENTICATED";
    level: "warn";
  };
}

interface NotAuthorizedWarning extends WarningEvent {
  type: {
    kind: "NOT_AUTHORIZED";
    level: "warn";
  };
}

type WarningKinds = "NOT_AUTHENTICATED" | "NOT_AUTHORIZED";

export type { NotAuthenticatedWarning, NotAuthorizedWarning, WarningKinds };
