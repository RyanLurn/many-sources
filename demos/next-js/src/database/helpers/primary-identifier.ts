import { text } from "drizzle-orm/sqlite-core";

import { generateUuid } from "@/lib/utilities";

const primaryIdentifier = text("id")
  .primaryKey()
  .$default(() => generateUuid());

export { primaryIdentifier };
