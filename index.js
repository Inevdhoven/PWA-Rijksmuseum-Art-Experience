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
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));


app.engine('hbs', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: __dirname + '/views/partials'
}))

app.use('/', router);


app.get('/', function(req, res){
    if(req.session.page_views){
        res.redirect('/home');
    } else {
       req.session.page_views = 1;
       res.render('zero-state', {layout : 'index'});
    }
 });

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
}); 
