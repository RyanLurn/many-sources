"use server";

import type { Route } from "next";

import { redirect } from "next/navigation";
import z from "zod";

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
        callbackURL: "/protected" as Route,
      },
    });
  } catch (error) {
    console.error("Sign up error:", error);
    return {
      formErrors: ["Something went wrong"],
      fieldErrors: {},
    };
  }

  redirect("/protected");
}

export { signUp };
