const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllFoo = () => {
  return DB.foo
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

module.exports = {
  getAllFoo,
  createNewFoo
}