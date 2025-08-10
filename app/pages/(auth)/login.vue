<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";

const config = useRuntimeConfig();
const authStore = useAuthStore();

const schema = toTypedSchema(z.object({
  email: z.string().email(),
  password: z.string(),
}));

const form = useForm({
  validationSchema: schema,
});

const onSubmit = form.handleSubmit(async (data) => {
  try {
    await authStore.signIn(data);
    navigateTo("/app");
  }
  catch (e) {
    console.error(e);
  }
});
</script>

<template>
  <div class="flex min-h-full flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div class="w-full max-w-sm">
      <div class="flex flex-col gap-6">
        <form @submit="onSubmit">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-2">
              <h1 class="text-xl font-bold">
                Welcome to {{ config.public.appName }}
              </h1>
              <div class="text-center text-sm">
                Don't have an account?
                <NuxtLink to="/register" class="underline underline-offset-4">
                  Sign up
                </NuxtLink>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <AuthBoltInput
                name="email" type="email" autocomplete="email" placeholder="m@example.com"
                label="Email"
              />
              <AuthBoltInput
                name="password" type="password" autocomplete="current-password"
                label="Password"
              />
              <div class="w-full flex justify-end text-sm">
                <NuxtLink href="/forgot-password">
                  Forgot your password?
                </NuxtLink>
              </div>
              <Button :disabled="authStore.loading" type="submit" class="w-full">
                Login
              </Button>
            </div>
            <div
              class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
            >
              <span class="relative z-10 bg-background px-2 text-muted-foreground">
                Or
              </span>
            </div>
            <AuthBoltSocial />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
