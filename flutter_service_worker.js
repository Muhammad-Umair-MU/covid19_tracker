'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "63272e4ec7aeca43927cc44315d47a06",
"assets/assets/boarding_screen/breathing_difficulty.png": "04f8ff6779ec7d2f6b2c51515b6fab51",
"assets/assets/boarding_screen/cough.png": "63d477d8dd45195c62e262764e11aed4",
"assets/assets/boarding_screen/fever.png": "e50e6ccbb9973b7cc9e876e4a9c2953c",
"assets/assets/corona.png": "1b2a5273dc1c263f188d972fec035a79",
"assets/assets/developer.jpg": "5ebaea866f104b2cf28314c38cb16588",
"assets/assets/doctor.png": "dfd1e21441dcbeab7a149ae0a7290481",
"assets/assets/myths/ages.png": "d4823a8f72d03d7b5e0f1a0d22a50b9a",
"assets/assets/myths/antibiotics.png": "ccdfc714a72030b457a80ccdb5fd8cc6",
"assets/assets/myths/dogs.png": "65c048481201c22eac58dff88ce93f59",
"assets/assets/myths/garlic.png": "3f7b37d7c28add3a6f19b713b0ae8c4b",
"assets/assets/myths/hot.png": "0a239c70f8670169e8db2ebe67e3864f",
"assets/assets/myths/mosquito.png": "672ce600872eade3cb131359dee6cbd3",
"assets/assets/myths/myths.png": "ee952d579ab18daa8859921760e3ac65",
"assets/assets/myths/package.png": "43f4a9aa71c0b1eaba0ec3bd08617985",
"assets/assets/prevention/boy.png": "9537b6e912a9393b48056fd9a63226ad",
"assets/assets/prevention/coughCover.png": "49062f5781fec7b98aa94a737bbcf7f3",
"assets/assets/prevention/mask.png": "4517e2d4352bc2467ef493bfc0be2360",
"assets/assets/prevention/sanitizer.png": "31726ebaca164636fd44884300c9eb23",
"assets/assets/prevention/socialDistance.png": "87d8538280cb2c3f53919142347f8d6f",
"assets/assets/prevention/touch.png": "b06c2751c0ba25c1c0f591d34338ca07",
"assets/assets/prevention/wash.png": "c049baa570ba0f8b14eb1e9cf270175d",
"assets/assets/stats.png": "66fb32e26c0cb856a7375c2a81a35a72",
"assets/assets/symptoms/corona_virus.png": "f6b231995494a1328a9e6d31a20d5eb9",
"assets/assets/symptoms/cough.png": "94c1851f19cae87949485580b56392a1",
"assets/assets/symptoms/headache.png": "cf6a866d9955ec23116dd347b0509aa5",
"assets/assets/symptoms/high_fever.png": "c51628a1ac1f93930bd4f46561b8ba06",
"assets/assets/symptoms/sore_throat.png": "15e2dd223cdef25788ca6ac326004628",
"assets/assets/symptoms/symptoms.png": "45bc23d5fb310cf3628894a82ac4f077",
"assets/assets/virus_loading.json": "07c180d845ab50c54b57756efb986ddd",
"assets/assets/world_map.json": "2b985cdfde7205f008a55a8d16984461",
"assets/assets/world_map_loading.json": "f868031afa4b3dcfee6e87661b8d2d33",
"assets/FontManifest.json": "cfe3cfc08e804c2b541a5a480e99f602",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/loading.gif": "d65a2f3ac6cfb2b46b4f31948705866b",
"assets/NOTICES": "c2c02eb9753ec93953e5ff8e2b27e0fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "d055667ada6d970111ccb08325f9bc02",
"icons/android-chrome-512x512.png": "082caad95451af9be32c3c0cff0ab49e",
"icons/apple-touch-icon.png": "d091d67ce6b3ef9f528840abd9d4ccaa",
"icons/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"icons/favicon-16x16.png": "7a657bba623c9904e83cea6f0a624438",
"icons/favicon-32x32.png": "a27baa8c06bed950ad8920a259342fc1",
"icons/favicon.ico": "e25834d6366f326664476b3122bd6aab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/mstile-150x150.png": "7947789a3098920e23c93b3f1780b18f",
"icons/safari-pinned-tab.svg": "efd2b8e8d31796c9087a3cea9ffb2cc8",
"icons/site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"index.html": "dfef1c7970f4887911529a8d76712c9c",
"/": "dfef1c7970f4887911529a8d76712c9c",
"main.dart.js": "f41352121da01916d86aa6bb9ba44f05",
"manifest.json": "55cb5ecaad5a33c34138a78e61538646",
"version.json": "2bc89d9b5ac60f15f6d64a1992f88562"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
