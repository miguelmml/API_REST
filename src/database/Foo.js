const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllFoo = () => {
  return DB.foo
}

const getOneFoo = (id) => {
  const foo = DB.foo.find(item => item.id === id )

  if(!foo) return

  return foo
}

const createNewFoo = (newFoo) => {
  const isAlreadyAdded = DB.foo.findIndex(item => item.email === newFoo.email)
  
  if(isAlreadyAdded > 0){
    return
  }

  DB.foo.push(newFoo)
  saveToDatabase(DB)
  return newFoo
}

const updateOneFoo = (fooId, changes) => {
  const indexForUpdated = DB.foo.findIndex(item => item.id === fooId)

  if(indexForUpdated === -1) return 

  const updatedFoo = {
    ...DB.foo[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString('en-US', {timeZone: "UTC"})
  }

  DB.foo[indexForUpdated] = updatedFoo
  saveToDatabase(DB)

  return updatedFoo
}

const deleteFoo = (fooId) => {
  const indexForDelete = DB.foo.findIndex(item => item.id === fooId)

  if(indexForDelete === -1) return

  DB.foo.splice(indexForDelete, 1)
  saveToDatabase(DB)
}

module.exports = {
  getAllFoo,
  getOneFoo,
  createNewFoo,
  updateOneFoo,
  deleteFoo
}