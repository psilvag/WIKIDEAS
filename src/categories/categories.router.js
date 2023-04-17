const router = require('express').Router()

const categoriesServices = require('./categories.services')

//const {use} = require('chai')

router.route('/')
    .get(categoriesServices.getAllCategories)
    
module.exports = router
