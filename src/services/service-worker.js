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

precacheAndRoute(self.__WB_MANIFEST);

clientsClaim();

self.skipWaiting();

cleanupOutdatedCaches();

registerRoute(
  new RegExp('.(?:png|gif|jpg|jpeg|webp|svg)'),
  new CacheFirst({
    cacheName: 'image-caches',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60,
      }),
    ],
  }),
  'GET',
);

registerRoute(
  new RegExp('.(?:js|css)$'),
  new StaleWhileRevalidate({
    cacheName: 'js-css-caches',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60,
      }),
    ],
  }),
);

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
        maxAgeSeconds: 12 * 60 * 60,
      }),
    ],
  }),
  'GET',
);

registerRoute(
  new RegExp('/_next/static/'),
  new StaleWhileRevalidate({
    cacheName: 'static-caches',
  }),
);
