import { createGroq } from "@ai-sdk/groq";

import { serverEnvironmentVariables } from "@/lib/env/server";

const groq = createGroq({
  apiKey: serverEnvironmentVariables.GROQ_API_KEY,
});

export { groq };
