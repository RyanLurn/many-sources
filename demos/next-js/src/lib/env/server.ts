import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod";

const serverEnvironmentVariable = createEnv({
  server: {
    SQLITE_FILE_PATH: z.string().min(1),
  },
  experimental__runtimeEnv: process.env,
});

export { serverEnvironmentVariable };
