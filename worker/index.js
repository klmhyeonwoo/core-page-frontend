self.__WB_DISABLE_DEV_LOGS = true;

const CACHE_NAME = "version-1";
const urlsToCache = ["/", "index.html", "favicon.ico"];

self.addEventListener("install", function (event) {
  //캐싱기능
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (event) {
  //업데이트기능
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) return response;
      return fetch(event.request);
    })
  );
});
self.addEventListener("activate", function (event) {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("push", (event) => {
  //푸시기능
  const title = "공지사항";
  const options = {
    body: event.data.text(),
    icon: "/maskable_icon_x152.png",
  };
  event.waitUntil(registration.showNotification(title, options));
});
