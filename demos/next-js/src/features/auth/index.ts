import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";

import {
  verificationTable,
  accountTable,
  sessionTable,
  userTable,
} from "@/database/schema/auth";
import {
  MAXIMUM_PASSWORD_LENGTH,
  MINIMUM_PASSWORD_LENGTH,
} from "@/features/auth/helpers/constants";
import { serverEnvironmentVariables } from "@/lib/env/server";
import { database } from "@/database/connection";

const auth = betterAuth({
  database: drizzleAdapter(database, {
    schema: {
      verification: verificationTable,
      session: sessionTable,
      account: accountTable,
      user: userTable,
    },
    provider: "sqlite",
  }),
  emailAndPassword: {
    minPasswordLength: MINIMUM_PASSWORD_LENGTH,
    maxPasswordLength: MAXIMUM_PASSWORD_LENGTH,
    enabled: true,
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  secret: serverEnvironmentVariables.BETTER_AUTH_SECRET,
  baseURL: serverEnvironmentVariables.BETTER_AUTH_URL,
  plugins: [nextCookies()],
});

export { auth };
