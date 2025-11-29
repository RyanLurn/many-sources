import { FieldError, FieldLabel, Field } from "@/components/ui/field";
import { NAME_FORM_FIELD } from "@/features/auth/helpers/constants";
import { Input } from "@/components/ui/input";

function NameField({
  isPending,
  errors,
}: {
  isPending: boolean;
  errors: string[];
}) {
  const isInvalid = errors.length > 0;

  return (
    <Field data-invalid={isInvalid}>
      <FieldLabel htmlFor={NAME_FORM_FIELD}>Full Name</FieldLabel>
      <Input
        placeholder="Anders Hejlsberg"
        aria-invalid={isInvalid}
        name={NAME_FORM_FIELD}
        disabled={isPending}
        id={NAME_FORM_FIELD}
        type="text"
        required
      />
      {isInvalid && (
        <FieldError errors={errors.map((error) => ({ message: error }))} />
      )}
    </Field>
  );
}

export { NameField };
