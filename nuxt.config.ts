// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  // modules: ["@nuxtjs/tailwindcss"],
  plugins: [{ src: "~/plugins/flowbite.js", mode: "client" }],
  css: ["~/assets/main.css"],
  tailwindcss: {
    configPath: "~/tailwind.config.js", // Explicit path to your config
  },
  vite: {
    plugins: [tailwindcss()],
  },
  alias: {
    "@": resolve(__dirname, ""),
  },
  app: {
    baseURL: "/codentix/",
    buildAssetsDir: "assets", // Change from default '_nuxt' to 'assets'
  },
});
