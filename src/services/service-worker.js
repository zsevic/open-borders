import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
} from 'workbox-strategies';

const maxAgeSeconds = 30 * 24 * 60 * 60;

precacheAndRoute(self.__WB_MANIFEST);

clientsClaim();

self.skipWaiting();

cleanupOutdatedCaches();

registerRoute(
  new RegExp('/'),
  new NetworkFirst({
    cacheName: 'html-caches',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds,
      }),
    ],
  }),
  'GET',
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
        maxEntries: 20,
        maxAgeSeconds,
      }),
    ],
  }),
  'GET',
);

registerRoute(
  ({ request }) =>
    request.destination === 'style' || request.destination === 'script',
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
  new RegExp('/_next/static/'),
  new StaleWhileRevalidate({
    cacheName: 'static-caches',
  }),
);
