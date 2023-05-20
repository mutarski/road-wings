import { createApp, createSSRApp, nextTick } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=0221142a";
import { $fetch } from "/_nuxt/node_modules/ofetch/dist/index.mjs?v=0221142a";
import { baseURL } from "/_nuxt/@id/virtual:nuxt:/Users/mutarski/code/road-wings/.nuxt/paths.mjs";
import { applyPlugins, createNuxtApp, normalizePlugins } from "/_nuxt/node_modules/nuxt/dist/app/nuxt.js?v=0221142a";
import "/_nuxt/@id/virtual:nuxt:/Users/mutarski/code/road-wings/.nuxt/css.mjs?t=1684607566461";
import _plugins from "/_nuxt/@id/virtual:nuxt:/Users/mutarski/code/road-wings/.nuxt/plugins/client.mjs?t=1684614753566";
import RootComponent from "/_nuxt/@id/virtual:nuxt:/Users/mutarski/code/road-wings/.nuxt/root-component.mjs?t=1684614753566";
import { appRootId } from "/_nuxt/@id/virtual:nuxt:/Users/mutarski/code/road-wings/.nuxt/nuxt.config.mjs";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
if (process.server) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (process.client) {
  if (process.dev && import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
  let vueAppPromise;
  entry = async function initApp() {
    if (vueAppPromise) {
      return vueAppPromise;
    }
    const isSSR = Boolean(
      window.__NUXT__?.serverRendered || document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true"
    );
    const vueApp = isSSR ? createSSRApp(RootComponent) : createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp });
    try {
      await applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#" + appRootId);
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
  vueAppPromise = entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
export default (ctx) => entry(ctx);
