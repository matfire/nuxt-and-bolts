<script setup lang="ts">
interface Props {
  label: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  autocomplete: string;
  name: string;
}
const props = defineProps<Props>();
</script>

<template>
  <FormField v-slot="{ componentField }" :name="props.name">
    <FormItem>
      <div class="grid gap-2">
        <FormLabel>{{ props.label }}</FormLabel>
        <FormControl>
          <Input
            v-bind="componentField" :autocomplete="props.autocomplete" :type="props.type"
            :placeholder="props.placeholder" required
          />
        </FormControl>
        <FormMessage />
      </div>
    </FormItem>
  </FormField>
</template>
