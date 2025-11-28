"use client";

import { useActionState } from "react";

import {
  PASSWORD_FORM_FIELD,
  EMAIL_FORM_FIELD,
  NAME_FORM_FIELD,
} from "@/features/auth/helpers/constants";
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
                <FieldLabel htmlFor={NAME_FORM_FIELD}>Full Name</FieldLabel>
                <Input
                  placeholder="Anders Hejlsberg"
                  aria-invalid={isNameInvalid}
                  name={NAME_FORM_FIELD}
                  disabled={isPending}
                  id={NAME_FORM_FIELD}
                  type="text"
                  required
                />
                {isNameInvalid && (
                  <FieldError
                    errors={nameErrors.map((error) => ({ message: error }))}
                  />
                )}
              </Field>
              <Field data-invalid={isEmailInvalid}>
                <FieldLabel htmlFor={EMAIL_FORM_FIELD}>Email</FieldLabel>
                <Input
                  placeholder="example@gmail.com"
                  aria-invalid={isEmailInvalid}
                  name={EMAIL_FORM_FIELD}
                  id={EMAIL_FORM_FIELD}
                  disabled={isPending}
                  type="email"
                  required
                />
                {isEmailInvalid && (
                  <FieldError
                    errors={emailErrors.map((error) => ({ message: error }))}
                  />
                )}
              </Field>
              <Field data-invalid={isPasswordInvalid}>
                <FieldLabel htmlFor={PASSWORD_FORM_FIELD}>Password</FieldLabel>
                <Input
                  aria-invalid={isPasswordInvalid}
                  name={PASSWORD_FORM_FIELD}
                  id={PASSWORD_FORM_FIELD}
                  disabled={isPending}
                  type="password"
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
