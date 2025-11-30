const CACHE_NAME = 'loja-cache-v1';
const URLS_TO_CACHE = ['/', '/vitrine.html', '/style.css', '/app.js', '/db.js', '/gestao.html', '/vendas.html', '/dashboard.html'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
