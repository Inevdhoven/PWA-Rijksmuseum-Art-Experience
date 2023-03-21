import { fetchData } from "./data.js"

export function hero(data) {

    const homePage = document.querySelector('#homepage');
    const mainEl = document.querySelector('main');
    
    if (!homePage) {

        mainEl.innerHTML = '';

        const newSectionHtml = `

                <section>
                    <h1>Bekijk kunst altijd en overal</h1>
                </section>
                <section>
                    <h2>Top stukken:</h2>
                    <ul></ul>
                </section>
                <section>
                    <h2>Onderwerpen</h2>
                    <ul>
                        <li><a href="#artists">Kunstenaars</a></li>
                        <li><a href="#pot">Potten</a></li>
                        <li><a href="#meubels">Meubels</a></li>
                        <li><a href="#foto">Foto's</a></li>
                        <li><a href="#schilderij">Schilderijen</a></li>
                        <li><a href="#beeldhouwwerk">Beeldhouwwerk</a></li>
                        <li><a href="#porselein">Porselein</a></li>
                        <li><a href="#hout">Hout</a></li>
                        <li><a href="#olieverf">Olieverf</a></li>
                        <li><a href="#goud">Goud</a></li>
                        <li><a href="#diamant">Diamant</a></li>
                        <li><a href="#ijzer">Ijzer</a></li>
                        <li><a href="#papier">Papier</a></li>
                    </ul>
                </section>
        
        `;
        
        const newSection = document.createElement('section'); // Er wordt een nieuwe section aangemaakt
        newSection.innerHTML = newSectionHtml; // De html wordt in de section gezet
        mainEl.appendChild(newSection); // De nieuwe section wordt toegevoegd aan de main
    }

    const heroObject = data.artObjects.find(artObject => artObject.objectNumber === 'SK-A-3064') // De afbeelding van het object met het objectnummer SK-A-5 wordt opgehaald
    const heroImage = heroObject.webImage.url // De url van de afbeelding wordt opgehaald
    const hero = document.querySelector('main section:first-of-type section:first-of-type h1') // De hero wordt geselecteerd

    hero.insertAdjacentHTML(
        'afterend', 
        `<img src="${heroImage}" alt="Achtergrond afbeelding: ${heroObject.title}">`
    ) // De afbeelding wordt in de hero gezet
}

export function top10(data) { // De functie top10 wordt aangemaakt en krijgt de data mee
    const top10 = data.artObjects.map(artObject => artObject).slice(0, 10) // De eerste 10 objecten worden opgehaald uit de api
    const ulTop10 = document.querySelector('main section:first-of-type section:nth-of-type(2) ul') // De ul wordt geselecteerd

    top10.map((artObject, index) => { // De 10 objecten worden doorlopen
        // De data wordt in de ul gezet 
        ulTop10.insertAdjacentHTML( 
            'afterbegin', 
            `<li>
                <a href="#details/${artObject.objectNumber}">
                    <img src="${artObject.webImage.url}" alt="${artObject.title}">
                    <h3>${artObject.title}</h3>
                </a>
            </li>`
        )
    })
}