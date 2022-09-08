const fooService = require('../services/fooService')

const getAllFoo = (req, res) => {
  const allFoo = fooService.getAllFoo()
  res.send({status: 'OK', data: allFoo})
}

const getOneFoo = (req, res) => {
  const { params: { fooId }} = req

  if(!fooId) return 

  const oneFoo = fooService.getOneFoo(fooId)
  res.send({ status: 'OK', data: oneFoo })
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
  const { body, params: { fooId }} = req

  if(!fooId) return 

  const updatedFoo = fooService.updateOneFoo(fooId, body)
  res.send({status: 'OK', data: updatedFoo})
}

const deleteOneFoo = (req, res) => {
  const { params: { fooId }} = req

  if(!fooId) return 

  fooService.deleteOneFoo(fooId)
  res.status(204).send({ status: "OK" })
}

module.exports = {
  getAllFoo, 
  getOneFoo, 
  createNewFoo, 
  updateOneFoo, 
  deleteOneFoo 
}
