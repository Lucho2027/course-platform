// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxtjs/supabase"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  supabase: {
    redirect: false,
    // // redirectOptions: {
    // //   exclude: ["/"],
    // // },
  },
});
