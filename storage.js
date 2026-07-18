/*
=========================================
Trolling Calculator Pro
storage.js
Versione 0.2
=========================================
*/

const STORAGE_KEYS = {

    FAVORITES: "tcp_favorites",

    CATCHES: "tcp_catches",

    SETTINGS: "tcp_settings"

};

/*
=========================================
PREFERITI
=========================================
*/

function getFavorites(){

    return JSON.parse(

        localStorage.getItem(

            STORAGE_KEYS.FAVORITES

        )

    ) || [];

}

function saveFavorites(lista){

    localStorage.setItem(

        STORAGE_KEYS.FAVORITES,

        JSON.stringify(lista)

    );

}

function addFavorite(id){

    let lista=getFavorites();

    if(!lista.includes(id)){

        lista.push(id);

        saveFavorites(lista);

    }

}

function removeFavorite(id){

    let lista=getFavorites();

    lista=lista.filter(x=>x!==id);

    saveFavorites(lista);

}

function isFavorite(id){

    return getFavorites().includes(id);

}

/*
=========================================
REGISTRO CATTURE
=========================================
*/

function getCatches(){

    return JSON.parse(

        localStorage.getItem(

            STORAGE_KEYS.CATCHES

        )

    ) || [];

}

function saveCatch(cattura){

    let lista=getCatches();

    lista.push(cattura);

    localStorage.setItem(

        STORAGE_KEYS.CATCHES,

        JSON.stringify(lista)

    );

}

function deleteCatch(index){

    let lista=getCatches();

    lista.splice(index,1);

    localStorage.setItem(

        STORAGE_KEYS.CATCHES,

        JSON.stringify(lista)

    );

}

/*
=========================================
IMPOSTAZIONI
=========================================
*/

function getSettings(){

    return JSON.parse(

        localStorage.getItem(

            STORAGE_KEYS.SETTINGS

        )

    ) || {};

}

function saveSettings(settings){

    localStorage.setItem(

        STORAGE_KEYS.SETTINGS,

        JSON.stringify(settings)

    );

}

console.log("Storage inizializzato");