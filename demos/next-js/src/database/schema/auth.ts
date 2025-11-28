import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

import { primaryIdentifier } from "@/database/helpers/primary-identifier";
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

export { userTable };
