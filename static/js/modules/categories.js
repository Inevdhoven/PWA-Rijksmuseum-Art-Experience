export function artists(data) {
    const artists = data.artObjects.map(artObject => artObject.principalOrFirstMaker)
    const uniqueArtists = [...new Set(artists)] // Source: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates 
    let result = '';

    const listItems = uniqueArtists.map((artist) => {
        return `
        <li>
            <a href="#artist/${artist}">
                ${artist}
            </a>
        </li>`
    });
    
    listItems.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result
}

export function listJars(items) {
    const jars = items.artObjects.map(artObject => artObject) // Haalt de artObjects uit de data en zet ze in een array
    let result = '';
    
    const listJars = jars.map((jar) => {
        if(jar.hasImage !== false){
            return `
            <li>
                <a href="#details/${jar.objectNumber}">
                    <h2>${jar.title}</h2>
                    <img src="${jar.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listJars.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;

}

export function listFurniture(items) {
    const furnitures = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listFurniture = furnitures.map((furniture) => {
        if(furniture.hasImage !== false){
            return `
            <li>
                <a href="#details/${furniture.objectNumber}">
                    <h2>${furniture.title}</h2>
                    <img src="${furniture.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listFurniture.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listPhotos(items) {
    const photos = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listPhotos = photos.map((photo) => {
        if(photo.hasImage !== false){
            return `
            <li>
                <a href="#details/${photo.objectNumber}">
                    <h2>${photo.title}</h2>
                    <img src="${photo.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listPhotos.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listPaintings(items) {
    const paintings = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listPaintings = paintings.map((painting) => {
        if(painting.hasImage !== false){
            return `
            <li>
                <a href="#details/${painting.objectNumber}">
                    <h2>${painting.title}</h2>
                    <img src="${painting.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listPaintings.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listSculptures(items) {
    const sculptures = items.artObjects.map(artObject => artObject)

    let result = '';

    const listSculptures = sculptures.map((sculpture) => {
        if(sculpture.hasImage !== false){
            return `
            <li>
                <a href="#details/${sculpture.objectNumber}">
                    <h2>${sculpture.title}</h2>
                    <img src="${sculpture.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listSculptures.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listPorcelain(items) {
    const porcelain = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listPorcelain = porcelain.map((porcelain) => {
        if(porcelain.hasImage !== false){
            return `
            <li>
                <a href="#details/${porcelain.objectNumber}">
                    <h2>${porcelain.title}</h2>
                    <img src="${porcelain.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listPorcelain.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listWood(items) {
    const woodWork = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listWood = woodWork.map((wood) => {
        if(wood.hasImage !== false){
            return `
            <li>
                <a href="#details/${wood.objectNumber}">
                    <h2>${wood.title}</h2>
                    <img src="${wood.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listWood.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listOilpaintings(items) {
    const oilpaintings = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listOilpaintings = oilpaintings.map((oilpainting) => {
        if(oilpainting.hasImage !== false){
            return `
            <li>
                <a href="#details/${oilpainting.objectNumber}">
                    <h2>${oilpainting.title}</h2>
                    <img src="${oilpainting.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listOilpaintings.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listGold(items) {
    const gold = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listGold = gold.map((gold) => {
        if(gold.hasImage !== false){
            return `
            <li>
                <a href="#details/${gold.objectNumber}">
                    <h2>${gold.title}</h2>
                    <img src="${gold.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listGold.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listDiamonds(items) {
    const diamonds = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listDiamonds = diamonds.map((diamond) => {
        if(diamond.hasImage !== false){
            return `
            <li>
                <a href="#details/${diamond.objectNumber}">
                    <h2>${diamond.title}</h2>
                    <img src="${diamond.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listDiamonds.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listIron(items) {
    const irons = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listIron = irons.map((iron) => {
        if(iron.hasImage !== false){
            return `
            <li>
                <a href="#details/${iron.objectNumber}">
                    <h2>${iron.title}</h2>
                    <img src="${iron.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listIron.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}

export function listPapers(items) {
    const papers = items.artObjects.map(artObject => artObject)
   
    let result = '';

    const listPapers = papers.map((paper) => {
        if(paper.hasImage !== false){
            return `
            <li>
                <a href="#details/${paper.objectNumber}">
                    <h2>${paper.title}</h2>
                    <img src="${paper.webImage.url}">
                </a>
            </li>`
        } else {
            return ``
        }
    })

    listPapers.map(item => {
        result += item  // Zorgt dat de listItems worden samengevoegd tot 1 string
    })

    return result;
    
}