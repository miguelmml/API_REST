const fooService = require('../services/fooService')

const getAllFoo = (req, res) => {
  const allFoo = fooService.getAllFoo()
  res.send({status: 'OK', data: allFoo})
}

const getOneFoo = (req, res) => {
  const oneFoo = fooService.getOneFoo(req.params.id)
  res.send(`Get One: ${req.params.id}`)
}

const createNewFoo = (req, res) => {
  const { body } = req

  if(!body.name||!body.email||!body.phone){
    return
  }
  
  const newFoo = {
    name: body.name,
    email: body.email,
    phone: body.phone
  }

  const createdFoo = fooService.createNewFoo(newFoo)
  res.status(201).send({ status: 'OK', data: createdFoo })
}

const updateOneFoo = (req, res) => {
  const updatedFoo = fooService.updateOneFoo(req.params.id)
  res.send(`Update: ${req.params.id}`)
}

const deleteOneFoo = (req, res) => {
  fooService.deleteOneFoo(req.params.id)
  res.send(`Delete: ${req.params.id}`)
}

module.exports = {
  getAllFoo, 
  getOneFoo, 
  createNewFoo, 
  updateOneFoo, 
  deleteOneFoo 
}
