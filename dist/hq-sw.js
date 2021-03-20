
const cacheName = 'hq-1616259726034';
const appShellFiles = ['/index.html','/css/media-queries.css','/css/main.css','/assets/css/font/flaticon.css','/assets/css/font/Flaticon.woff','/assets/css/font/Flaticon.woff2','/assets/css/font/Flaticon.ttf','/assets/css/font/Flaticon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(appShellFiles)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key)))));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request)
    .then(r => r || fetch(e.request)));
});
