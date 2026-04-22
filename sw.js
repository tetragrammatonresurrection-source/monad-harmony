self.addEventListener('install', (e) => {
  console.log('Monad Harmony Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
