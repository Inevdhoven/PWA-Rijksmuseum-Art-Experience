import express from 'express';
import request from 'request';
import * as dotenv from 'dotenv';

const router = express.Router();

router.get('/', (req, res) => {
    request(`https://www.rijksmuseum.nl/api/nl/collection/?key=A5AmwJwG&ps=10`, {json: true}, function (err, response, data){
		if (err) {
			res.send(err);
            console.error('error:', error);
		} else {
            console.log('API response:', data.artObjects[0]); 
            const artWorks = data.artObjects;
			res.render('main', {layout : 'index', data: artWorks});
		}
    })
})

router.get('/zoeken', (req, res) => {
    res.render('search', {layout : 'index'});
})

router.get('/kunstenaars', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/potten', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/meubels', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/fotos', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/schilderijen', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/beeldhouwwerken', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/porselein', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/hout', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/olieverf', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/goud', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/diamant', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/ijzer', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/papier', (req, res) => {
    res.render('category', {layout : 'index'});
});

router.get('/artists/details', (req, res) => {
    res.render('details', {layout : 'index'});
})

router.get('/search', (req, res) => {
    res.render('search', {layout : 'index'});
})

router.get('/error', (req, res) => {
    res.render('error', {layout : 'index'});
})


export {router}