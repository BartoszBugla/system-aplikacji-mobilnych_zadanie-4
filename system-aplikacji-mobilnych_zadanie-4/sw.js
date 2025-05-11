const CACHE_NAME = "meal-cache-v1";

const PRECACHE_URLS = [
  "/",
  "/index.html",
  "/form.html",
  "/details.html",
  "/style.css",
  "/bundle.js",
  "/manifest.json",
  "landscape-placeholder.svg",
];

// Install event: Pre-cache static assets
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing service worker...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(PRECACHE_URLS);
      })

      .catch((error) => {
        console.error("[Service Worker] Pre-caching failed:", error);
      })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(event.request.url);

  if (event.request.url.includes("/details")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match("/details").then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request).then((fetchedResponse) => {
            cache.put(event.request, fetchedResponse.clone());

            return fetchedResponse;
          });
        });
      })
    );

    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request.url).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((fetchedResponse) => {
          cache.put(event.request, fetchedResponse.clone());

          return fetchedResponse;
        });
      });
    })
  );
});
