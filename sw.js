const CACHE = 'poker-hand-recorder-v3';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  // For page navigations, try the network first so GitHub updates appear quickly.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.open(CACHE).then(cache => cache.match('./index.html')))
    );
    return;
  }

  // For static assets, use only the current cache, then fall back to network.
  event.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(request).then(cached =>
        cached || fetch(request).then(response => {
          if (request.method === 'GET') cache.put(request, response.clone());
          return response;
        })
      )
    )
  );
});
