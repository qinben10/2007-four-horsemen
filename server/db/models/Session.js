const Sequelize = require('sequelize');
const { DATE } = Sequelize;
const db = require('../conn');

const Session = db.define('session',{
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
})

module.exports = Session;