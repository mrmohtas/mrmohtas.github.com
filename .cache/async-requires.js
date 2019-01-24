// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-template-js": () => import("/home/tsturge/apps/tom.sturge.co/src/templates/blogTemplate.js" /* webpackChunkName: "component---src-templates-blog-template-js" */),
  "component---cache-dev-404-page-js": () => import("/home/tsturge/apps/tom.sturge.co/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/tsturge/apps/tom.sturge.co/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/tsturge/apps/tom.sturge.co/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/tsturge/apps/tom.sturge.co/.cache/data.json")

