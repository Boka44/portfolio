"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ddfb4ce9f78ca26a29bafebe933edf1a"],["/static/css/main.b95b48ff.css","d6364ad6217bff831f9490d6e1d3bbde"],["/static/js/main.0d1306a9.js","d5724d038b30f414ab058b7e3709eea5"],["/static/media/2ndlife.4db5b281.jpg","4db5b281f6697348c60acd2193714d9c"],["/static/media/CIS.4a36d026.jpeg","4a36d026486de68702005714e51fb70d"],["/static/media/CIS2-1.96bcee25.jpg","96bcee25c2415abb004b617ec53dea31"],["/static/media/CIS3-1.4111bc66.jpeg","4111bc660c2f3ce011d4525f0208124a"],["/static/media/bakhupng.16143325.png","1614332549ec3987acdd10eebb982e60"],["/static/media/barjoker.b5465b7d.PNG","b5465b7dffa5113f33c8aa6392256336"],["/static/media/boka.6f01374b.jpeg","6f01374bbd1bf1c7d40bd59d93b1641f"],["/static/media/bootstrap.8cdeb7a1.less","8cdeb7a119fb7c4f246e19fff32ed760"],["/static/media/dagumbo.6516fad2.PNG","6516fad22c10682e62e42e8511ffbc8a"],["/static/media/doylerules.451e27c9.PNG","451e27c9d1849d595f16c36ef7621333"],["/static/media/fixCase.f06dcfb4.PNG","f06dcfb4aaeb49f1229ec0c7dc2e4738"],["/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/static/media/lookingGlass.725eaf40.jpeg","725eaf40caa102e065c497210a60acdc"],["/static/media/me.08b1aaf6.jpg","08b1aaf6536adcebf95f90b86f9b1f76"],["/static/media/more.12b2b4e3.jpg","12b2b4e3f60cbf1ee3fbba10156ab84d"],["/static/media/portfolio.bb4f9249.jpeg","bb4f92499a276d9321a41d66d66a5db7"],["/static/media/stockApp.aa17a857.PNG","aa17a857b6839f8e9f8de2ab6028f1ca"],["/static/media/westCoast.31b8c8f3.jpeg","31b8c8f3b4de518f43eca0010870bb68"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});