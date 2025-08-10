<script lang="ts" setup>
import "vue-sonner/style.css";

const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <BoltHeader />
    <main class="w-full h-full flex-1 p-4">
      <slot />
    </main>
    <BoltFooter />
    <Toaster />
  </div>
</template>
