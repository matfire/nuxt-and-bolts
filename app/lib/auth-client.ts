import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/vue";

export const authClient = createAuthClient({
  plugins: [
    adminClient(),
  ],
  /** The base URL of the server (optional if you're using the same domain) */
});
