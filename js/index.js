const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");

function handleSearch() {
    if (searchInput.value.trim().length === 0) {
        return;
    } else {
        window.location.href = `/recipes.html?search=` + searchInput.value;
    }
};

searchButton.addEventListener("click", handleSearch);
