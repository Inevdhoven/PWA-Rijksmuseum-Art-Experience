import '../library/routie.js';
import { search, getSearchData, displaySearchData } from './search.js';
import { artists, listJars, listFurniture, listPhotos, listPaintings, listSculptures, listPorcelain, listWood, listOilpaintings, listGold, listDiamonds, listIron, listPapers } from './categories.js';
import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"
import { details, showFullImage } from './details.js';
import { artistOverview } from './overview.js';
import { fetchData } from './data.js';
import { errorState } from './error.js';

export function onRouteChanged(data) {
    const routerView = document.querySelector('main');
    hideLoader() // De loader wordt verborgen

    routie({
        '': function() {
            displayLoader()
            hero(data) // data wordt doorgegeven aan de functie hero
            top10(data) // data wordt doorgegeven aan de functie top10
            hideLoader()
        },
        'search': async function() {
            displayLoader()

            routerView.innerHTML = 
            `<section class="search">
                ` + search() +`

                <ul class="search-results"></ul>
            </section>`;

            const searchButton = document.querySelector('button')

            // Source: https://www.techiedelight.com/detect-enter-key-press-javascript/
            document.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                    getSearchData()
                }
            });

            searchButton.addEventListener('click', () => {
                getSearchData()
            })

            hideLoader()
        },
        'artists': function() {
            displayLoader()
            // Tip van Maijla om javascript: history.go(-1) te gebruiken om een pagina terug te gaan
            routerView.innerHTML = 
            `<section class="category artists">
                <a href="javascript: history.go(-1)">Terug</a> 
                <h1>Kunstenaars</h1>
                <ul>
                    `+ artists(data) +`
                </ul>
            </section>`
            hideLoader()
        },
        'artist/:name': async function(involvedMaker) {
            displayLoader()

            const result = await fetchData(null, null, null, involvedMaker)
            const overview = artistOverview(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>`+ involvedMaker +`</h1>
                <ul>
                    `+ overview +`
                </ul>
            </section>`

            hideLoader()
        },
        'pot': async function() {
            displayLoader()

            const result = await fetchData('pot')
            const jarList = listJars(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Potten</h1>
                <ul>
                    `+ jarList +`
                </ul>
            </section>`

            hideLoader()
        }, 
        'meubels': async function() {
            displayLoader()
            
            const result = await fetchData(null, null, 'meubels', null) 
            const furnitureList = listFurniture(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Meubels</h1>
                <ul>
                    `+ furnitureList +`
                </ul>
            </section>`

            hideLoader()
        },
        'foto': async function() {
            displayLoader()

            const result = await fetchData('foto')
            const photosList = listPhotos(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Foto's</h1>
                <ul>
                    `+ photosList +`
                </ul>
            </section>`

            hideLoader()
        },
        'schilderij': async function() {
            displayLoader()

            const result = await fetchData('schilderij')
            const paintingList = listPaintings(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Schilderijen</h1>
                <ul>
                    `+ paintingList +`
                </ul>
            </section>`

            hideLoader()
        },
        'beeldhouwwerk': async function() {
            displayLoader()

            const result = await fetchData('beeldhouwwerk')
            const sculpturesList = listSculptures(result)

            fetchData('beeldhouwwerk')

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Beeldhouwwerk</h1>
                <ul>
                    `+ sculpturesList +`
                </ul>
            </section>`

            hideLoader()
        },
        'porselein': async function() {
            displayLoader()

            const result = await fetchData(null, 'porselein')
            const porcelainList = listPorcelain(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Porselein</h1>
                <ul>
                    `+ porcelainList +`
                </ul>
            </section>`
            
            hideLoader()
        },
        'hout': async function() {
            displayLoader()

            const result = await fetchData(null, 'hout')
            const woodList = listWood(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Hout</h1>
                <ul>
                    `+ woodList +`
                </ul>
            </section>`

            hideLoader()
        },
        'olieverf': async function() {
            displayLoader()

            const result = await fetchData(null, 'olieverf')
            const oilpaintList = listOilpaintings(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Olieverf</h1>
                <ul>
                    `+ oilpaintList +`
                </ul>
            </section>`
            
            hideLoader()
        },
        'goud': async function() {
            displayLoader()

            const result = await fetchData(null, 'goud')
            const goldList = listGold(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Goud</h1>
                <ul>
                    `+ goldList +`
                </ul>
            </section>`

            hideLoader()
        },
        'diamant': async function() {
            displayLoader()

            const result = await fetchData(null, 'diamant')
            const diamondList = listDiamonds(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Diamant</h1>
                <ul>
                    `+ diamondList +`
                </ul>
            </section>`

            hideLoader()
        },
        'ijzer': async function() {
            displayLoader()

            const result = await fetchData(null, 'ijzer')
            const ironList = listIron(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Ijzer</h1>
                <ul>
                    `+ ironList +`
                </ul>
            </section>`

            hideLoader()
        },
        'papier': async function() {
            displayLoader()

            const result = await fetchData(null, 'papier')
            const paperList = listPapers(result)

            routerView.innerHTML = 
            `<section class="category">
                <a href="javascript: history.go(-1)">Terug</a>
                <h1>Papier</h1>
                <ul>
                    `+ paperList +`
                </ul>
            </section>`

            hideLoader()
        },
        'details/:objectNumber': async function(objectNumber) {
            displayLoader()

            const result = await fetchData(null, null, null, null, objectNumber)
            const detailsData = details(result, objectNumber)
            
            routerView.innerHTML = 
            `<section class="details">
                <a href="javascript: history.go(-1)">Terug</a>
                `+ detailsData +`
            </section>`

            showFullImage(result, objectNumber)

            hideLoader()
        },
        '*': function () {
            routerView.innerHTML = 
            `<section class="error">
                `+ errorState() +`
            </section>`
        }
         
    })
}

