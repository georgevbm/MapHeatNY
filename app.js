const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Venue = require('./models/Venue');

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", function (req, res) {
    Venue.all().then(function (response) {
        res.render('mapa', { venues: response });
    });
});

app.listen(3000, function () {
    console.log("Servidor rodando...");
});

