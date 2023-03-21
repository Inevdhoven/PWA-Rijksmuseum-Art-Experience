// Source Loader: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m
export function displayLoader() {
    const loader = document.querySelector('.loader')
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    main.classList.add('hide')
    header.classList.add('hide')
    loader.classList.remove('hide')
}

export function hideLoader() {
    setTimeout(() => {
        const header = document.querySelector('header')
        const main = document.querySelector('main')
        const loader = document.querySelector('.loader')
        loader.classList.add('hide')
        main.classList.remove('hide')
        header.classList.remove('hide')
    }, 200); // to stop loading after some time
}

export function searchLoaderShow() {
    const searchResults = document.querySelector('.search-results')

    searchResults.classList.add('loading')

    searchResults.insertAdjacentHTML('beforebegin', `<div class="search-loader">Aan het zoeken...</div>`) // Source: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML for beforebegin
}

export function searchLoaderHide() {
    setTimeout(() => {
        const searchLoader = document.querySelector('.search-loader')
        const searchResults = document.querySelector('.search-results')
        searchLoader.remove(searchLoader)
        searchResults.classList.remove('loading')
    }, 200); // to stop loading after some time
}