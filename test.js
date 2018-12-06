const Sequelize = require('sequelize');
const sequelize = new Sequelize('compurbdb', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(function () {
    console.log("Conectado ao BD!");
}).catch(function (erro) {
    console.log("Erro: " + erro);
});;