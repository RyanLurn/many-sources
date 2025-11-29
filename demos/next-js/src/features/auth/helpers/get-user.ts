import { type User, APIError } from "better-auth";
import { type Result, err, ok } from "neverthrow";
import { headers } from "next/headers";

import type { AuthLibraryError, UnexpectedError } from "@/types/errors";
import type { NotAuthenticatedWarning } from "@/types/warnings";

import { captureEvent } from "@/features/observability/capture-event";
import { auth } from "@/features/auth";

async function getUser(): Promise<
  Result<User, NotAuthenticatedWarning | AuthLibraryError | UnexpectedError>
> {
  const requestHeaders = await headers();

  try {
    const getSessionResult = await auth.api.getSession({
      headers: requestHeaders,
    });

    if (!getSessionResult) {
      const notAuthenticatedWarning: NotAuthenticatedWarning = {
        what: "Request is not authenticated",
        kind: "NOT_AUTHENTICATED",
        where: "getUser function",
        level: "warn",
      };
      captureEvent(notAuthenticatedWarning);
      return err(notAuthenticatedWarning);
    }

    return ok(getSessionResult.user);
  } catch (error) {
    if (error instanceof APIError) {
      const authLibraryError: AuthLibraryError = {
        context: {
          ...error,
        },
        where: "getUser function",
        kind: "AUTH_LIBRARY",
        what: error.message,
        level: "error",
      };
      captureEvent(authLibraryError);
      return err(authLibraryError);
    }

    const unexpectedError: UnexpectedError = {
      context: {
        rawError: error,
      },
      what: "Something went wrong",
      where: "getUser function",
      kind: "UNEXPECTED",
      level: "error",
    };
    captureEvent(unexpectedError);
    return err(unexpectedError);
  }
}

export { getUser };
