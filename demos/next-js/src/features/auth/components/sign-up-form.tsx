"use client";

import { useActionState } from "react";

import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import {
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldSet,
  Field,
} from "@/components/ui/field";
import { ErrorAlert } from "@/components/utilities/error-alert";
import { signUp } from "@/features/auth/actions/sign-up";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SignUpForm() {
  const [state, formAction, isPending] = useActionState(signUp, {
    fieldErrors: {},
    formErrors: [],
  });

  const nameErrors = state.fieldErrors.name ?? [];
  const emailErrors = state.fieldErrors.email ?? [];
  const passwordErrors = state.fieldErrors.password ?? [];

  const isNameInvalid = nameErrors.length > 0;
  const isEmailInvalid = emailErrors.length > 0;
  const isPasswordInvalid = passwordErrors.length > 0;

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
              <Field data-invalid={isNameInvalid}>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  placeholder="Anders Hejlsberg"
                  aria-invalid={isNameInvalid}
                  disabled={isPending}
                  name="name"
                  type="text"
                  id="name"
                  required
                />
                {isNameInvalid && (
                  <FieldError
                    errors={nameErrors.map((error) => ({ message: error }))}
                  />
                )}
              </Field>
              <Field data-invalid={isEmailInvalid}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  placeholder="example@gmail.com"
                  aria-invalid={isEmailInvalid}
                  disabled={isPending}
                  name="email"
                  type="email"
                  id="email"
                  required
                />
                {isEmailInvalid && (
                  <FieldError
                    errors={emailErrors.map((error) => ({ message: error }))}
                  />
                )}
              </Field>
              <Field data-invalid={isPasswordInvalid}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  aria-invalid={isPasswordInvalid}
                  disabled={isPending}
                  name="password"
                  type="password"
                  id="password"
                  required
                />
                {isPasswordInvalid && (
                  <FieldError
                    errors={passwordErrors.map((error) => ({ message: error }))}
                  />
                )}
              </Field>
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
