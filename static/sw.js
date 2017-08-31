importScripts('workbox-sw.prod.v1.3.0.js');

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
    "url": "/_nuxt/app.40a187674a939cd38740.js",
    "revision": "babb9f845bffe1fc80695316be837d32"
  },
  {
    "url": "/_nuxt/common.b3a00ee0edd89d01d2f6.js",
    "revision": "1a285c4b88348cd72ba301942829209e"
  },
  {
    "url": "/_nuxt/layouts/default.b2f3ed658884a2217b60.js",
    "revision": "7af4f1527b780fabe9815faa14b4fd2f"
  },
  {
    "url": "/_nuxt/layouts/slug.67b936e748bfe9ad4158.js",
    "revision": "0d873dc94ec3c1212fc475428023238e"
  },
  {
    "url": "/_nuxt/manifest.53967e9a85840e677c14.js",
    "revision": "640d9a5fe39b06cc645aafa2fd475c7a"
  },
  {
    "url": "/_nuxt/pages/_slug/index.d6e05746b086703633f6.js",
    "revision": "2c0a92956f7a3c375251c7e48b88b3d8"
  },
  {
    "url": "/_nuxt/pages/blog.64369962bd675c2eaf9e.js",
    "revision": "344eb93cbf7285d5cbd95f438cfe10c6"
  },
  {
    "url": "/_nuxt/pages/index.288462182f5889fe859c.js",
    "revision": "b4fc201b94ad75af0534f1ec822ed96e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "baptistedebever_0.1.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
