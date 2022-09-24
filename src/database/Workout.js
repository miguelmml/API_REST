const DB = require('./db.json')
const { saveToDatabase } = require('./utils')

/**
 * @openapi
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: Tommy V  
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt: 
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */
const getAllWorkout = (filterParams) => {
  let workouts = DB.workouts

  if(filterParams.mode){
    return workouts.filter((workout) => {
      return workout.mode.toLowerCase().includes(filterParams.mode)
    })
  }
  return workouts
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