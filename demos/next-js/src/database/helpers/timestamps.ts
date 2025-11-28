import { integer } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

const jsDateNowInSqlite = sql`(unixepoch('now', 'subsec') * 1000)`;

const timestamps = {
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(jsDateNowInSqlite)
    .$onUpdate(() => new Date()),

  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(jsDateNowInSqlite),
};

export { jsDateNowInSqlite, timestamps };
