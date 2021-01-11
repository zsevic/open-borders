importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js',
);

if (!workbox) {
  return;
}

const {
  cacheableResponse: { CacheableResponsePlugin },
  core: { clientsClaim },
  expiration: { ExpirationPlugin },
  precaching: { cleanupOutdatedCaches },
  routing: { registerRoute },
  strategies: { CacheFirst, StaleWhileRevalidate },
} = workbox;

const maxAgeSeconds = 30 * 24 * 60 * 60;
const maxEntries = 60;

clientsClaim();

self.skipWaiting();

cleanupOutdatedCaches();

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'pages',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) =>
    ['manifest', 'script', 'style'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries,
        maxAgeSeconds,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) =>
    url.origin === self.location.origin &&
    url.pathname.startsWith('/_next/static/'),
  new StaleWhileRevalidate({
    cacheName: 'static-caches',
  }),
);
