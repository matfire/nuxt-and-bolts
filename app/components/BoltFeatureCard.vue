<script setup lang="ts">
import { motion } from "motion-v";

interface Props {
  icon: string;
  title: string;
  description?: string;
  color: keyof typeof colorClasses;
  delay?: number;
}

const { icon, title, description, color, delay = 0 } = defineProps<Props>();

const colorClasses = {
  blue: {
    shadow: "hover:shadow-blue-500/10",
    border: "hover:border-blue-300/50 dark:hover:border-blue-600/50",
    gradient: "from-blue-50/50 dark:from-blue-950/30",
    icon: "group-hover:text-blue-500",
    title: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  emerald: {
    shadow: "hover:shadow-emerald-500/10",
    border: "hover:border-emerald-300/50 dark:hover:border-emerald-600/50",
    gradient: "from-emerald-50/50 dark:from-emerald-950/30",
    icon: "group-hover:text-emerald-500",
    title: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
  },
  purple: {
    shadow: "hover:shadow-purple-500/10",
    border: "hover:border-purple-300/50 dark:hover:border-purple-600/50",
    gradient: "from-purple-50/50 dark:from-purple-950/30",
    icon: "group-hover:text-purple-500",
    title: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
  },
  yellow: {
    shadow: "hover:shadow-yellow-500/10",
    border: "hover:border-yellow-300/50 dark:hover:border-yellow-600/50",
    gradient: "from-yellow-50/50 dark:from-yellow-950/30",
    icon: "group-hover:text-yellow-500",
    title: "group-hover:text-yellow-600 dark:group-hover:text-yellow-400",
  },
  orange: {
    shadow: "hover:shadow-orange-500/10",
    border: "hover:border-orange-300/50 dark:hover:border-orange-600/50",
    gradient: "from-orange-50/50 dark:from-orange-950/30",
    icon: "group-hover:text-orange-500",
    title: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
  },
  cyan: {
    shadow: "hover:shadow-cyan-500/10",
    border: "hover:border-cyan-300/50 dark:hover:border-cyan-600/50",
    gradient: "from-cyan-50/50 dark:from-cyan-950/30",
    icon: "group-hover:text-cyan-500",
    title: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
  },
};

const currentColor = colorClasses[color] || colorClasses.blue;
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 5 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, ease: 'easeOut', delay }"
    class="relative border border-zinc-200/50 dark:border-zinc-700/50 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm p-7 flex flex-col items-center transition-all duration-300 group hover:-translate-y-1 overflow-hidden" :class="[
      currentColor.shadow,
      currentColor.border,
    ]"
  >
    <div class="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" :class="[currentColor.gradient]" />
    <span
      class="relative text-zinc-400 dark:text-zinc-500 text-3xl mb-3 group-hover:scale-110 transition-all duration-300 drop-shadow-sm" :class="[
        currentColor.icon,
      ]"
    >{{ icon }}</span>
    <h3
      class="relative font-semibold text-base text-zinc-800 dark:text-zinc-100 mb-2 transition-colors duration-300" :class="[
        currentColor.title,
      ]"
    >
      {{ title }}
    </h3>
    <div class="relative text-sm text-zinc-600 dark:text-zinc-300 text-center leading-relaxed">
      <slot>
        {{ description }}
      </slot>
    </div>
  </motion.div>
</template>
