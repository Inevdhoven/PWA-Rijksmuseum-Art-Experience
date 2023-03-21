import { CONFIG } from "./config.js"
import { errorState } from "./error.js"
import { searchLoaderShow, searchLoaderHide } from "./loader.js"

export function search() {

    return `<input type="text" list="searchitems" placeholder="Zoeken...">
            <datalist id="searchitems">
                <option value="Rembrandt van Rijn"></option>
                <option value="Johannes Vermeer"></option>
                <option value="Jacob Isaacksz van Ruisdael"></option>
                <option value="Jan Havicksz. Steen"></option>
                <option value="Vincent van Gogh"></option>
            </datalist>
            <button type="submit"></button>`
    
}

export function getSearchData() {
    const input = document.querySelector('.search input')
    const searchValue = input.value;
    const url = `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100&q=${searchValue}`
    const liElements = document.querySelectorAll('.search-results li')

    liElements.forEach(li => {
        li.remove(li) // Verwijderd alle li elementen
    })

    searchLoaderShow()

    fetch(url)
    .then(response => response.json())
    .then(data => {

        searchLoaderHide()

        const artworks = data.artObjects;

        if (artworks.length === 0) { // Als er geen resultaten zijn
            const searchResults = document.querySelector('.search-results')
            const noResults = document.createElement('li')
            noResults.textContent = 'Geen resultaten gevonden'
            searchResults.appendChild(noResults)
        } else { // Als er wel resultaten zijn
            artworks.map(artwork => {
                displaySearchData(artwork)
            })
        }
        
    })
    .catch(error => {
        console.log(error);
        window.location.hash = "error"
        errorState()
    })
}

export function displaySearchData(artwork) {
    const searchResults = document.querySelector('.search-results')

    const searchResult = document.createElement('li')
    const searchResultLink = document.createElement('a')
    const searchResultTitle = document.createElement('h2')
    const searchResultImage = document.createElement('img')

    searchResultLink.href = `/Rijksmuseum-Art-Experience-App/spa/#details/${artwork.objectNumber}`
    searchResultTitle.textContent = artwork.title
    searchResultImage.src = artwork.webImage?.url || './images/placeholder.png'
    searchResultImage.alt = artwork.title

    searchResult.appendChild(searchResultLink)
    searchResultLink.appendChild(searchResultTitle)
    searchResultLink.appendChild(searchResultImage)

    searchResults.appendChild(searchResult)
}