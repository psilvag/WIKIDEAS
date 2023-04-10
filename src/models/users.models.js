const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 50]
        }
    },
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        },
        unique: true
    }
   
})

module.exports = Users          