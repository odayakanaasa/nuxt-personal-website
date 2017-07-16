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
    "url": "0.nuxt.bundle.c4743c18ae748e366ae5.js",
    "revision": "0d8c04d17fad5289cdd4f8cad564a87a"
  },
  {
    "url": "1.nuxt.bundle.ecbd1c61b9e1ff605888.js",
    "revision": "4d11f2a7c4ed9c59d4881bdbc7060319"
  },
  {
    "url": "2.nuxt.bundle.586e8d30fd139f8c8f30.js",
    "revision": "ec93c25ab8efdbed62568a79442640d3"
  },
  {
    "url": "3.nuxt.bundle.77b08070ff70d294c522.js",
    "revision": "e85fa6062ea66d41b203d11e6cc42659"
  },
  {
    "url": "client-manifest.json",
    "revision": "82ee69d9be23d20da1e505774e3d0fb7"
  },
  {
    "url": "index.html",
    "revision": "6ba2b8d7183b39555a0a6b5fa4fb9fe4"
  },
  {
    "url": "manifest.1ccf5b5a1defc7ca18ba.js",
    "revision": "48c4f2e23d1c3ad3a006cb92ce27e4fe"
  },
  {
    "url": "manifest.c739f99e.json",
    "revision": "64b460ea29d44eeff590258be5d41154"
  },
  {
    "url": "nuxt.bundle.abc63d12b6b2a5cbbbdf.js",
    "revision": "e67557fe1b5bd7b719442b3053b1e0dc"
  },
  {
    "url": "server-bundle.json",
    "revision": "7c2d6fa63393d069c5ab8998108b083e"
  },
  {
    "url": "vendor.bundle.808d083ec83f602947c5.js",
    "revision": "a7fad9861547e1cf17fb6dbdaafa59d1"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vuecms_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
