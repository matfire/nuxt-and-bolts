import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db"; // your drizzle instance
import { sendEmail } from "./emails";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    async sendResetPassword(data) {
      await sendEmail(
        "ResetPassword",
        {
          url: data.url,
          name: data.user.name,
        },
        {
          to: data.user.email,
          subject: "Password Reset Request",
        },
      );
    },
  },
});
