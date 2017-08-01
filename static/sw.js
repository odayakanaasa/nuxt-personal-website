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
    "url": "/_nuxt/0.nuxt.bundle.14ed2351143d0a0dfbdd.js",
    "revision": "2b50b1d45e140b1289fdd9335c46b280"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.347d8c9aedba265b9db1.js",
    "revision": "ee0988b368d4447452d3782f8a1586e1"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a53e4a54ef1c4869eb16.js",
    "revision": "392eec0e4631752effa7ad9c8153aa86"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.e4c626941c452f17b975.js",
    "revision": "e47a902c16d5d6311b191a240d674a73"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.a63474171263136bef56.js",
    "revision": "dd6f5a0e9dc6061ffa225ab52a7af475"
  },
  {
    "url": "/_nuxt/index.spa.html",
    "revision": "be0c3483deb25e094279780725e468ad"
  },
  {
    "url": "/_nuxt/index.ssr.html",
    "revision": "61e669c2fa8d3fa46e2eb9433088cc5f"
  },
  {
    "url": "/_nuxt/manifest.1a20d08923b7bc410ad8.js",
    "revision": "08db7cb2a857ba1f2b3ce81fe77767f7"
  },
  {
    "url": "/_nuxt/manifest.6ab63c2d.json",
    "revision": "84d1989608ef2fcbe754326d64b7800a"
  },
  {
    "url": "/_nuxt/nuxt.bundle.c2891fc3cfc6259cd4cb.js",
    "revision": "3b29f0fe6fe96ca1b69f7d9d0c2ec633"
  },
  {
    "url": "/_nuxt/vendor.bundle.dfb46a9ca7ab55fafd92.js",
    "revision": "debb882714d7e39e80d5c869425ceee5"
  },
  {
    "url": "/_nuxt/vue-ssr-client-manifest.json",
    "revision": "75689d78b15f37742e3aa5f6a9475069"
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
