import type { ErrorEvent } from "@/types/events";

interface AuthLibraryError extends ErrorEvent {
  type: {
    kind: "AUTH_LIBRARY";
    level: "error";
  };
}

interface UnexpectedError extends ErrorEvent {
  type: {
    kind: "UNEXPECTED";
    level: "error";
  };
}

type ErrorKinds = "AUTH_LIBRARY" | "UNEXPECTED";

export type { AuthLibraryError, UnexpectedError, ErrorKinds };
