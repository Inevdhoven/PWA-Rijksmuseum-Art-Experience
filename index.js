import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {router} from './router/routes.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

app.set('view engine', 'hbs');
app.set('views', 'views') 


app.use(express.static(__dirname + '/static')); // Hier zit bijvoorbeeld css in
app.use('/', express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        replaceS0: function (url) {
            if (url.includes('=s0')) {
                return url.replace('=s0', '=s500');
            }
            return url;
        },
        replaceS1: function (url) {
            if (url.includes('=s0')) {
                return url.replace('=s0', '=s900');
            }
            return url;
        },
        replaceS2: function (url) {
            if (url.includes('=s0')) {
                return url.replace('=s0', '=s1200');
            }
            return url;
        },
        replaceS3: function (url) {
            if (url.includes('=s0')) {
                return url.replace('=s0', '=s1500');
            }
            return url;
        },
        replaceS4: function (url) {
            if (url.includes('=s0')) {
                return url.replace('=s0', '=s300');
            }
            return url;
        },
    }
}))

app.use('/', router);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
}); 
