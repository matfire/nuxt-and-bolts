import { defineConfig } from "drizzle-kit";
import { env } from "./app/lib/env";
import "dotenv/config";

export default defineConfig({
  out: "./app/lib/db/migrations",
  schema: "./app/lib/db/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
