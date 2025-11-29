import { drizzle } from "drizzle-orm/libsql";

import { serverEnvironmentVariables } from "@/lib/env/server";
import * as authSchema from "@/database/schema/auth";

const database = drizzle({
  connection: {
    url: serverEnvironmentVariables.SQLITE_FILE_PATH,
  },
  schema: { ...authSchema },
});

export { database };
