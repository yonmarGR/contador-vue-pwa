const CACHE_NAME = "V1_cache_contador_app_vue"
const urlsToCache = [
  "./",
  "./img/mario.png",
  "./img/number.png",
  "./img/number64.png",
  "./img/number128.png",
  "./img/number256.png",
  "./img/number512.png",
  "./img/number1024.png",
  "./js/main.js",
  "https://unpkg.com/vue@next",
  "./js/mountApp.js",
  "./css/style.css",
  "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
];

// para almacenar en cache todos los datos
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(
      cache => cache.addAll(urlsToCache).then(
        () => self.skipWaiting()
      ).catch(
        err => console.log(err)
      )
    )
  )
})

// activar y comparar caches
self.addEventListener("activate", e => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
    .keys()
    .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
              if(cacheWhitelist.indexOf(cacheName) === -1){
                return caches.delete(cacheName);
              }
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// se encarga de hacer las peticiones
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
        if(res) {
          return res;
        }
        return fetch(e.request);
      })
  );
});
