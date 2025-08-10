<script setup lang="ts">
import { motion } from "motion-v";
import { useTypewriter } from "~/composables/useTypewriter";

definePageMeta({
  layout: false,
});

const { isDone, currentText } = useTypewriter("A modern Nuxt 4 starter kit with batteries included.");
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 pb-16 transition-colors duration-500 relative overflow-hidden"
  >
    <!-- Floating particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-float-slow" />
      <div class="absolute top-40 right-20 w-3 h-3 bg-purple-400/40 rounded-full animate-float-medium" />
      <div class="absolute top-60 left-1/4 w-1 h-1 bg-emerald-400/50 rounded-full animate-float-fast" />
      <div class="absolute bottom-40 right-10 w-2 h-2 bg-pink-400/30 rounded-full animate-float-slow" />
      <div class="absolute bottom-60 left-16 w-3 h-3 bg-cyan-400/40 rounded-full animate-float-medium" />
    </div>

    <section class="flex flex-col items-center justify-center min-h-screen text-center mb-0 relative overflow-hidden">
      <!-- Enhanced background gradients -->
      <div class="absolute inset-0 pointer-events-none select-none">
        <div
          class="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 dark:opacity-20 bg-gradient-to-tr from-blue-400/30 via-fuchsia-400/20 to-emerald-400/30 animate-pulse-slow"
        />
        <div
          class="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-2xl opacity-20 dark:opacity-15 bg-gradient-to-bl from-purple-400/25 via-pink-400/15 to-orange-400/25 animate-float-slow"
        />
      </div>

      <!-- Floating icons -->
      <div class="absolute inset-0 pointer-events-none select-none">
        <div class="absolute top-1/4 left-1/4 text-4xl opacity-20 animate-float-slow">
          ⚡
        </div>
        <div class="absolute top-1/3 right-1/4 text-3xl opacity-15 animate-float-medium">
          🚀
        </div>
        <div class="absolute bottom-1/3 left-1/6 text-3xl opacity-20 animate-float-fast">
          ✨
        </div>
        <div class="absolute bottom-1/4 right-1/6 text-4xl opacity-15 animate-float-slow">
          🔥
        </div>
      </div>

      <motion.div
        :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
        class="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-800 dark:text-zinc-100 mb-4 drop-shadow-lg"
      >
        Nuxt&amp;Bolts
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.3 }"
        class="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-2 max-w-xl mx-auto min-h-[3rem] flex items-center justify-center"
      >
        <span>{{ currentText }}</span>
        <span v-if="!isDone" class="ml-1 animate-blink">|</span>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.6 }"
        class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mb-8 max-w-lg mx-auto"
      >
        Fast, beautiful, and ready for your next project.
      </motion.div>
      <motion.div
        :initial="{ opacity: 0, y: 30 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut', delay: 0.9 }"
        class="flex flex-col sm:flex-row gap-4 justify-center mb-8"
      >
        <a
          href="https://github.com/matfire/nuxt-and-bolts" target="_blank"
          class="px-7 py-3 rounded-lg bg-zinc-900 text-white font-semibold shadow hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-0.5 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition-all duration-200 group"
        >
          <span class="inline-flex items-center gap-2">
            View on GitHub
            <span class="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </a>
        <a
          href="https://nxb.sh/new" target="_blank"
          class="px-7 py-3 rounded-lg bg-white text-zinc-900 font-semibold border border-zinc-300 shadow hover:bg-zinc-50 hover:shadow-lg hover:-translate-y-0.5 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 transition-all duration-200 group"
        >
          <span class="inline-flex items-center gap-2">
            Try Online
            <span class="group-hover:translate-x-1 transition-transform duration-200">↗</span>
          </span>
        </a>
      </motion.div>
      <div class="flex items-center justify-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm">
        <span class="i-ph-sparkle-bold text-lg" />
        <span>Supports Light &amp; Dark Mode</span>
        <span class="i-ph-moon-stars-bold text-lg" />
      </div>
    </section>

    <!-- Features Section -->
    <section class="w-full max-w-4xl mx-auto px-4 mt-20">
      <motion.div
        :initial="{ opacity: 0, y: 50 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
        class="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-8 text-center tracking-tight"
      >
        Features
      </motion.div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <BoltFeatureCard
          icon="🔒"
          title="Authentication"
          color="blue"
          :delay="0.1"
        >
          Secure, flexible auth powered by <a
            href="https://www.better-auth.com/" target="_blank"
            class="text-zinc-800 dark:text-zinc-100 underline hover:text-blue-500 transition-colors font-medium"
          >better-auth</a>.
        </BoltFeatureCard>

        <BoltFeatureCard
          icon="🗄️"
          title="Database Management"
          color="emerald"
          :delay="0.2"
        >
          Type-safe ORM and migrations with <a
            href="https://orm.drizzle.team/" target="_blank"
            class="text-zinc-800 dark:text-zinc-100 underline hover:text-emerald-500 transition-colors font-medium"
          >Drizzle</a>.
        </BoltFeatureCard>

        <BoltFeatureCard
          icon="✉️"
          title="Mail Integration"
          color="purple"
          :delay="0.3"
          description="Easy email sending and templates, ready to connect to your provider."
        />

        <BoltFeatureCard
          icon="⚡"
          title="UI Components"
          color="yellow"
          :delay="0.4"
        >
          Beautiful, reusable components built with TailwindCSS and <a
            href="https://www.shadcn-vue.com/" target="_blank"
            class="text-zinc-800 dark:text-zinc-100 underline hover:text-yellow-500 transition-colors font-medium"
          >shadcn-vue</a>.
        </BoltFeatureCard>

        <BoltFeatureCard
          icon="🔧"
          title="Dev Experience"
          color="orange"
          :delay="0.5"
          description="Pre-configured ESLint, Prettier, and more for a smooth workflow."
        />

        <BoltFeatureCard
          icon="🌐"
          title="Ready for Production"
          color="cyan"
          :delay="0.6"
          description="Optimized build, environment management, and deployment guides."
        />
      </div>
    </section>

    <!-- Open Source Section -->
    <BoltLicensePlate />
  </div>
</template>
