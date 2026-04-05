/* eslint-disable no-restricted-globals */

const CACHE_NAME = "offline-cache-v2.0.18";
const OFFLINE_URL = "/offline.html?v=2.0.18";
const FALLBACK_IMAGE = "/images/cover_default.jpg?v=2.0.18";
const PRECACHE_URLS = [OFFLINE_URL, FALLBACK_IMAGE];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(OFFLINE_URL, copy));
          return response;
        })
        .catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).catch(() => {
        if (request.destination === "image") return caches.match(FALLBACK_IMAGE);
        return caches.match(OFFLINE_URL);
      });
    })
  );
});
