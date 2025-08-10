import { drizzle } from "drizzle-orm/better-sqlite3";
import { env } from "../env";
import * as schema from "./schema";

const db
  = env.NODE_ENV === "test"
    ? drizzle({ connection: ":memory", schema })
    : drizzle({ connection: env.DATABASE_URL, schema });

export { db };
