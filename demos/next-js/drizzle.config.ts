import { defineConfig } from "drizzle-kit";

import { serverEnvironmentVariables } from "@/lib/env/server";

export default defineConfig({
  dbCredentials: {
    url: serverEnvironmentVariables.SQLITE_FILE_PATH,
  },
  out: "./src/database/migrations",
  schema: "./src/database/schema",
  dialect: "sqlite",
});
