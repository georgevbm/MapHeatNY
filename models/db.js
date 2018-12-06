const Sequelize = require('sequelize');

// Conexão com o BD - Postgres
const sequelize = new Sequelize('compurbdb', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}