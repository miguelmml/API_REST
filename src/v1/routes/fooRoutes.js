const express = require('express')
const router = express.Router()

const fooController = require('../../controllers/fooController')

router.get('/', fooController.getAllFoo)

router.get('/:id', fooController.getOneFoo)

router.post('/', fooController.createNewFoo)

router.patch ('/:id', fooController.updateOneFoo)

router.delete ('/:id', fooController.deleteOneFoo)

module.exports = router
