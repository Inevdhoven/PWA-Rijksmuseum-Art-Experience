import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import {router} from './router/routes.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.set('view engine', 'hbs');
app.set('views', 'views')

app.use('/', router);
app.use(express.static(__dirname + '/static')); // Hier zit bijvoorbeeld css in
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express)

app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'
}))

app.post('/submit-form', (req, res) => {
    console.log(req.body)
    // send a response
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});
