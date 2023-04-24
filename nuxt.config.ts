const defineNuxtConfig = {
  css: ["~/src/tailwind.css"],
  typescript: {
    strict: true,
  },
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};

export default defineNuxtConfig;
