const express = require('express');
const morgan = require('morgan');


//set up an express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listren for request
app.listen(3000);

//Middleware & Static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Narutoverse is the best', snippet: 'What do you have to say about this fandom'},
        {title: 'Onepieceverse will solo the Narutoverse', snippet: 'What do you have to say about this fandom'},
        {title: 'Saitama is just a crazy dude', snippet: 'What do you have to say about this fandom'},
    ];
res.render('index', { title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog '});
});

//add the puzzle page
app.get('/puzzle', (req, res) => {
    res.render('puzzle', { title: 'Gaming panel'});
})

//404 error page
app.use((req, res) => {
    res.status(404).render('404' , { title: '404'});
});