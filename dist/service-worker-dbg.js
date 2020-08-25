importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// index.html and JavaScript files
workbox.routing.registerRoute(
	new RegExp('(index\.html|.*\.js)'),
	// Fetch from the network, but fall back to cache
	new workbox.strategies.NetworkFirst()
);

// CSS, fonts, i18n
workbox.routing.registerRoute(
	/(.*\.css|.*\.properties|.*\.woff2)/,
	// Use cache but update in the background ASAP
	new workbox.strategies.StaleWhileRevalidate({
		// Use a custom cache name
		cacheName: 'asset-cache',
	})
);