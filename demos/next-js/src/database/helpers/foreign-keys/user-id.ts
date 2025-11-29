import { text } from "drizzle-orm/sqlite-core";

import { userTable } from "@/database/schema/auth";

const userId = text("user_id")
  .notNull()
  .references(() => userTable.id);

export { userId };
