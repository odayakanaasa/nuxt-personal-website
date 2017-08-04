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
    "url": "/_nuxt/0.nuxt.bundle.2afe2096e17dcb65385a.js",
    "revision": "c0a21c8693e64b9ec5735ced23b7d4bd"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.d20421be15b64a233fcc.js",
    "revision": "5dedd5fedd14bc1c8dde11f3a1481bd7"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.d9a9b0ba20b2a1e2c76c.js",
    "revision": "11aa558987d49bf468389ad36afac3da"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.1fb0d9bf2972d99c1f2f.js",
    "revision": "d7ec9346f66fa885c45b796878c64398"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.64e58db218f369cd9d36.js",
    "revision": "74c766c32c7cb64f1bbeb9e97eafba57"
  },
  {
    "url": "/_nuxt/index.spa.html",
    "revision": "9df751d5c469d70275f12008756b2892"
  },
  {
    "url": "/_nuxt/index.ssr.html",
    "revision": "61e669c2fa8d3fa46e2eb9433088cc5f"
  },
  {
    "url": "/_nuxt/manifest.6ab63c2d.json",
    "revision": "84d1989608ef2fcbe754326d64b7800a"
  },
  {
    "url": "/_nuxt/manifest.e608a9197338d682b9a0.js",
    "revision": "fc5aed81e52efd017386ec4ec31fd77e"
  },
  {
    "url": "/_nuxt/nuxt.bundle.bccc7e61540668806220.js",
    "revision": "dd31c633df0efa8961122871f747a1b3"
  },
  {
    "url": "/_nuxt/sitemap-routes.json",
    "revision": "002bcaa7be0e2aa3d666479c6a58cc91"
  },
  {
    "url": "/_nuxt/vendor.bundle.93a6b92c2227601feaca.js",
    "revision": "40b3049e075c7dbd91fa923ebeb9d6a2"
  },
  {
    "url": "/_nuxt/vue-ssr-client-manifest.json",
    "revision": "8bdc045d29adefedeb2a34ce34c2a89b"
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
