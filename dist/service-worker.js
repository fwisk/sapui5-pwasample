importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");workbox.routing.registerRoute(new RegExp("(index.html|.*.js)"),new workbox.strategies.NetworkFirst);workbox.routing.registerRoute(/(.*\.css|.*\.properties|.*\.woff2)/,new workbox.strategies.StaleWhileRevalidate({cacheName:"asset-cache"}));