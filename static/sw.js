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
    "url": "0.nuxt.bundle.ca36d6a97505690eb3c7.js",
    "revision": "c7ebbfca6c0b89204b331e88a6751706"
  },
  {
    "url": "1.nuxt.bundle.ed1816c09831be513164.js",
    "revision": "e6e33cf0485b25ec949135514d2d076f"
  },
  {
    "url": "2.nuxt.bundle.60a70a86e308676cb2e7.js",
    "revision": "f49f9aaed1840f8950a3b4799f2f2427"
  },
  {
    "url": "3.nuxt.bundle.41a049d656b47745eaeb.js",
    "revision": "378cb819bc09a46ebd103e05570797a1"
  },
  {
    "url": "4.nuxt.bundle.a074d7fabd98cf71d94d.js",
    "revision": "929b887f133b934c2be9948ed83fe6cc"
  },
  {
    "url": "client-manifest.json",
    "revision": "16775dd73337d5e503b2edb6a8e3c8d3"
  },
  {
    "url": "index.html",
    "revision": "6ba2b8d7183b39555a0a6b5fa4fb9fe4"
  },
  {
    "url": "manifest.9a937640076d4eb0c552.js",
    "revision": "3272b4953dbee11dbc60230cabd1d054"
  },
  {
    "url": "manifest.c739f99e.json",
    "revision": "64b460ea29d44eeff590258be5d41154"
  },
  {
    "url": "nuxt.bundle.e4286a69911694e235d2.js",
    "revision": "38be58d77a5e4f226651d11fb3226ace"
  },
  {
    "url": "server-bundle.json",
    "revision": "9265d37aef5c9fa56f99a66b385c58f3"
  },
  {
    "url": "vendor.bundle.d3678e03ca7022e4bc7f.js",
    "revision": "ef92231794c6710e3d5ed115a39c79c7"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vuecms_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
