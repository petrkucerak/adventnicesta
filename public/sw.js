const CACHE_NAME = "offline-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/autori",
  "/slova-biskupa-Jana",
  "/slova-Prokopa-Broze",
  "/den/2024-12-01",
  "/den/2024-12-02",
  "/den/2024-12-03",
  "/den/2024-12-04",
  "/den/2024-12-05",
  "/den/2024-12-06",
  "/den/2024-12-07",
  "/den/2024-12-08",
  "/den/2024-12-09",
  "/den/2024-12-10",
  "/den/2024-12-11",
  "/den/2024-12-12",
  "/den/2024-12-13",
  "/den/2024-12-14",
  "/den/2024-12-15",
  "/den/2024-12-16",
  "/den/2024-12-17",
  "/den/2024-12-18",
  "/den/2024-12-19",
  "/den/2024-12-20",
  "/den/2024-12-21",
  "/den/2024-12-22",
  "/den/2024-12-23",
  "/den/2024-12-24",
];

// Install event: cache specified files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Caching files...");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// Activate event: clear old caches if any
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event: serve cached files and update them in the background
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(() => {
          console.log("Fetch failed; returning cached version if available.");
        });

      return cachedResponse || fetchPromise;
    })
  );
});
