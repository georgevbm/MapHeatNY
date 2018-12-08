const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Venue = require('./models/Venue');
const fs = require('fs');

venuesDB = 206415;
i = 0;
venuesArray = new Array();

// createJSON();

// Config
// Template Engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", function (req, res) {
    // Venue.all().then(function (response) {
    res.render('mapa');
    // });
});

app.get("/venues", function (req, res) {
    res.sendFile(__dirname+"/venue.json");
});

app.listen(3000, function () {
    console.log("Servidor rodando...");
});

function createJSON() {
    Venue.findAll().then(function (response) {
        while (i < venuesDB) {
            var dict = {
                venue: {
                    name: response[i].get('name'),
                    lat: response[i].get('lat'),
                    lon: response[i].get('lon'),
                    checkedUser: response[i].get('checkeduser')
                },
            };
            venuesArray.push(dict);
            i++;
        }

        var venuesJSON = JSON.stringify(venuesArray);

        fs.writeFile('venue.json', venuesJSON, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    });
}