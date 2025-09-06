import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin } from "better-auth/plugins";
import { db } from "./db"; // your drizzle instance
import { sendEmail } from "./emails";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  plugins: [
    admin(),
  ],
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
  databaseHooks: {
    user: {
      create: {
        before: async (user, ctx) => {
          if (!ctx || !ctx.context || !ctx.context.adapter) {
            return { data: user };
          }
          const userCount = await ctx.context.adapter.count({ model: "user" });
          if (userCount === 0) {
            // first user is admin by default
            return { data: { ...user, role: "admin" } };
          }
          return { data: user };
        },
      },
    },
  },
});
