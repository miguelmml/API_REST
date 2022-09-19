const { v4: uuid } = require('uuid')
const Workout = require('../database/Workout')

const getAllWorkout = (filterParams) => {
  try{
    const allWorkout = Workout.getAllWorkout(filterParams)
    return allWorkout 
  } catch (error){
    throw error
  }
} 

const getOneWorkout = (workoutId) => {
  try{
    const workout = Workout.getOneWorkout(workoutId)
    return workout
  } catch (error){
    throw error
  }
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert ={
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("es-ES", {timeZone: 'UTC'})
  }
  try{
    const createdWorkout = Workout.createNewWorkout(workoutToInsert)
    return createdWorkout
  } catch (error){
    throw error
  }
} 

const updateOneWorkout = (workoutId, changes) => {
  try{
    const updatedWorkout =  Workout.updateOneWorkout(workoutId, changes)
    return updatedWorkout
  } catch (error){
    throw error
  }
}

const deleteOneWorkout = (workoutId) => {
  try{
    Workout.deleteWorkout(workoutId)
  } catch (error){
    throw error
  }
}

module.exports = {
  getAllWorkout,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}