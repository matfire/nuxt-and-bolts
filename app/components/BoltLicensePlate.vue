<script setup lang="ts">
import { motion } from "motion-v";

interface Props {
  title?: string;
  description?: string;
  licenseText?: string;
  statusText?: string;
  icon?: string;
}

const { title = "Free & Open Source", description = "Nuxt&Bolts is completely free to use, forever. MIT licensed for maximum freedom and flexibility.", licenseText = "MIT License", statusText = "Always free, forever", icon = "🚀" } = defineProps<Props>();
</script>

<template>
  <section class="w-full max-w-4xl mx-auto px-4 mt-20 text-center relative">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-400/20 rounded-full animate-float-slow" />
      <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-float-medium" />
      <div class="absolute bottom-1/3 left-1/6 w-3 h-3 bg-purple-400/15 rounded-full animate-float-fast" />
    </div>

    <motion.div
      :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }" :viewport="{ once: true, amount: 0.3 }"
      class="relative"
    >
      <!-- Enhanced background with gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-blue-50/20 to-purple-50/30 dark:from-emerald-950/20 dark:via-blue-950/15 dark:to-purple-950/20 rounded-2xl blur-xl" />

      <div class="relative border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-10 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
        <!-- Subtle gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <!-- Icon -->
        <div class="relative mb-6">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-blue-100 dark:from-emerald-900/50 dark:to-blue-900/50 mb-4 group-hover:scale-110 transition-transform duration-300">
            <span class="text-2xl">{{ icon }}</span>
          </div>
        </div>

        <!-- Content -->
        <h2 class="relative text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 tracking-tight">
          {{ title }}
        </h2>
        <p class="relative text-lg text-zinc-600 dark:text-zinc-300 mb-8 max-w-xl mx-auto leading-relaxed">
          {{ description }}
        </p>

        <!-- License badge with enhanced styling -->
        <div class="relative flex flex-col sm:flex-row items-center justify-center gap-4">
          <div class="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group/badge">
            <span class="text-sm opacity-90">📄</span>
            <span>{{ licenseText }}</span>
            <span class="group-hover/badge:translate-x-1 transition-transform duration-200">→</span>
          </div>

          <div class="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>{{ statusText }}</span>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
</template>
