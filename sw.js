if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,t)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/server/middleware-manifest.json",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/bOC3lihtxIK7fak7UX-fB/_buildManifest.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/bOC3lihtxIK7fak7UX-fB/_middlewareManifest.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/bOC3lihtxIK7fak7UX-fB/_ssgManifest.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/585-ee09987a18ebcd73.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/592-90fbc5bc4485a588.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/666-ef607f4cd41549ba.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/697-1dcca4c1845d75ee.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/69b2bcf5-9a7661ad4acb5e72.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/714-86c4ecc881758863.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/8-dd4884640b42adad.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/807-b8b932c7f9c1f17c.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/949-9ad604bc9f12e411.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/ae51ba48-efe26e7cd0915dd0.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/d64684d8-feb19f9bb075e149.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/framework-0f8b31729833af61.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/main-4a53e460e4aa18b4.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/_app-51657dfffadaa1a5.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/history-fa4de74eb20cc6e7.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/index-1567c98884a5edeb.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/privacy-a502756c0065d7e0.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/rank-2073721e4505ff09.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/setting-ea5f2d8827441eed.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/pages/terms-1420cb3ebaeba33f.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/_next/static/chunks/webpack-378e68e29c265886.js",revision:"bOC3lihtxIK7fak7UX-fB"},{url:"/favicon.ico",revision:"30d3c5d305c6ba1dca113165042d0541"},{url:"/manifest.json",revision:"db9c1e5c8fd128c6678d3d31490f1af0"},{url:"/static/icons/android-chrome-192x192.png",revision:"d4416bd2108e15ceae8af1f017e69d8c"},{url:"/static/icons/android-chrome-384x384.png",revision:"f834e1864127ee7d379a9e66dc175396"},{url:"/static/icons/apple-touch-icon-152x152.png",revision:"e1b5b65ddf560b9a2a1eeac9f2eebfab"},{url:"/static/icons/apple-touch-icon-180x180.png",revision:"ebd0ce297d870d1a5c92227b4005d2fe"},{url:"/static/icons/apple-touch-icon.png",revision:"ebd0ce297d870d1a5c92227b4005d2fe"},{url:"/static/icons/icon-512x512.png",revision:"1114e5d72f3bf224d77df89f7770c3c7"},{url:"/static/images/apple-splash-1125-2436.jpg",revision:"9a672977f32729816a93722d277c0a45"},{url:"/static/images/apple-splash-1242-2208.jpg",revision:"db1a237cd6c668ff8dcb092cc81cecea"},{url:"/static/images/apple-splash-1536-2048.jpg",revision:"6a9394fc0e90eec34c6b608dfe5cb551"},{url:"/static/images/apple-splash-1668-2224.jpg",revision:"9c7484c0c87409f0619a8350981e9653"},{url:"/static/images/apple-splash-2048-2732.jpg",revision:"d146f4250b3107749105cb238de34599"},{url:"/static/images/apple-splash-640-1136.jpg",revision:"37be9482db749ea40681e7ffb898a4db"},{url:"/static/images/apple-splash-750-1334.jpg",revision:"1810442f0d2d31d8a5f2184a8fdf6331"},{url:"/static/images/ogp.jpg",revision:"a29dc8e3a96b98f03bfd44ca5708fa4c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
