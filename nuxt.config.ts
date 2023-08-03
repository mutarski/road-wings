// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image-edge'],
  css: ['@/assets/styles.css'],
  vite: {
    vue: {
      include: [/\.vue$/, /\.md$/],
    },
  },
  image: {
    dir: 'static',
  },
})
