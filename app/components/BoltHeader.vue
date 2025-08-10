<script setup lang="ts">
import AvatarImage from "./ui/avatar/AvatarImage.vue";

const authStore = useAuthStore();
const appConfig = useRuntimeConfig();
</script>

<template>
  <header class="sticky top-0 z-30 flex items-center justify-between p-4 backdrop-blur-md bg-white/70 transition-all">
    <div class="logo">
      <NuxtLink :href="authStore.user ? '/app' : '/'">
        {{ appConfig.public.appName }}
      </NuxtLink>
    </div>
    <nav>
      <div v-if="authStore.user">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage v-if="authStore.user.image" :src="authStore.user.image" />
              <AvatarFallback>
                {{ authStore.user.name.charAt(0).toUpperCase() }}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <NuxtLink to="/app/profile">
                Profile
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem @click="authStore.signOut()">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  </header>
</template>
