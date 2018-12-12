const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Venue = require('./models/Venue');
const fs = require('fs');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

i = 0;
venuesDB = 57484;
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
    res.render('mapa');
});

app.get("/groups", function (req, res) {
    res.render('mapagroups');
});

app.get("/checked", function (req, res) {
    res.render('mapachecked');
});

app.get("/venues", function (req, res) {
    res.sendFile(__dirname + "/venuesny.json");
});

app.get("/nystate", function (req, res) {
    res.sendFile(__dirname + "/nystate.json");
});

app.listen(3000, function () {
    console.log("Servidor rodando...");
});

function createJSON() {
    Venue.findAll({
        where: {
            [Op.or]: [{ state: 'ny' }, { state: 'NY' }, { state: 'New York' }, { state: 'new york' }, { state: 'New york' }, { state: 'Ny' }]
        }
    }).then(function (response) {
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

        fs.writeFile('venuesny.json', venuesJSON, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
        });
    });
}