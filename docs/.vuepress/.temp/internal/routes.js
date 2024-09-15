export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Main"} }],
  ["/nodejs.html", { loader: () => import(/* webpackChunkName: "nodejs.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/nodejs.html.js"), meta: {"title":"Nodejs"} }],
  ["/python.html", { loader: () => import(/* webpackChunkName: "python.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/python.html.js"), meta: {"title":"Python"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
