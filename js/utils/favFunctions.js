const favKey = "favourites"

export function getExistingFavs() {
    const favs = localStorage.getItem(favKey);

    if(!favs) {
        return [];
    }
    else {
        return JSON.parse(favs);
    }
}

export function saveFavs(favs) {
    localStorage.setItem(favKey, JSON.stringify(favs));
}