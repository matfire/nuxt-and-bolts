<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import z from "zod";

const authStore = useAuthStore();

const schema = toTypedSchema(
  z.object({
    name: z.string(),
  }),
);

const form = useForm({
  validationSchema: schema,
  initialValues: {
    name: authStore.user?.name ?? "John Doe",
  },
});

const onSubmit = form.handleSubmit(async (data) => {
  const toastId = toast.loading("updating profile...");
  await authStore.updateProfile(data);
  toast.success("profile updated!", { id: toastId });
});
</script>

<template>
  <div class="w-full flex flex-col px-4">
    <div>
      <h1>User Profile</h1>
    </div>
    <Card>
      <CardContent>
        <form @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <div class="grid gap-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    v-bind="componentField"
                    autocomplete="name"
                    type="text"
                    required
                  />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          </FormField>
          <Button variant="secondary">
            Update Profile
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</template>
