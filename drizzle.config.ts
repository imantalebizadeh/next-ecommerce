import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

import { env } from "@/lib/env";

loadEnvConfig(process.cwd());

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./src/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
