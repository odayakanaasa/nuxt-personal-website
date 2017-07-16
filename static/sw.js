importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "0.nuxt.bundle.50f46d8c2b83e6ee5837.js",
    "revision": "18789af41774c06d4b86ad057f61d69c"
  },
  {
    "url": "1.nuxt.bundle.68acca552555d449e79e.js",
    "revision": "6d87aeab2528faa311dc0b45565bdb64"
  },
  {
    "url": "2.nuxt.bundle.3d41e0f99e7f5322d5d9.js",
    "revision": "dae3e4a79b0a7d6e2a24dfc3bf5ceec4"
  },
  {
    "url": "3.nuxt.bundle.e92a4fdba18a3a94740e.js",
    "revision": "deb1fa9938517c2fc41923f33f61595d"
  },
  {
    "url": "client-manifest.json",
    "revision": "80272253b6e11c90bb1ceb72ed2cec27"
  },
  {
    "url": "index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "manifest.85fff83171d029a52a9a.js",
    "revision": "3bd0f4a2131c1ce48d60605c793cc51f"
  },
  {
    "url": "manifest.c739f99e.json",
    "revision": "64b460ea29d44eeff590258be5d41154"
  },
  {
    "url": "nuxt.bundle.73afadd45b1a5a659856.js",
    "revision": "9651c8e07e35c758482dd44d7101e672"
  },
  {
    "url": "server-bundle.json",
    "revision": "e0c738281c520b2de4b8569fab87ec17"
  },
  {
    "url": "vendor.bundle.33631a5f1a67f5f2f11a.js",
    "revision": "7e34e700ee74462c60811cf8b5fd1ffd"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vuecms_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
