// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "floating-vue/nuxt",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-11-01",
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        commaDangle: "always-multiline",
        indent: "tab",
      },
    },
  },
  app: {
    head: {
      title: "Manoel Lopes - [Quality Engineer]",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
