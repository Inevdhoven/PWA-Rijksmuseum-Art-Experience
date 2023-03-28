// Eventlisteners
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

window.addEventListener("load", () => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js")
      console.log("Service Worker Registered")
    }
});
