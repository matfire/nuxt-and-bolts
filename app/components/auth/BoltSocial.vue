<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <Button
      :disabled="authStore.loading" variant="outline" class="w-full flex items-center"
      @click="authStore.signInSocial('github')"
    >
      <Icon name="devicon:github" class="w-4 h-4" mode="svg" />
      Continue with Github
    </Button>
    <Button
      :disabled="authStore.loading" variant="outline" class="w-full flex items-center"
      @click="authStore.signInSocial('google')"
    >
      <Icon name="devicon:google" class="w-4 h-4" mode="svg" />
      Continue with Google
    </Button>
  </div>
</template>
