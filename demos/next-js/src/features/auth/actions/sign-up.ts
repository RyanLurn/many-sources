"use server";

import { redirect } from "next/navigation";
import { APIError } from "better-auth";
import * as z from "zod";

import type { AuthLibraryError, UnexpectedError } from "@/types/errors";

import { captureEvent } from "@/features/observability/capture-event";
import { signUpValidator } from "@/features/auth/helpers/validators";
import { auth } from "@/features/auth";

async function signUp(
  _previousState: Record<string, unknown>,
  payload: FormData
) {
  const validationResult = signUpValidator.safeParse({
    password: payload.get("password"),
    email: payload.get("email"),
    name: payload.get("name"),
  });

  if (!validationResult.success) {
    const validationError = z.flattenError(validationResult.error);
    return {
      fieldErrors: validationError.fieldErrors,
      formErrors: validationError.formErrors,
    };
  }

  const validatedFields = validationResult.data;

  try {
    await auth.api.signUpEmail({
      body: {
        ...validatedFields,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      const authLibraryError: AuthLibraryError = {
        context: {
          ...error,
        },
        where: "signUp server action",
        kind: "AUTH_LIBRARY",
        what: error.message,
        level: "error",
      };
      captureEvent(authLibraryError);
    }

    const unexpectedError: UnexpectedError = {
      where: "signUp server action, after calling auth.api.signUpEmail",
      context: {
        rawError: error,
      },
      what: "Something went wrong",
      kind: "UNEXPECTED",
      level: "error",
    };
    captureEvent(unexpectedError);

    return {
      formErrors: ["Something went wrong"],
      fieldErrors: {},
    };
  }

  redirect("/protected");
}

export { signUp };
