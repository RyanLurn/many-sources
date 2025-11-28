"use server";

import type { Route } from "next";

import { signUpValidator } from "@/features/auth/helpers/validators";
import { auth } from "@/features/auth";

async function signUp(payload: FormData) {
  const validationResult = signUpValidator.safeParse({
    password: payload.get("password"),
    email: payload.get("email"),
    name: payload.get("name"),
  });

  if (!validationResult.success) {
    const validationErrors = validationResult.error.issues.map(
      (issue) => issue.message
    );
    return {
      errors: validationErrors,
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
      errors: ["Something went wrong"],
    };
  }
}

export { signUp };
