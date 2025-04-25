// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "floating-vue/nuxt",
  ],
  image: {
    inject: true,
    format: ["webp"],
  },
});
