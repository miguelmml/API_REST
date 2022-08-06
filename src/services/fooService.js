const { v4: uuid } = require('uuid')
const Foo = require('../database/Foo')

const getAllFoo = () => {
  const allFoo = Foo.getAllFoo()
  return allFoo 
} 

const getOneFoo = () => {
  return
}

const createNewFoo = (newFoo) => {
  const fooToInsert ={
    ...newFoo,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-ES", {timeZone: 'UTC'})
  }

  return Foo.createNewFoo(fooToInsert)
} 

const updateOneFoo = () => {
  return
}

const deleteOneFoo = () => {
  return
}

module.exports = {
  getAllFoo,
  getOneFoo,
  createNewFoo,
  updateOneFoo,
  deleteOneFoo
}