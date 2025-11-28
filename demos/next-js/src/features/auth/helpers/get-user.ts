import { type User, APIError } from "better-auth";
import { type Result, err, ok } from "neverthrow";
import { headers } from "next/headers";

import type { AuthLibraryError, UnexpectedError } from "@/types/errors";
import type { NotAuthenticatedWarning } from "@/types/warnings";

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
      console.warn(notAuthenticatedWarning);
      return err(notAuthenticatedWarning);
    }

    return ok(getSessionResult.user);
  } catch (error) {
    if (error instanceof APIError) {
      const authLibraryError: AuthLibraryError = {
        context: {
          ...error,
        },
        what: "Failed to get user",
        where: "getUser function",
        kind: "AUTH_LIBRARY",
        level: "error",
      };
      console.error(authLibraryError);
      return err(authLibraryError);
    }

    const unexpectedError: UnexpectedError = {
      context: {
        rawError: error,
      },
      what: "Failed to get user",
      where: "getUser function",
      kind: "UNEXPECTED",
      level: "error",
    };
    console.error(unexpectedError);
    return err(unexpectedError);
  }
}

export { getUser };
