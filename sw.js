if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-56079563"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HQhJHYbTL5oGCI-FzL6iQ/_buildManifest.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/HQhJHYbTL5oGCI-FzL6iQ/_ssgManifest.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/0a301732.631c3d1bdd467d676f79.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/0ff7265c9fac2ede725a5b4a9f85aea717e72844.d84e70a03442f868ab18.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/60478dd048b51f1f53bd32235ea8cb10be1450a1.7b6f4dad20f8118828de.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/69b2bcf5.39b848cca5702799c111.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/ae51ba48.cba59d4d6ca8794a2dba.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/commons.4522356e0b5c95bc3727.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/d64684d8.1f58df139e7849714c3f.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/framework.1a5e6c0bcaecf178eee2.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/main-cd68216834837b20db71.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/pages/_app-73b5aa4e95d475b1fc66.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/pages/_error-3f5147df79ecec9dbb9e.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/pages/history-0715fa277bdbcaa6baaf.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/pages/index-827908a094cdeb12fa10.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/pages/setting-1a598b8bc5b3ca2dd40a.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/polyfills-283031c735651d1762e0.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/_next/static/chunks/webpack-245f049e565ebf942e09.js",revision:"HQhJHYbTL5oGCI-FzL6iQ"},{url:"/favicon.ico",revision:"30d3c5d305c6ba1dca113165042d0541"},{url:"/manifest.json",revision:"db9c1e5c8fd128c6678d3d31490f1af0"},{url:"/static/icons/android-chrome-192x192.png",revision:"d4416bd2108e15ceae8af1f017e69d8c"},{url:"/static/icons/android-chrome-384x384.png",revision:"f834e1864127ee7d379a9e66dc175396"},{url:"/static/icons/apple-touch-icon-152x152.png",revision:"e1b5b65ddf560b9a2a1eeac9f2eebfab"},{url:"/static/icons/apple-touch-icon-180x180.png",revision:"ebd0ce297d870d1a5c92227b4005d2fe"},{url:"/static/icons/apple-touch-icon.png",revision:"ebd0ce297d870d1a5c92227b4005d2fe"},{url:"/static/icons/icon-512x512.png",revision:"1114e5d72f3bf224d77df89f7770c3c7"},{url:"/static/images/apple-splash-1125-2436.jpg",revision:"9a672977f32729816a93722d277c0a45"},{url:"/static/images/apple-splash-1242-2208.jpg",revision:"db1a237cd6c668ff8dcb092cc81cecea"},{url:"/static/images/apple-splash-1536-2048.jpg",revision:"6a9394fc0e90eec34c6b608dfe5cb551"},{url:"/static/images/apple-splash-1668-2224.jpg",revision:"9c7484c0c87409f0619a8350981e9653"},{url:"/static/images/apple-splash-2048-2732.jpg",revision:"d146f4250b3107749105cb238de34599"},{url:"/static/images/apple-splash-640-1136.jpg",revision:"37be9482db749ea40681e7ffb898a4db"},{url:"/static/images/apple-splash-750-1334.jpg",revision:"1810442f0d2d31d8a5f2184a8fdf6331"},{url:"/static/images/logcation.svg",revision:"ac1c8b804dcf4491ccc72f567acaecbb"},{url:"/static/images/ogp.jpg",revision:"a29dc8e3a96b98f03bfd44ca5708fa4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
