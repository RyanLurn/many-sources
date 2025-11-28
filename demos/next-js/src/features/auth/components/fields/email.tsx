import { FieldError, FieldLabel, Field } from "@/components/ui/field";
import { EMAIL_FORM_FIELD } from "@/features/auth/helpers/constants";
import { Input } from "@/components/ui/input";

function EmailField({
  isPending,
  errors,
}: {
  isPending: boolean;
  errors: string[];
}) {
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={EMAIL_FORM_FIELD}>Email</FieldLabel>
      <Input
        placeholder="example@gmail.com"
        aria-invalid={isInvalid}
        name={EMAIL_FORM_FIELD}
        id={EMAIL_FORM_FIELD}
        disabled={isPending}
        type="email"
        required
      />
      {isInvalid && (
        <FieldError errors={errors.map((error) => ({ message: error }))} />
      )}
    </Field>
  );
}

export { EmailField };
