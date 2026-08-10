const CACHE_NAME = "oerca-data-helper-v2";
const BASE = "/OERCA-Data-Helper-Releases/";
const APP_SHELL = [
  BASE,
  `${BASE}index.html`,
  `${BASE}manifest.json`,
  `${BASE}assets/index-DVRMC9WH-v2.js`,
  `${BASE}assets/index-WxO1s_FW.css`,
  `${BASE}assets/icon-Bvvvlcfe.png`,
  `${BASE}aqfavicon.ico`,
  `${BASE}favicon.svg`,
  `${BASE}icon.png`,
  `${BASE}opengraph.jpg`
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME)
    .then((cache) => cache.addAll(APP_SHELL))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys
      .filter((key) => key !== CACHE_NAME)
      .map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(BASE)) return;

  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request)
      .then((response) => {
        if (!response.ok) throw new Error("Navigation response was not successful");
        return response;
      })
      .catch(() => caches.match(`${BASE}index.html`)));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => {
    const network = fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return response;
    });
    return cached || network;
  }));
});
