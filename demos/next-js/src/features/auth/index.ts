import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { betterAuth } from "better-auth";

import {
  verificationTable,
  accountTable,
  sessionTable,
  userTable,
} from "@/database/schema/auth";
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
  advanced: {
    database: {
      generateId: false,
    },
  },
  secret: serverEnvironmentVariables.BETTER_AUTH_SECRET,
  baseURL: serverEnvironmentVariables.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});

export { auth };
