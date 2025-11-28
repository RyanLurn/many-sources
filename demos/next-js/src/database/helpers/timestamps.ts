import { integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const jsDateInSqlite = sql`(unixepoch('now', 'subsec') * 1000)`;

const timestamps = {
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(jsDateInSqlite)
    .$onUpdate(() => new Date()),

  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(jsDateInSqlite),
};

export { jsDateInSqlite, timestamps };
