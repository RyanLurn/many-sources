import * as z from "zod";

import {
  MAXIMUM_PASSWORD_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
} from "@/features/auth/helpers/constants";

const nameValidator = z
  .string()
  .min(3, "Name must be at least 3 characters long");

const emailValidator = z.email("Invalid email").toLowerCase().trim();

const passwordValidator = z
  .string()
  .min(
    MINIMUM_PASSWORD_LENGTH,
    `Password must be at least ${MINIMUM_PASSWORD_LENGTH} characters long`
  )
  .max(
    MAXIMUM_PASSWORD_LENGTH,
    `Password must not exceed ${MAXIMUM_PASSWORD_LENGTH} characters`
  );

const signUpValidator = z.object({
  password: passwordValidator,
  email: emailValidator,
  name: nameValidator,
});

const signInValidator = z.object({
  password: passwordValidator,
  email: emailValidator,
});

export {
  passwordValidator,
  signUpValidator,
  signInValidator,
  emailValidator,
  nameValidator,
};
