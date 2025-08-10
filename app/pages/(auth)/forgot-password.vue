<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { z } from "zod";

const config = useRuntimeConfig();
const authStore = useAuthStore();

const schema = toTypedSchema(z.object({
  email: z.string().email(),
}));

const form = useForm({
  validationSchema: schema,
});

const state = ref<"input" | "wait">("input");

const onSubmit = form.handleSubmit(async (data) => {
  try {
    await authStore.sendResetPassword(data);
    state.value = "wait";
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
        <form v-if="state === 'input'" @submit="onSubmit">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-2">
              <h1 class="text-xl font-bold">
                Welcome to {{ config.public.appName }}
              </h1>
              <div class="text-center text-sm">
                <p>Fill out this form to receive an email to reset your password</p>
              </div>
            </div>
            <div class="flex flex-col gap-6">
              <AuthBoltInput
                name="email" type="email" autocomplete="email" placeholder="m@example.com"
                label="Email"
              />
              <Button :disabled="authStore.loading" type="submit" class="w-full">
                Reset Password
              </Button>
            </div>
          </div>
        </form>
        <div v-else>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center gap-2">
              <h1 class="text-xl font-bold">
                Welcome to {{ config.public.appName }}
              </h1>
              <div class="text-center text-sm">
                <p>You should receive an email to reset your password. Follow the link there!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
