const db = require('./db');

const Venue = db.sequelize.define('venuenewyork', {
    id: {
        type: db.Sequelize.STRING,
        primaryKey: true
    },
    name: { type: db.Sequelize.STRING },
    lat: { type: db.Sequelize.DOUBLE },
    lon: { type: db.Sequelize.DOUBLE },
    address: { type: db.Sequelize.STRING },
    city: { type: db.Sequelize.STRING },
    state: { type: db.Sequelize.STRING },
    checkin: { type: db.Sequelize.INTEGER },
    checkeduser: { type: db.Sequelize.INTEGER },
    currentuser: { type: db.Sequelize.INTEGER },
    todo: { type: db.Sequelize.INTEGER },
    categoryid: { type: db.Sequelize.STRING }
});

module.exports = Venue;