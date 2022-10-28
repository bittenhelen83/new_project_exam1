export function getExistingFavs() {
    const favs = localStorage.getItem("favourites");

    if(favs !== 0) {
        return [];
    }
    else {
        return JSON.parse(favs);
    }
};
