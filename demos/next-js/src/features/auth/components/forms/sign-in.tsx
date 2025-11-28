"use client";

import { useActionState } from "react";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { PasswordField } from "@/features/auth/components/fields/password";
import { EmailField } from "@/features/auth/components/fields/email";
import { ErrorAlert } from "@/components/utilities/error-alert";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { signIn } from "@/features/auth/actions/sign-in";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

function SignInForm() {
  const [state, formAction, isPending] = useActionState(signIn, {
    fieldErrors: {},
    formErrors: [],
  });

  const emailErrors = state.fieldErrors.email ?? [];
  const passwordErrors = state.fieldErrors.password ?? [];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.formErrors.length > 0 && (
          <ErrorAlert
            errorMessage={state.formErrors.join(". ")}
            errorTitle="Unable to sign you in"
            className="mb-6"
          />
        )}
        <form action={formAction}>
          <FieldSet>
            <FieldGroup>
              <EmailField isPending={isPending} errors={emailErrors} />
              <PasswordField errors={passwordErrors} isPending={isPending} />
            </FieldGroup>
            <FieldGroup>
              <Button disabled={isPending} className="w-full" type="submit">
                {isPending ? (
                  <>
                    <Spinner />
                    <span>Signing in...</span>
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  );
}

export { SignInForm };
