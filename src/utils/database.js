const { Sequelize } = require('sequelize')
const config = require('../../config')

const db = new Sequelize(config.db.dbConnectionString,{
    dialect: 'postgres',

    // host: config.db.host,
    // username: config.db.user,
    // password: config.db.pass,
    // database: config.db.name,
    // port: config.db.port,
   
})


module.exports = db
