import type { User } from "better-auth";
import { auth } from "~/lib/auth";

const GUEST_ROUTES = ["/login", "/register", "/forgot-password", "/reset-password"];

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  });
  event.context.user = session?.user as unknown as User;
  if (!session?.user) {
    if (event.path.includes("app")) {
      await sendRedirect(event, "/", 302);
    }
  }
  else {
    if (GUEST_ROUTES.includes(event.path)) {
      await sendRedirect(event, "/app", 302);
    }
  }
});
