import { toast } from "vue-sonner";
import { authClient } from "~/lib/auth-client";

export const useAuthStore = defineStore("authStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(
    null,
  );
  const clientLoading = ref(false);

  async function init() {
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }
  const user = computed(() => session.value?.data?.user);
  const loading = computed(
    () => session.value?.isPending || clientLoading.value,
  );
  const signOut = async () => {
    clientLoading.value = true;
    await authClient.signOut();
    await navigateTo("/login");
    clientLoading.value = false;
    toast("see you next time!");
  };
  const signIn = async (data: { email: string; password: string }) => {
    await authClient.signIn.email(data);
  };

  const signUp = async (data: {
    email: string;
    password: string;
    name: string;
  }) => {
    await authClient.signUp.email(data);
  };

  const signInSocial = async (name: "google" | "github") => {
    clientLoading.value = true;
    await authClient.signIn.social({ provider: name, callbackURL: "/app" });
  };

  const updateProfile = async (data: { name: string }) => {
    await authClient.updateUser(data);
  };

  const sendResetPassword = async (data: { email: string }) => {
    await authClient.requestPasswordReset({
      email: data.email,
      redirectTo: "/reset-password",
    });
  };

  const resetPassword = async (data: { password: string; token: string }) => {
    await authClient.resetPassword({
      newPassword: data.password,
      token: data.token,
    });
  };

  return {
    loading,
    user,
    signOut,
    init,
    signInSocial,
    signIn,
    signUp,
    updateProfile,
    sendResetPassword,
    resetPassword,
  };
});
