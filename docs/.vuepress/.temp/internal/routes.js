export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Главная"} }],
  ["/nodejs.html", { loader: () => import(/* webpackChunkName: "nodejs.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/nodejs.html.js"), meta: {"title":"Документация"} }],
  ["/python.html", { loader: () => import(/* webpackChunkName: "python.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/python.html.js"), meta: {"title":"Python"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
