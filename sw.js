
const CACHE_NAME = 'loja-cache-v1';
const ASSETS = ['index.html','vitrine.html','vendas.html','gestao.html','dashboard.html','chat.html','seo.html','style.css','db.js','app.js','auth.js'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e=>{ self.clients.claim(); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
