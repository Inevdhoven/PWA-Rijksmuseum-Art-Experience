export function artistOverview(artist) {
    const artWork = artist.artObjects.map(artObject => artObject)

    let result = ''

    const listArtWork = artWork.map((art) => {
        if(art.hasImage !== false){
            return `
            <li>
                <a href="#details/${art.objectNumber}">
                    <h2>${art.title}</h2>
                    <img src="${art.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listArtWork.map(art => {
        result += art  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result
}