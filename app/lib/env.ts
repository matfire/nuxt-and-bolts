import { z } from "zod/v4";

const EnvSchema = z.object({
  NODE_ENV: z
    .literal(["production", "development", "test"])
    .default("development"),
  DATABASE_URL: z.string(),
  DATABASE_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  APP_NAME: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  SMTP_FROM: z.string(),
});
// eslint-disable-next-line node/no-process-env
export const env = EnvSchema.parse(process.env);
