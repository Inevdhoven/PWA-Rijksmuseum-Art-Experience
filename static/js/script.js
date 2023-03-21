import { fetchData } from "./modules/data.js"
import { onRouteChanged } from "./modules/router.js"
import { displayLoader, hideLoader } from "./modules/loader.js"
import { errorState } from "./modules/error.js"

let globalData;

// Eventlisteners
const zeroStateButton = document.querySelector('.zerostate button')
const zeroState = document.querySelector('.zerostate')

zeroStateButton.addEventListener('click', function() {
    zeroState.remove(zeroState)
})

// Source for scroll: https://ryfarlane.com/article/get-scroll-position-vanilla-javascript
window.addEventListener('scroll', function() {
    let scroll = window.scrollY; // De scroll positie wordt opgehaald
    const header = document.querySelector('header') // De header wordt geselecteerd
    if (scroll > 10) { // Als de scroll positie groter is dan 200px
        header.classList.add('scroll') // De class scroll wordt toegevoegd aan de header
    } else { // Als de scroll positie kleiner is dan 200px
        header.classList.remove('scroll') // De class scroll wordt verwijderd van de header
    }
})

displayLoader(); // De loader wordt getoond

dataDisplay().then((result) => {
    onRouteChanged(result);
}); 

async function dataDisplay () {

    try {

        const data = await fetchData();

        globalData = data;
        
        return data;

    // Error handling
    } catch (error) {
        console.log(error)
        console.log('ERROR')
        window.location.hash = "error"
        errorState()
    }

}

