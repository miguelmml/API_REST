const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

const getAllWorkout = () => {
  return DB.workouts
}

const getOneWorkout = (id) => {
  const workout = DB.workouts.find(item => item.id === id )

  if(!workout) return

  return workout
}

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex(workout => workout.email === newWorkout.email)
  
  if(isAlreadyAdded > 0){
    throw {
      status: 400,
      message: `Workout with email ${newWorkout.email} is already added.`
    }
  }
  
  try{
    DB.workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout
  } catch (error) {
    throw {
      status: 500,
      message: error?.message || error
    }
  }
}

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdated = DB.workouts.findIndex(item => item.id === workoutId)

  if(indexForUpdated === -1) return 

  const updatedWorkout = {
    ...DB.workouts[indexForUpdated],
    ...changes,
    updatedAt: new Date().toLocaleString('es-ES', {timeZone: "UTC"})
  }

  DB.workouts[indexForUpdated] = updatedWorkout
  saveToDatabase(DB)

  return updatedWorkout
}

const deleteWorkout = (workoutId) => {
  const indexForDelete = DB.workouts.findIndex(item => item.id === workoutId)

  if(indexForDelete === -1) return

  DB.workouts.splice(indexForDelete, 1)
  saveToDatabase(DB)
}

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteWorkout
}