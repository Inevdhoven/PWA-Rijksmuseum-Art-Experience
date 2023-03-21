import { displayLoader, hideLoader } from "./loader.js"
import { hero, top10 } from "./home.js"
import { CONFIG } from "./config.js"

export async function fetchData(type, material, q, involvedMaker, objectNumber) {
    let url =  `${CONFIG.BASE_URL}?key=${CONFIG.API}&ps=100`

    if (type) {
        url += `&type=${type}`
    }
    if (material) {
        url += `&material=${material}`
    }
    if (q) {
        url += `&q=${q}`
    }
    if (involvedMaker) {
        url += `&involvedMaker=${involvedMaker}`
    }
    if (objectNumber) {
        url = `${CONFIG.BASE_URL}/${objectNumber}?key=${CONFIG.API}&ps=100`
    }

    const args = {'type': type, 'material': material, 'q': q, 'involvedMaker': involvedMaker, 'objectNumber': objectNumber};

    const response = await fetch(url);

    if ( response.ok ) {

        let result = await response.json();
        result.apiArguments = args;
    
        return result;
    } else {
        // console.log(response);
        throw new Error('HTTP ERROR!!!')
        window.location.hash = "error"
        errorState()
    }
}