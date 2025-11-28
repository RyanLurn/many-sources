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
import { NameField } from "@/features/auth/components/fields/name";
import { ErrorAlert } from "@/components/utilities/error-alert";
import { FieldGroup, FieldSet } from "@/components/ui/field";
import { signUp } from "@/features/auth/actions/sign-up";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUp, {
    fieldErrors: {},
    formErrors: [],
  });

  const nameErrors = state.fieldErrors.name ?? [];
  const emailErrors = state.fieldErrors.email ?? [];
  const passwordErrors = state.fieldErrors.password ?? [];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Create your account</CardTitle>
        <CardDescription>
          Enter the information below to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.formErrors.length > 0 && (
          <ErrorAlert
            errorMessage={state.formErrors.join(". ")}
            errorTitle="Unable to create your account"
            className="mb-6"
          />
        )}
        <form action={formAction}>
          <FieldSet>
            <FieldGroup>
              <NameField isPending={isPending} errors={nameErrors} />
              <EmailField isPending={isPending} errors={emailErrors} />
              <PasswordField errors={passwordErrors} isPending={isPending} />
            </FieldGroup>
            <FieldGroup>
              <Button disabled={isPending} className="w-full" type="submit">
                {isPending ? (
                  <>
                    <Spinner />
                    <span>Signing up...</span>
                  </>
                ) : (
                  "Create account"
                )}
              </Button>
            </FieldGroup>
          </FieldSet>
        </form>
      </CardContent>
    </Card>
  );
}

export { SignUpForm };
