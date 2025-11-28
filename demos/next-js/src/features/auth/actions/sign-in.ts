"use server";

import { redirect } from "next/navigation";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import * as z from "zod";

import type { AuthLibraryError, UnexpectedError } from "@/types/errors";

import {
  PASSWORD_FORM_FIELD,
  EMAIL_FORM_FIELD,
} from "@/features/auth/helpers/constants";
import { captureEvent } from "@/features/observability/capture-event";
import { signInValidator } from "@/features/auth/helpers/validators";
import { auth } from "@/features/auth";

async function signIn(
  _previousState: Record<string, unknown>,
  payload: FormData
) {
  const validationResult = signInValidator.safeParse({
    password: payload.get(PASSWORD_FORM_FIELD),
    email: payload.get(EMAIL_FORM_FIELD),
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
    await auth.api.signInEmail({
      body: {
        ...validatedFields,
      },
      headers: await headers(),
    });
  } catch (error) {
    if (error instanceof APIError) {
      const authLibraryError: AuthLibraryError = {
        context: {
          ...error,
        },
        where: "signIn server action",
        kind: "AUTH_LIBRARY",
        what: error.message,
        level: "error",
      };
      captureEvent(authLibraryError);
    }

    const unexpectedError: UnexpectedError = {
      where: "signIn server action, after calling auth.api.signInEmail",
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

export { signIn };
