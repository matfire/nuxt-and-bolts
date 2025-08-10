import tailwindcss from "@tailwindcss/vite";
import { env } from "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/tailwind.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/test-utils/module",
    // '@nuxtjs/i18n'
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
    "@nuxtjs/seo"
  ],
  shadcn: {
    prefix: "",
    componentDir: "~/components/ui",
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  runtimeConfig: {
    public: {
      appName: env.APP_NAME,
    },
  },
  colorMode: {
    classPrefix: "",
    classSuffix: "",
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  // i18n: {
  //   locales: [
  //     { code: 'en', language: 'en-US' }
  //   ],
  //   defaultLocale: 'en'
  // }
});