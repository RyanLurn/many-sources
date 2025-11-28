import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

import { primaryIdentifier } from "@/database/helpers/primary-identifier";
import { userId } from "@/database/helpers/foreign-keys/user-id";
import { timestamps } from "@/database/helpers/timestamps";

const userTable = sqliteTable("users", {
  emailVerified: integer("email_verified", { mode: "boolean" })
    .notNull()
    .default(false),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  id: primaryIdentifier,
  image: text("image"),
  ...timestamps,
});

const sessionTable = sqliteTable("sessions", {
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  id: primaryIdentifier,
  userId,
  ...timestamps,
});

const accountTable = sqliteTable("accounts", {
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp",
  }),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp",
  }),
  providerId: text("provider_id").notNull(),
  accountId: text("account_id").notNull(),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  password: text("password"),
  idToken: text("id_token"),
  id: primaryIdentifier,
  scope: text("scope"),
  userId,
  ...timestamps,
});

const verificationTable = sqliteTable("verifications", {
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  id: primaryIdentifier,
  ...timestamps,
});

export { verificationTable, sessionTable, accountTable, userTable };
