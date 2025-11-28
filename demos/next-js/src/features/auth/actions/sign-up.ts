"use server";

import { redirect } from "next/navigation";
import { APIError } from "better-auth";
import * as z from "zod";

import type { AuthLibraryError, UnexpectedError } from "@/types/errors";

import {
  PASSWORD_FORM_FIELD,
  EMAIL_FORM_FIELD,
  NAME_FORM_FIELD,
} from "@/features/auth/helpers/constants";
import { captureEvent } from "@/features/observability/capture-event";
import { signUpValidator } from "@/features/auth/helpers/validators";
import { auth } from "@/features/auth";

async function signUp(
  _previousState: Record<string, unknown>,
  payload: FormData
) {
  const validationResult = signUpValidator.safeParse({
    password: payload.get(PASSWORD_FORM_FIELD),
    email: payload.get(EMAIL_FORM_FIELD),
    name: payload.get(NAME_FORM_FIELD),
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

      return {
        formErrors: [authLibraryError.what],
        fieldErrors: {},
      };
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
      formErrors: [unexpectedError.what],
      fieldErrors: {},
    };
  }

  redirect("/protected");
}

export { signUp };
