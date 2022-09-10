const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkout = () => {
  const allWorkout = Workout.getAllWorkout()
  return allWorkout 
} 

const getOneWorkout = (id) => {
  const workout = Workout.getOneWorkout(id)
  return workout
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert ={
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-ES", {timeZone: 'UTC'})
  }

  return Workout.createNewWorkout(workoutToInsert)
} 

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout =  Workout.updateOneWorkout(workoutId, changes)
  return updatedWorkout
}

const deleteOneWorkout = (workoutId) => {
  Workout.deleteWorkout(workoutId)
}

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}