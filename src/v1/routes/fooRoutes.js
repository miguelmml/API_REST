const express = require('express')
const router = express.Router()
const fooController = require('../../controllers/fooController')

router.get('/', fooController.getAllFoo)

router.get('/:fooId', fooController.getOneFoo)

router.post('/', fooController.createNewFoo)

router.patch('/:fooId', fooController.updateOneFoo)

router.delete('/:fooId', fooController.deleteOneFoo)

module.exports = router
