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
    caches.open(CORE_CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(CORE_ASSETS)
      .then(() => self.skipWaiting());
    })
  )
}) 

// Service worker wordt geactiveerd
self.addEventListener("activate", (event) => {
  // console.log("Activating service worker")
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', event => {
  // console.log('Fetch event: ', event.request.url);

  if (isCoreGetRequest(event.request)) {
    // console.log('Core get request: ', event.request.url);
    
    event.respondWith(
      caches.open(CORE_CACHE_NAME)
        .then(cache => cache.match(event.request.url))
    )
  } else if (isHtmlGetRequest(event.request)) {
    // console.log('html get request', event.request.cook)
    event.respondWith(

      caches.open('html-cache')
      .then(cache => cache.match(event.request.url)) // Check of de pagina al in de cache staat
      .then(response => response ? response : fetchAndCache(event.request, 'html-cache')) 
      .catch(e => {
        return caches.open(CORE_CACHE_NAME)
          .then(cache => cache.match('/offline'))
      })
    )
  }
}) 

function fetchAndCache(request, cacheName) {
  return fetch(request)
    .then(response => {
      if (!response.ok) {
        throw new TypeError('Bad response status');
      }

      const clone = response.clone()
      caches.open(cacheName).then((cache) => cache.put(request, clone))
      return response
    })
}

function isHtmlGetRequest(request) {
  return request.method === 'GET' && (request.headers.get('accept') !== null && request.headers.get('accept').indexOf('text/html') > -1);
}

function isCoreGetRequest(request) {
  return request.method === 'GET' && CORE_ASSETS.includes(getPathName(request.url));
}

function getPathName(requestUrl) {
  const url = new URL(requestUrl);
  return url.pathname;
}