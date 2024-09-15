import comp from "/Users/kirillpozdnakov/Documents/telega-lib/front-telega-lib/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Main\",\"lang\":\"en-EN\",\"frontmatter\":{\"home\":true,\"title\":\"Main\",\"actions\":[{\"text\":\"Nodejs\",\"link\":\"/nodejs.html\",\"type\":\"primary\"},{\"text\":\"Python\",\"link\":\"/python.html\",\"type\":\"primary\"}],\"features\":[{\"title\":\"Python support\",\"details\":\"This library is located in the pip package manager.\"},{\"title\":\"Node js support\",\"details\":\"This library is located in the npm package manager.\"}]},\"headers\":[],\"git\":{\"updatedTime\":1726270748000,\"contributors\":[{\"name\":\"Кирилл\",\"email\":\"poznkirill3@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
