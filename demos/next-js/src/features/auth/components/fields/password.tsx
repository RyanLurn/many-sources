import { PASSWORD_FORM_FIELD } from "@/features/auth/helpers/constants";
import { FieldError, FieldLabel, Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function PasswordField({
  isPending,
  errors,
}: {
  isPending: boolean;
  errors: string[];
}) {
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={PASSWORD_FORM_FIELD}>Password</FieldLabel>
      <Input
        name={PASSWORD_FORM_FIELD}
        aria-invalid={isInvalid}
        id={PASSWORD_FORM_FIELD}
        disabled={isPending}
        type="password"
        required
      />
      {isInvalid && (
        <FieldError errors={errors.map((error) => ({ message: error }))} />
      )}
    </Field>
  );
}

export { PasswordField };
