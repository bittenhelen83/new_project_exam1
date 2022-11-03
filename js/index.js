const searchButton = document.querySelector(".searchButton");
const searchInput = document.querySelector(".searchInput");
// const searchValue = document.getElementById("searcInput").value;

searchButton.addEventListener("click", handleSearch);

function handleSearch() {
    if (searchInput.value.trim().length === 0) {
        return;
    } else {
        window.location.href = `/recipes.html?` + searchInput.value;
    }

};

handleSearch();
