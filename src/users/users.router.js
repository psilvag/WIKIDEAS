const router = require('express').Router()

const userServices = require('./users.services')

//const {use} = require('chai')


router.route('/')
    .get(userServices.getAllUsers)
    .post(userServices.postUser)

router.route('/:id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete( userServices.deleteUser)

module.exports = router
