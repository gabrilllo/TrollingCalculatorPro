/*
=========================================
Trolling Calculator Pro
Service Worker
Versione 0.2
=========================================
*/

const CACHE_NAME = "trolling-calculator-v1";

const FILES_TO_CACHE = [

    "./",
    "./index.html",
    "./style.css",

    "./app.js",
    "./calculator.js",
    "./database.js",
    "./storage.js",

    "./manifest.json",

    "./data/artificiali.json",

    "./icons/icon-192.png",
    "./icons/icon-512.png"

];

/*
-----------------------------------------
INSTALL
-----------------------------------------
*/

self.addEventListener("install", event => {

    console.log("Service Worker installato");

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then(cache => {

            return cache.addAll(FILES_TO_CACHE);

        })

    );

});

/*
-----------------------------------------
ACTIVATE
-----------------------------------------
*/

self.addEventListener("activate", event => {

    console.log("Service Worker attivo");

    event.waitUntil(

        caches.keys().then(keys => {

            return Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            );

        })

    );

});

/*
-----------------------------------------
FETCH
-----------------------------------------
*/

self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

        .then(response => {

            return response || fetch(event.request);

        })

    );

});
