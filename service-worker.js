// Source: https://github.com/decrek/progressive-web-apps-2223/blob/main/node-advanced-movies-example/src/service-worker.js
const CORE_CACHE = 1 // Versienummer van de cache
const CORE_CACHE_NAME = `offline-v${CORE_CACHE}` // Naam van de cache
const CORE_ASSETS = 
[
  "/static/css/style.css",
  "/js/script.js",
  "/manifest.json", 
  "/offline", 
  "/static/fonts/pannotextbold.woff", 
  "/static/fonts/pannotextbold.woff2", 
  "/static/fonts/pannotextnormal.woff", 
  "/static/fonts/pannotextnormal.woff2", 
  "/static/images/offline_image.png",
  "/images/favicon.png"
] // Alle assets die in de cache moeten komen

// Service worker wordt geïnstalleerd
self.addEventListener('install', event => {
  // console.log('Installing service worker')

  event.waitUntil(
    caches.open(CORE_CACHE_NAME) // De cache wordt geopend
    .then(function(cache) { // De assets worden in de cache gezet
      return cache.addAll(CORE_ASSETS) // De assets worden in de cache gezet
      .then(() => self.skipWaiting()); // Dwingt wachtende service worker om te activeren
    })
  )
}) 

// Service worker wordt geactiveerd
self.addEventListener("activate", (event) => {
  // console.log("Activating service worker")
  event.waitUntil(clients.claim()) // Alle clients worden geclaimd
})

self.addEventListener('fetch', event => {
  // console.log('Fetch event: ', event.request.url);

  if (isCoreGetRequest(event.request)) {
    // console.log('Core get request: ', event.request.url);
    
    event.respondWith(
      caches.open(CORE_CACHE_NAME) // De cache wordt geopend
        .then(cache => cache.match(event.request.url)) // Check of de asset al in de cache staat
    )
  } else if (isHtmlGetRequest(event.request)) {
    // console.log('html get request', event.request.cook)
    event.respondWith(

      caches.open('html-cache')
      .then(cache => cache.match(event.request.url)) // Check of de pagina al in de cache staat
      .then(response => response ? response : fetchAndCache(event.request, 'html-cache')) // Als de pagina al in de cache staat, wordt deze gereturned. Als de pagina niet in de cache staat, wordt deze opgehaald en in de cache gezet
      .catch(e => {
        return caches.open(CORE_CACHE_NAME) // Als er een error is, wordt de offline pagina gereturned
          .then(cache => cache.match('/offline')) // De offline pagina wordt opgehaald uit de cache
      })
    )
  }
}) 

function fetchAndCache(request, cacheName) { // De pagina wordt opgehaald en in de cache gezet
  return fetch(request) // De pagina wordt opgehaald
    .then(response => { // De response wordt gecontroleerd
      if (!response.ok) { // Als de response niet ok is, wordt er een error gegooid
        throw new TypeError('Bad response status');
      }

      const clone = response.clone() // De response wordt gekloond
      caches.open(cacheName).then((cache) => cache.put(request, clone)) // De gekloonde response wordt in de cache gezet
      return response // De response wordt gereturned
    })
}

function isHtmlGetRequest(request) { // Check of de request een html pagina is
  return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1); // Als de request een GET request is en de accept header een html pagina is, wordt true gereturned
}

function isCoreGetRequest(request) {
  return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url)); // Als de request een GET request is en de url in de CORE_ASSETS array staat, wordt true gereturned
}

function getPathName(requestUrl) {
  const url = new URL(requestUrl); // De url wordt omgezet naar een URL object
  return url.pathname; // De pathname wordt gereturned
}