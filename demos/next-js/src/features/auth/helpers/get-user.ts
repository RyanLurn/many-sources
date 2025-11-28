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
        type: {
          kind: "NOT_AUTHENTICATED",
          level: "warn",
        },
        what: "Request is not authenticated",
        where: "getUser function",
      };
      console.warn(notAuthenticatedWarning);
      return err(notAuthenticatedWarning);
    }

    return ok(getSessionResult.user);
  } catch (error) {
    if (error instanceof APIError) {
      const authLibraryError: AuthLibraryError = {
        type: {
          kind: "AUTH_LIBRARY",
          level: "error",
        },
        context: {
          ...error,
        },
        what: "Failed to get user",
        where: "getUser function",
      };
      console.error(authLibraryError);
      return err(authLibraryError);
    }

    const unexpectedError: UnexpectedError = {
      type: {
        kind: "UNEXPECTED",
        level: "error",
      },
      context: {
        rawError: error,
      },
      what: "Failed to get user",
      where: "getUser function",
    };
    console.error(unexpectedError);
    return err(unexpectedError);
  }
}

export { getUser };
