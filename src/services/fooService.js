const { v4: uuid } = require('uuid')
const Foo = require('../database/Foo')

const getAllFoo = () => {
  const allFoo = Foo.getAllFoo()
  return allFoo 
} 

const getOneFoo = (id) => {
  const foo = Foo.getOneFoo(id)
  return foo
}

const createNewFoo = (newFoo) => {
  const fooToInsert ={
    ...newFoo,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-ES", {timeZone: 'UTC'})
  }

  return Foo.createNewFoo(fooToInsert)
} 

const updateOneFoo = (fooId, changes) => {
  const updatedFoo =  Foo.updateOneFoo(fooId, changes)
  return updatedFoo
}

const deleteOneFoo = (fooId) => {
  Foo.deleteFoo(fooId)
}

module.exports = {
  getAllFoo,
  getOneFoo,
  createNewFoo,
  updateOneFoo,
  deleteOneFoo
}