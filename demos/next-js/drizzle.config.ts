import { defineConfig } from "drizzle-kit";

import { serverEnvironmentVariable } from "@/lib/env/server";

export default defineConfig({
  dbCredentials: {
    url: serverEnvironmentVariable.SQLITE_FILE_PATH,
  },
  out: "./src/database/migrations",
  schema: "./src/database/schema",
  dialect: "sqlite",
});
